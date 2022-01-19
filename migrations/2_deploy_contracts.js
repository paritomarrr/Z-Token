const ZToken = artifacts.require("./ZToken");

module.exports = function (deployer) {
  deployer.deploy(ZToken, 100000);
};
