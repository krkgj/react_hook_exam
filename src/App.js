import React from "react";

class App extends React.Component {
  state = {
    count: 0,
  };
  increment = () => {
    const { count } = this.state;
    this.setState({
      count: count + 1,
    });
  };
  render() {
    const { count } = this.state;
    console.log(count);
    return (
      <div>
        <h3>{this.state.count}</h3>
        <button onClick={() => this.increment()}>Increment</button>
      </div>
    );
  }
}

export default App;
