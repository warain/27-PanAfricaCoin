var PanToken = artifacts.require("./PanToken.sol");
var PanTokenSale = artifacts.require("./PanTokenSale.sol");


module.exports = function(deployer) {
  deployer.deploy(PanToken, 1000000).then(function(){
    var tokenPrice = 1000000000000000; //in wei
    // Token price is 0.001 Ether
    return deployer.deploy(PanTokenSale, PanToken.address, tokenPrice);
  });
};
