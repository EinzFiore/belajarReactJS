import React from "react";
const Post = (props) => {
  return (
    <div className="post">
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src="https://placeimg.com/200/200/tech" alt="" />
          </div>
          <div className="col-md-8">
            <div className="card-body ml-2">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.desc}</p>
              <p className="card-text">
                <small className="text-muted">{props.timePost}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
