pragma solidity ^0.4.2;

contract PanToken {
  string public name = "PAN Token";
  string public symbol = "PAN";
  string public standard = "Pan Token v1.0";
  uint256 public totalSupply;

  event Transfer(
    address indexed _from,
    address indexed _to,
    uint256 _value
  );

  //transfer event

  mapping(address => uint256) public balanceOf;
 //allowance
  function PanToken (uint256 _initialSupply) public {
    balanceOf[msg.sender] = _initialSupply;
    totalSupply = _initialSupply;
  }
  function transfer(address _to, uint256 _value) public returns (bool success) {
        require(balanceOf[msg.sender] >= _value);
        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;

        Transfer(msg.sender, _to, _value);

        return true;
  }
  // approve
  function approve(address _spender, uint256 _value) public returns (bool success) {
    return true;
  }
  //transferFrom


}
