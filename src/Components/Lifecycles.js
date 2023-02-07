import React from "react";

export default class CallAPI extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      country : {}
    }
  }
  // Component loads
  componentDidMount () {
    console.log("Component has loaded");
    fetch('https://restcountries.com/v3.1/peru').then((response) => response.json()).then((data) => this.setState({ country: data}));
    }
    // Component updates (Props or state changes)
  componentDidUpdate () {
    console.log("Component has Updated");
    console.log(this.state)
    }

// When component dies (unmounted)
  componentWillUnmount() {
    console.log("Component will unmount");
    }

  render () {
    return <div>Country Info</div>
  }

  }
