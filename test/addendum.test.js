const Addendum = artifacts.require("./Addendum.sol");

contract("Addendum", (accounts) => {
  let contract;

  before(async () => {
    contract = await Addendum.deployed();
  });

  describe("Ordering", async () => {
    it("Make order", async () => {
      const tx = await contract.createOrder(accounts[0], 0, 100);
      var x = await contract.pendingOrders(accounts[0]);
      console.log(x);
      console.log(tx);

      const { logs } = tx;
      assert.ok(Array.isArray(logs));
      assert.equal(logs.length, 1);

      const log = logs[0];
      assert.equal(log.event, "OrderCreated");
    });

    it("Fulfilled order", async () => {
      await contract.fulfillOrder(accounts[0], "https://www.google.com");
    });
  });
});
