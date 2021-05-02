const { Parser } = require("json2csv");
const fs = require("fs");

const json2csvParser = new Parser();

var api = require("etherscan-api").init("ARTKZ7T3JBJ3T5IAHD4MCS7XJTPT7VAMAJ");

var account = "0x75A24653056003c52828fC185bE504f70CE93788";

var transactionList = api.account.txlist(account, 1, "latest", 1, 100, "desc");

transactionList.then(function (transactionData) {
  // console.log(transactionData);
  var result = transactionData["result"];
  console.log(result);
  var processedResult = result.map((tx) => {
    var timeStamp = tx.timeStamp * 1000;
    var debit = 0;
    if (tx.to.toUpperCase() === account.toUpperCase()) {
      debit = tx.value;
    }
    var credit = 0;
    if (tx.from.toUpperCase() === account.toUpperCase()) {
      credit = tx.value;
    }
    return {
      date: new Date(timeStamp).toLocaleDateString(),
      transaction: tx.hash,
      debit: debit / 1e18,
      credit: credit / 1e18,
    };
  });
  // console.log(x);
  const csv = json2csvParser.parse(processedResult);
  var filename = `report_${account}_${Date.now()}.csv`;
  fs.writeFile(filename, csv, function (err) {
    if (err) throw err;
    console.log("Saved!");
  });
});
