import React from "react";
import logo from "./logo.png";
import "./App.css";
import Clock from "./Components/Clock.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    // Initialise component state to contain "date" attribute with current date and time
    this.state = { showClock: true };
  }
  
  toggleClock = () => {
    this.setState({
      showClock: !this.state.showClock,
    });
  }; 

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.state.sho}
          <button onClick={this.toggleClock}>Toggle Clocks</button>
          {this.state.showClock ? <Clock timeZone="America/Los_Angeles" /> : ""}
          {this.state.showClock ? <Clock timeZone="Asia/Singapore" /> : ""}
          {this.state.showClock ? <Clock timeZone="Europe/London" /> : ""}
          
          
          
          
        </header>
      </div>
    );
  }
}

export default App;
