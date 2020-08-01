import React from "react";
import CardComponent from "../../component/cardComponent/CardComponent";

class Home extends React.Component {
  render() {
    return (
      <div className="d-flex card-comp justify-content-center">
        <CardComponent
          nama="Enjun"
          deskripsi="Seorang Manusia Biasa yang hidup dalam lingkaran kehidupan"
          status="Manusia"
        />
        <CardComponent
          nama="Fiore"
          deskripsi="Seorang Cerdikiawan yang hidup dalam alam semesta"
          status="Manusia tanpa Status"
        />
        <CardComponent
          nama="Klotze"
          deskripsi="Seorang Wibuwan yang hidup dalam dunia Isekai"
          status="Wibuwan"
        />
        <CardComponent />
      </div>
    );
  }
}

export default Home;
