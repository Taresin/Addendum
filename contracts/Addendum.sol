// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

contract Addendum {
  
  address payable public owner;

  struct Order{
    address client;
    uint timeStart;
    uint timeEnd;    
  }

  mapping (address => Order) public pendingOrders;

  function orderTranscript(
    address desiredAddress, 
    uint timeStart, 
    uint timeEnd
    ) public payable {
    require (msg.value >= 0.001 ether);
    owner.transfer(msg.value);

    pendingOrders[msg.sender].client = desiredAddress;
    pendingOrders[msg.sender].timeStart = timeStart;
    pendingOrders[msg.sender].timeEnd = timeEnd;
  }

}
