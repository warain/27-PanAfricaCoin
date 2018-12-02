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
        assert.equal(receipt.logs.length, 1, 'triggers one event');
        assert.equal(receipt.logs[0].event, 'Sell', 'should be the "Sell" event');
        assert.equal(receipt.logs[0].args._buyer, buyer, 'logs the account that purchased the tokens');
        assert.equal(receipt.logs[0].args._amount, numberOfTokens, 'logs the number of tokens purchased');
        return tokenSaleInstance.tokenSold();
      }).then(function(amount) {
        assert.equal(amount.toNumber(), numberOfTokens, 'increments the number of tokens sold');
        // try to buy tokens different from the ether values
        return tokenSaleInstance.buyTokens(numberOfTokens, { from: buyer, value: 1 });
      }).then(assert.fail).catch(function(error){
        assert(error.message.indexOf('revert') >= 0, 'msg.value must equal number of tokens in wei');
      });
  });






});
