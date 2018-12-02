var PanTokenSale = artifacts.require("./PanTokenSale.sol");


contract('PanTokenSale', function(accounts){
  var tokenSaleInstance;
  var buyer = accounts[1];
  var tokenPrice = 1000000000000000; //in wei
  var numberOfTokens;

  it('initializes the contracts with the correct values', function(){
    return PanTokenSale.deployed().then(function(instance){
      tokenSaleInstance = instance;
      return tokenSaleInstance.address
    }).then(function(address){
      assert.notEqual(address, 0x0, ' has contract address');
      return tokenSaleInstance.tokenContract();
    }).then(function(address){
      assert.notEqual(address, 0x0, 'has a token contract address');
      return tokenSaleInstance.tokenPrice();
    }).then(function(price){
      assert.equal(price, tokenPrice, 'token price is correct')
    });
  });
  it('facilitates token buying', function(){
      return PanTokenSale.deployed().then(function(instance){
        tokenSaleInstance = instance;
        numberOfTokens = 10;
        return tokenSaleInstance.buyTokens(numberOfTokens, { from: buyer, value: numberOfTokens * tokenPrice})
      }).then(function(receipt){
        return tokenSaleInstance.tokenSold();
      }).then(function(amount) {
        assert.equal(amount.toNumber(), numberOfTokens, 'increments the number of tokens sold');
      });
  });






});
