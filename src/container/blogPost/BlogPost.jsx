import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.css";
import $, { extend, post } from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Post from "../../component/Post/Post";
import axios from "axios";

class BlogPost extends Component {
  // siapkan sebuah state baru dan mengatur property "post" kedalam bentuk array kosong
  state = {
    post: [],
  };

  // Mendapatkan data Post dari API
  getPostAPI = () => {
    axios.get("http://localhost:3004/posts").then((result) => {
      this.setState({
        post: result.data,
      });
    });
  };

  // parameter (data) menerima data ID Post
  handleRemove = (data) => {
    axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {
      // melihat hasil dari aksi delete
      console.log(res);
      // setelah berhasil delete, akan diteruskan ke fungsi getPostAPI()
      this.getPostAPI();
    });
  };

  // component ketika ingin di mount
  componentDidMount() {
    // versi fetch
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   // ambil data response lalu ubah kedalam bentuk json
    //   .then((response) => response.json())
    //   // dari bentuk json diatur kedalam state post yang sebelumnya hanya memiliki nilai array kosong
    //   .then((json) => {
    //     this.setState({
    //       post: json,
    //     });
    //   });

    // versi axios
    // ubah url ke alamat url fake api
    this.getPostAPI();
  }

  render() {
    return (
      <Fragment>
        <p>Blog Spot</p>
        <div className="container">
          <div className="jumbotron">
            {/* looping state menggunakan fungsi map lalu me return component <Post/> beserta props yang menerima data dari state post */}
            {this.state.post.slice(0, 4).map((post) => {
              return (
                <Post
                  key={post.id}
                  data={post}
                  // membuat props remove dengan menyimpan hasil dari aksi fungsi handleRemove.
                  remove={this.handleRemove}
                  timePost="8/28/2020"
                />
              );
            })}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default BlogPost;
