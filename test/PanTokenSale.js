var PanTokenSale = artifacts.require("./PanTokenSale.sol");


contract('PanTokenSale', function(accounts){
  var PanTokenSaleInstance;
  it('initializes the contracts with the correct values', function(){
    return PanTokenSale.deployed().then(function(instance){
      PanTokenSaleInstance = instance;
      return PanTokenSaleInstance.address
    }).then(function(address){
      assert.notEqual(address, 0x0, ' has contract address');
    });
  });
});
