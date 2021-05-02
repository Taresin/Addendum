const Addendum = artifacts.require("./Addendum.sol");

contract("Addendum", (accounts) => {
  let contract;

  before(async () => {
    contract = await Addendum.deployed();
  });

  describe("Ordering", async () => {
    it("Make order", async () => {
      await contract.orderTranscript(accounts[0], 0, 100).send(
        {
          from: accounts[0],
          gas: 40000,
          value: 10000000000,
        },
        function (err, result) {
          console.log(err);
          console.log(result);
        }
      );

      var x = contract.pendingOrders(accounts[0]);
      console.log(x);
      // assert.equal(totalSupply, 0, "total supply is correct");

      // const dot = await contract.peek(0, 0);
      // console.log(dot);
      // assert.equal(
      //   dot["0"],
      //   "0x0000000000000000000000000000000000000000",
      //   "minted coin address is correct"
      // );
      // assert.equal(dot["1"], 0, "red value is correct");
      // assert.equal(dot["2"], 0, "green value is correct");
      // assert.equal(dot["3"], 0, "blue value is correct");
    });

    // it("creates a 0,0 token", async () => {
    //   let row = 0;
    //   let col = 0;
    //   let r = 0;
    //   let g = 0;
    //   let b = 0;
    //   const result = await contract.mint(row, col, r, g, b);
    //   const totalSupply = await contract.totalSupply();
    //   assert.equal(totalSupply, 1, "total supply is correct");

    //   const event = result.logs[0].args;
    //   assert.equal(event.tokenId.toNumber(), 0, "id is correct");
    //   assert.equal(
    //     event.from,
    //     "0x0000000000000000000000000000000000000000",
    //     "from is correct"
    //   );
    //   assert.equal(event.to, accounts[0], "to is correct");

    //   const dot = await contract.peek(row, col);
    //   console.log(dot);
    //   assert.equal(dot["0"], accounts[0], "minted coin address is correct");
    //   assert.equal(dot["1"], r, "red value is correct");
    //   assert.equal(dot["2"], g, "green value is correct");
    //   assert.equal(dot["3"], b, "blue value is correct");
    // });
  });
});
