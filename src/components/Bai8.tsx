import React, { Component } from "react";

type StateType = {
  count: number;
};
export default class Bai8 extends Component<object, StateType> {
// lấy ra id của cái setInterval để sau xóa cái đếm đó
  timerId: number | undefined = undefined;
  constructor(props: object) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidMount(): void {
    this.timerId = setInterval(() => {
      this.setState((prevState) => {
        if (prevState.count<10) {
          return { count: prevState.count+1 };
        } else {
          return { count: 0 };
        }
      });
    }, 1000); 
  }

  render() {
    return (
      <div>
        <div>
          Count: <span>{this.state.count}</span>
        </div>
      </div>
    );
  }
}
