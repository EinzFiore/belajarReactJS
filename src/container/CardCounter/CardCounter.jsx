import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

class CardCounter extends React.Component {
  state = {
    number: 4,
  };

  // Menerima sebuah nilai/value setelah method actionPlus dijalankan
  handleCounterChange = (newValue) => {
    // mengirim value ke method onCounterChange yang ada pada Component Counter
    this.props.onCounterChange(newValue);
  };

  actionPlus = () => {
    this.setState(
      {
        number: this.state.number + 1,
      },
      // Ketika selesai menambahkan angka ke state number, jalankan arrow function lalu ke method handleCounterChange dengan mengirim nilai state number terbaru
      () => {
        this.handleCounterChange(this.state.number);
      }
    );
  };

  actionMinus = () => {
    if (this.state.number > 0) {
      this.setState(
        {
          number: this.state.number - 1,
        },
        () => {
          this.handleCounterChange(this.state.number);
        }
      );
    }
  };
  render() {
    return (
      <div className="container">
        <h1 className="display-4">Latihan State</h1>
        <div className="cart d-flex mb-4">
          <svg
            width="5em"
            height="5em"
            viewBox="0 0 16 16"
            className="bi bi-cart-plus"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8.5 5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 .5-.5z"
            />
            <path
              fillRule="evenodd"
              d="M8 7.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0v-2z"
            />
            <path
              fillRule="evenodd"
              d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
            />
          </svg>
          <h1 className="mt-3">{this.state.number}</h1>
        </div>
        <div className="button-state">
          <button
            className="btn btn-primary mr-2 btn-md"
            onClick={this.actionPlus}
          >
            +
          </button>
          <button
            className="btn btn-warning text-light btn-md"
            onClick={this.actionMinus}
          >
            -
          </button>
        </div>
      </div>
    );
  }
}

export default CardCounter;
