import React, { Component } from "react";

class Bai7 extends Component {
  constructor(props: {}) {
    super(props);
    this.state = {time: new Date() };
  }

  componentDidMount() {
    this.time = setInterval(() => {
      this.setState({time: new Date() }); 
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.time);
  }

  render() {
    return (
      <h3>
        Thời gian hiện tại là: {this.state.time.getHours()} : {this.state.time.getMinutes()} : {this.state.time.getSeconds()}
      </h3>
    );
  }
}

export default Bai7;
