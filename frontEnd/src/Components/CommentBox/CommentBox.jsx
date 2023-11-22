import React from "react";
import "./CommentBox.css";

export default function CommentBox({profImg,title,comment,username}) {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4" style={{marginBottom:"6rem"}}>
      <div className="userComment p-4">
        <div className="userProfile">
          <img src={profImg} alt={username} />
        </div>

        <h1
          className="commentTitle d-flex justify-content-center pb-2"
          style={{ marginTop: "4rem",fontWeight:"bolder" }}
        >
          {title}
        </h1>
        <div
          className="w-100 mb-3"
          style={{ height: "3px", backgroundColor: "#f7f7f7" }}
        ></div>
        <p
          style={{ textAlign: "justify", fontSize: "13px", fontWeight: "400" }}
        >
          {comment}
        </p>
        <span className="d-flex justify-content-end mt-2" style={{fontSize:"14px"}}>{username}</span>
      </div>
    </div>
  );
}
