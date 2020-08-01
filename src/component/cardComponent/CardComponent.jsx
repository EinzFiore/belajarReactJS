import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import logo from "./img/imgCard.jpg";

//  style={{ width: 18 + "rem" }} --> syntax untuk penggunaan tag style di jsx
const CardComponent = (props) => {
  return (
    <div className="d-flex">
      <div className="card ml-4 mt-4 " style={{ width: 18 + "rem" }}>
        <img src={logo} className="card-img-top" />
        <div className="card-body">
          <h4>{props.nama}</h4>
          <p className="lead">{props.status}</p>
          <p className="card-text">{props.deskripsi}</p>
        </div>
      </div>
    </div>
  );
};

// default props
CardComponent.defaultProps = {
  nama: "Your Name",
  status: "Your Status",
  deskripsi: "Your Deskripsi",
};

export default CardComponent;
