var PanTokenSale = artifacts.require("./PanTokenSale.sol");


contract('PanTokenSale', function(accounts){
  var PanTokenSaleInstance;
  var tokenPrice = 1000000000000000; //in wei

  it('initializes the contracts with the correct values', function(){
    return PanTokenSale.deployed().then(function(instance){
      PanTokenSaleInstance = instance;
      return PanTokenSaleInstance.address
    }).then(function(address){
      assert.notEqual(address, 0x0, ' has contract address');
      return PanTokenSaleInstance.tokenContract();
    }).then(function(address){
      assert.notEqual(address, 0x0, 'has a token contract address');
      return PanTokenSaleInstance.tokenPrice();
    }).then(function(price){
      assert.equal(price, tokenPrice, 'token price is correct')
    });
  });
});
