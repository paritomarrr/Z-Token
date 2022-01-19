var ZToken = artifacts.require("./ZToken.sol");
contract("ZToken", function (accounts) {
  var tokenInstance;
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
        return tokenInstance.balanceOf(accounts[0]);
      })
      .then(function (adminBalance) {
        assert.equal(
          adminBalance.toNumber(),
          100000,
          "iniital value of the token"
        );
      });
  });
});
