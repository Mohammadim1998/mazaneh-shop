import React from "react";
import "./TeacherBox.css";

export default function TeacherBox({teacherName,image}) {
  return (
    <div className="col-6 col-sm-6 col-md-4 col-lg-2">
      <div className="teacherBox d-flex flex-column justify-content-center align-items-center">
        <div className="teacherBox-img mb-5">
          <img src={image} alt="" />
        </div>
        <div className="teacherBox-title">
          <span>{teacherName}</span>
        </div>
      </div>
    </div>
  );
}
