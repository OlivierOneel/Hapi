import React from "react"
class Counter extends React.Component {
    // constructor(props) {
    //   super(props)
    //   this.state = {
    //     count: 0,
    //   }
    // //   this.increment = this.increment.bind(this),
    // //   this.decrement = this.decrement.bind(this),
    // //   this.reset=this.reset.bind(this)
    // }
    constructor(props){
        super(props)
        this.state={
            count:0
        }
        this.increment=this.increment.bind(this)
        this.decrement=this.decrement.bind(this)
        this.reset=this.reset.bind(this)
    }

    increment() {
      this.setState({
        count: this.state.count + 1
      });
    };
    
    decrement() {
        if(this.state.count!=0){
      this.setState({
        count: this.state.count - 1
        })};
    };
  
    reset() {
      this.setState({
        count: 0
      });
    };
  
    render() {
      return (
  
     <div>
    <h1>{this.state.count}</h1>
     <button className='inc' onClick={this.increment}>+</button>
      <button className='dec' onClick={this.decrement}>-</button>
    </div>
      );
    }
  }

  export default Counter