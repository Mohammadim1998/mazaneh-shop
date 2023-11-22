import React from "react";
import "./CourseBox.css";

export default function CourseBox({
  title,
  content,
  cardImage,
  minute,
  meet,
  provider,
  price,
  oldPrice,
  offPrice,
  teacherExist,
}) {
  return (
    <div className="col-sm-12 col-md-4 col-lg-3">
      <div className="card-box">
        {offPrice ? (
          <div className="offCircle">
            <div className="offCircleInner" style={{ padding: "5px" }}>
              <div>
                <span style={{ fontWeight: "900" }}>{offPrice}</span>%
              </div>
              <span style={{ fontSize: "12px" }}>تخفیف</span>
            </div>
          </div>
        ) : null}

        <div className="card-box-header">
          <img src={cardImage} alt="" />
        </div>

        <div className="card-box-body p-3 d-flex flex-column">
          <h1
            className="card-box-title"
            style={{
              fontSize: "12px",
              fontWeight: "900",
              marginBottom: "10px",
            }}
          >
            {title}
          </h1>
          <p
          className="card-box-par"
            style={{
              fontSize: "11px",
              fontWeight: "600",
              textAlign: "justify",
            }}
          >
            {content}
          </p>

          {teacherExist ? (
            <div className="teachers d-flex justify-content-between align-items-center">
              <div className="teacher-right d-flex">
                <div className="teacher-img">
                  <img src="/images/08.jpg" alt="" />
                </div>
                <div className="teacher-img">
                  <img src="/images/09.jpg" alt="" />
                </div>
              </div>

              <div className="teacher-left d-flex justify-content-center align-items-center">
                <div
                  style={{ marginRight: "1rem" }}
                  className="course-time d-flex flex-column  justify-content-center align-items-center"
                >
                  <span>{meet}</span>
                  <span>جلسه</span>
                </div>
                <div
                  style={{ marginRight: "1rem" }}
                  className="course-time d-flex flex-column  justify-content-center align-items-center"
                >
                  <span>{minute}</span>
                  <span>دقیقه</span>
                </div>
              </div>
            </div>
          ) : null}
        </div>
        <div
          style={{ marginTop: "20px" }}
          className="provider d-flex justify-content-between align-items-center"
        >
          <div className="provider-right d-flex flex-column">
            <span
              style={{ fontSize: "12px", fontWeight: "bolder" }}
              className="d-block"
            >
              ارائه دهنده
            </span>
            <span style={{ fontSize: "12px", color: "#4e7fff" }}>
              {provider}
            </span>
          </div>
          <div className="provider-left d-flex flex-column">
            <del className="off-price " style={{color:'red',fontWeight:'bolder'}}>{oldPrice}</del>
            <span style={{ color: "green",fontWeight:'bolder' }}>{price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
