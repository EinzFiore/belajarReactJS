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
    formPost: {
      userId: 1,
      title: "",
      body: "",
      id: 1,
    },
  };

  // Mendapatkan data Post dari API
  getPostAPI = () => {
    axios
      // _sort dan _order (untuk sorting berdasarkan ID dan mengurutkan secara descending)
      .get("http://localhost:3004/posts?_sort=id&_order=desc")
      .then((result) => {
        this.setState({
          post: result.data,
        });
      });
  };

  // fungsi untuk menambahkan data post blog
  postDataKeAPI = () => {
    // menambahkan data ke alamat url beserta data baru dari state formPost
    axios.post("http://localhost:3004/posts", this.state.formPost).then(
      (res) => {
        console.log(res);
        // setelah data berhasil ditambahkan, selanjutnya menjalankan fungsi getPostAPI
        this.getPostAPI();
      },
      // menangkap pesan error jika memang terjadi error
      (err) => {
        console.log("error :", err);
      }
    );
  };

  // parameter (event) berfungsi untuk mengetahui detail event pada saat fungsi di eksekusi
  handleFormChange = (event) => {
    // membuat sebuah formPost baru yang mana data didapat dari state formPost
    let formPostNew = { ...this.state.formPost };
    // membuat data unik dengan getTime()
    let timestamp = new Date().getTime();
    // menyeleksi untuk bagian ID pada state lalu diisi dengan nilai dari timestamp
    formPostNew["id"] = timestamp;
    // menyeleksi bagian form yang diinputkan berdasarkan name (dapat dilihat ketika kita console.log event) lalu diisi dengan data value
    // pada tiap form yang diisi
    formPostNew[event.target.name] = event.target.value;
    // mengisi data state formPost dengan formPostNew
    this.setState({
      formPost: formPostNew,
    });
  };

  // fungsi untuk menghandle bagian button submit
  handleSubmit = () => {
    // ketika fungsi ini dieksekusi, maka akan menjalankan fungsi postDataKeAPI
    this.postDataKeAPI();
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
            <div className="row mb-2">
              <div className="col-sm-6">
                {/* membuat card tambah post */}
                <div className="addPost">
                  <div className="card">
                    <div className="card-header">
                      <input
                        type="text"
                        name="title"
                        className="form-control"
                        placeholder="Post Title"
                        // pada aksi onChange disini akan mengeksekusi fungsi handleFormChange
                        onChange={this.handleFormChange}
                      />
                    </div>
                    <div className="card-body">
                      <div className="form-group">
                        <label for="body">Post Content</label>
                        <textarea
                          name="body"
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          onChange={this.handleFormChange}
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={this.handleSubmit}
                      >
                        Post
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* looping state menggunakan fungsi map lalu me return component <Post/> beserta props yang menerima data dari state post */}
            {this.state.post.slice(0, 3).map((post) => {
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
