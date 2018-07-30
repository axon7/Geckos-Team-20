import React, { Component } from 'react';
import './Budget.css';
import Add from './components/Add';
import List from './components/List';
import Balance from './components/Balance';

class Budget extends Component {
  constructor(props){
    super(props);
    this.state = {
      amountHistory: [
        {id: 1, amount: 200},
        {id: 2, amount: 240},
        {id: 3, amount: 385},
      ],
      total: ''
    }
    this.handlerAmountChange = this.handlerAmountChange.bind(this);
    this.totalAmount = this.totalAmount.bind(this);
  }
  totalAmount() {
    var array = this.state.amountHistory;
    var total = 0;
    var i;
    for (i = 0; i < array.length; i++) {  //loop through the array
      total += array[i].amount;  //Do the math!
    }
    return total;
  }

  handlerAmountChange(event) {
    event.preventDefault();
    // const newID = this.state.amountHistory[this.state.amountHistory.length-1].id + 1;
    // const value = event.target.value;
    console.log(event.target.value); 
  }
  
  render() {
    
    return (
      <div className="Budget"> 
        <Add handler={this.handlerAmountChange} />
        <Balance balance={this.totalAmount()} />

        <h3>Your budget activity:</h3>
        <List amountHistory={this.state.amountHistory} />
      </div>
    );
  }
}

export default Budget;
