import React, { Component } from 'react';

class Form extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       zipcode: "",
       country:"Canada"
    };
  };

  handleZipCode = event => {
    this.setState({
      zipcode: event.target.value
    })
  }

  handleCountryChange = event => {
    this.setState({
      country: event.target.value
    })
  }


  handleSubmit = event => {
    console.log(`${this.state.zipcode} ${this.state.country}`)
    event.preventDefault();
  }
  render() {
      const {zipcode, country} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Country:</label>
          <select value={country} onChange={this.handleCountryChange}>
            <option value="Canada">Canada</option>
            <option value="US">United States</option>
            <option value="France">France</option>
            <option value="India">India</option>
          </select>
        </div>
        <div>
          <input type="text" placeholder="ZIP Code" value={zipcode} onChange={this.handleZipCode}/>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
