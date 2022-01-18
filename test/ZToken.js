var ZToken = artifacts.require("./ZToken.sol");
contract("ZToken", function (accounts) {
  it("sets the total supply upon deployment", function () {
    return ZToken.deployed()
      .then(function (instance) {
        tokenInstance = instance;
        return tokenInstance.totalSupply();
      })
      .then(function (totalSupply) {
        assert.equal(
          totalSupply.toNumber(),
          100000,
          "sets the total supply to 100000"
        );
      });
  });
});
