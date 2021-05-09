const Addendum = artifacts.require("./Addendum.sol");

contract("Addendum", (accounts) => {
  let contract;

  before(async () => {
    contract = await Addendum.deployed();
  });

  describe("Ordering", async () => {
    it("Make order", async () => {
      const tx = await contract.createOrder(accounts[0], 0, 100);

      const { logs } = tx;
      assert.ok(Array.isArray(logs));
      assert.equal(logs.length, 1);

      const log = logs[0];
      assert.equal(log.event, "OrderCreated");
      assert.equal(log.args.user.toString(), accounts[0]);
    });

    it("Fulfilled order", async () => {
      const tx = await contract.fulfillOrder(
        accounts[0],
        "https://www.google.com"
      );

      const { logs } = tx;
      assert.ok(Array.isArray(logs));
      assert.equal(logs.length, 1);

      const log = logs[0];
      assert.equal(log.event, "OrderFulfilled");
      assert.equal(log.args.user.toString(), accounts[0]);
      assert.equal(log.args.url, "https://www.google.com");
    });
  });
});
