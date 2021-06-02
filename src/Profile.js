import React from 'react';

export default class Profile extends React.Component {
  constructor() {
    console.warn("contructor called");
    super();
    this.state = {
      name: 'peter',
      email: 'peter@test.com',
      count: 0
    };
  }
  updatestate() {
    console.warn('update called');
    this.setState({
      name: 'shubham',

    });
  }
     updatecount() {
        console.warn('count called');
    this.setState({
    count: this.state.count + 1
    });
  
     }
 componentDidMount()
    {
      console.warn("ComponentDidMount");
    };
    componentDidUpdate()
    {
 console.warn("ComponentDidupdate");
    };
  render() {
       console.warn("RENDER CALLED");  
    return (

      <div>
        <h1> hello {this.state.name}</h1>
        <h1> email {this.state.email}</h1>
        <h1> count{this.state.count}</h1>
        <button
          onClick={() => {
            this.updatestate();
          }}
        >
          update name
        </button>
         <button
          onClick={() => {
            this.updatecount();
          }}
        >
          update count
        </button>
      </div>
    );
  }
}
