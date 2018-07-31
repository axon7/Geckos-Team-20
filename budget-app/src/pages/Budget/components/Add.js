import React, { Component } from 'react';
import styles from './add.css';

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {amount: ''};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({amount: event.target.value});
    }
    
    render() {
        return (
            <form  value={this.state.amount}>
                <p className={styles.inputInfo}>Please, enter an amount:</p>
                <input value={this.state.amount} onChange={this.handleChange} onBlur={this.props.handler} type="number" placeholder="Enter your amount" />
                {/* <button> Add value </button>  */}
                {/*add the value to the state*/}
                {/*show the value in*/} 
            </form>
        );
   }
}

export default Add;