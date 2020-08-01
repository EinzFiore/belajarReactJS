import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import CardCounter from "../CardCounter/CardCounter";

class Counter extends React.Component {
  state = {
    number: 4,
  };

  // Menerima nilai value dari fungsi onCounterChange(value) lalu diubah menjadi newValue dan nilai tersebut di set ke state number
  handleCounterChange = (newValue) => {
    this.setState({
      number: newValue,
    });
  };

  render() {
    return (
      <Fragment>
        <div className="container mt-4">
          <div className="jumbotron jumbotron-fluid">
            <h1>{this.state.number}</h1>
            <CardCounter
              // ketika counter berubah(klik), panggil fungsi handleCounterChange beserta kirim nilai value
              // Menerima value dari method onCounterChange yang ada di component CardCounter
              onCounterChange={(value) => this.handleCounterChange(value)}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Counter;
