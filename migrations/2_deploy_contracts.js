var PanToken = artifacts.require("./PanToken.sol");

module.exports = function(deployer) {
  deployer.deploy(PanToken, 1000000);
};
