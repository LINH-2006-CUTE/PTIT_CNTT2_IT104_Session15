import React, { Component } from 'react'
interface StateType {
    date: number;
}
export default class Bai3 extends Component <{}, StateType> {

    constructor (props: {}) {
        super (props);
        // this.state = {
        
        // }
    }

    // handleInput = ()
  render() {
    return (
        <>
        <form action="">
            <p>Ngay sinh :</p>
            
            <label htmlFor="">
                <input type="date" name="" id="" />
            </label>
            <br />
            <button type='submit'>Submit</button>
        </form>
        </>
    )
  }
}
