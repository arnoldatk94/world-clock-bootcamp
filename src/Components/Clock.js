import React from "react";

export default class Clock extends React.Component{
  constructor(props) {
    super(props);
      
      this.state = {
        date: new Date(),
    
      }
  }
  
  componentDidMount () {
   // Arrow function fetches data for first parameter
   this.TimerId = setInterval(()=> {this.setState({date: new Date()})} ,1000)
    
  }

  componentWillUnmount () {
      // To clear the interval
      // To prevent memory leak
      clearInterval(this.TimerId)
  }

    render() {
    return (
      <div>
        <p>The current day and time in {this.props.timeZone} is:
        {` ${this.state.date.toLocaleString("en-GB", {timeZone: this.props.timeZone,})}`}
      </p>
      </div>
    );
  }
}

