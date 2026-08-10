//React lifecycle is the sequence of stages a React component goes through during its lifetime, from creation to removal from the DOM.
// In a class component, the lifecycle has 3 main phases:

// Mounting → Component is created and added to the DOM.     componentDidMount()
// Updating → Component is re-rendered when its state or props change.     componentDidUpdate()
// Unmounting → Component is removed from the DOM.   componentWillUnmount()


import React from "react";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0
    };

    this.increase = this.increase.bind(this);
  }

  increase() {
    this.setState({
      count: this.state.count + 1
    });
  }

  componentDidMount() {
    console.log("Mounting phase");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Updating");
  }

  componentWillUnmount() {
    console.log("Unmounting");
  }

  render() {
    return (
      <>
        <h1>{this.state.count}</h1>

        <button onClick={this.increase}>+</button>
      </>
    );
  }
}

export default App;