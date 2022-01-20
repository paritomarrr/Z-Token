// async function getAccount(id) {
//   let accounts = await web3.eth.getAccounts();
//   return accounts[id];
// }

var ZToken = artifacts.require("./ZToken.sol");
contract("ZToken", function (accounts) {
  var tokenInstance;
  it("initializes the contract with the correct values", function () {
    return ZToken.deployed()
      .then(function (instance) {
        tokenInstance = instance;
        return tokenInstance.name();
      })
      .then(function (name) {
        assert.equal(name, "Z Token", "has the corect name");
        return tokenInstance.symbol();
      })
      .then(function (symbol) {
        assert.equal(symbol, "ZTC", "has the correct symbol");
        return tokenInstance.standard();
      })
      .then(function (standard) {
        assert.equal(standard, "Z Token v1.0", "has the correct standard");
      });
  });
  it("allocates the initial supply upon deployment", function () {
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
  it("transfer token ownship", function () {
    return ZToken.deployed()
      .then(function (instance) {
        tokenInstance = instance;
        // test 'require' statement first by transferring somethin larger than the sender's balance
        return tokenInstance.transfer.call(accounts[1], 9999999);
      })
      .then(assert.fail)
      .catch(function (error) {
        assert(
          error.message.indexOf("revert") >= 0,
          "error message must contain revert"
        );
      });
  });
});
