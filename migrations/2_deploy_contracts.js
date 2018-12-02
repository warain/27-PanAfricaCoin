var PanToken = artifacts.require("./PanToken.sol");
var PanTokenSale = artifacts.require("./PanTokenSale.sol");


module.exports = function(deployer) {
  deployer.deploy(PanToken, 1000000).then(function(){
    return deployer.deploy(PanTokenSale, PanToken.address);
  });
};
