import React from "react";
import "./ArticleCourse.css";

export default function ArticleCourse({
  title,
  content,
  cardImage,
  date
}) {

  return (
    <div className="col-12 px-3 col-sm-6 cardboxMain">
      <div className="card-box">
        <div className="card-box-header">
          <img src={cardImage} alt="" />
        </div>

        <div className="card-box-body p-2 d-flex flex-column">
          <h1
            className="card-box-title-power"
            style={{
              fontSize: "13px",
              fontWeight: "bolder",
             
            }}
          >
            {title}
          </h1>
          <p
          className="card-box-par-power"
            style={{
              fontSize: "13px",
              fontWeight: "500",
              textAlign: "justify",
            }}
          >
            {content}
          </p>
        </div>
        <div
          style={{ marginTop: "20px" }}
          className="provider d-flex justify-content-between align-items-center"
        >
          <span className="articlecourseDate">{date}</span>
          <button className="articlecourseBtn">نمایش بیشتر</button>
        </div>
      </div>
    </div>
  );
}
