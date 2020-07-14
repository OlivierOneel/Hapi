import React from "react"
class Counter extends React.Component {

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
  
    <div className='Counter'>
      <h1>{this.state.count}</h1>
      <button className='CounterButton' onClick={this.increment}>+</button>
      <button className='CounterButton' onClick={this.decrement}>-</button>
    </div>
      );
    }
  }

  export default Counter