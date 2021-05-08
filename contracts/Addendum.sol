// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

contract Addendum {
  
  event OrderCreated(address indexed user);
  event OrderFulfilled(address indexed user, string url);

  address payable public owner;

  struct Order{
    address client;
    uint timeStart;
    uint timeEnd;
    bool isFulfilled;    
  }

  mapping (address => Order) public pendingOrders;

  function createOrder(
    address desiredAddress, 
    uint timeStart, 
    uint timeEnd
  ) public payable {      
    pendingOrders[desiredAddress].client = msg.sender;
    pendingOrders[desiredAddress].timeStart = timeStart;
    pendingOrders[desiredAddress].timeEnd = timeEnd;
    pendingOrders[desiredAddress].isFulfilled = false;
    emit OrderCreated(desiredAddress);
  }

  function fulfillOrder(
    address desiredAddress,
    string memory url
  ) public {
    pendingOrders[desiredAddress].isFulfilled = true;
    emit OrderFulfilled(desiredAddress, url);
  }

}
