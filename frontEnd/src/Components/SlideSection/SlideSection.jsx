import React from "react";
import "./SlideSection.css";
import { BsCameraVideo } from "react-icons/bs";
import { MdContentCopy } from "react-icons/md";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { FaRegFilePowerpoint } from "react-icons/fa";
import Slider from "../Slider/Slider";

export default function SlideSection() {
  return (
    <div className="slider w-100">
      <div className="container">
        <div className="row d-flex ">
          <div className="col-sm-12 col-lg-8 p-2 slide-right">
            <Slider />
          </div>

          <div className="col-sm-12 col-lg-4 slide-left d-flex align-items-center justify-content-center flex-wrap">
            <div className="col-6" >
              <div
                className="box-course"
                style={{ backgroundColor: "#020b4c" }}
              >
                <BsCameraVideo className="course-icon" />
                <h3>دوره های آموزشی</h3>
              </div>
            </div>

            <div className="col-6">
              <div
                className="box-course mx-3"
                style={{ backgroundColor: "#f29023" }}
              >
                <MdContentCopy className="course-icon" />
                <h3>محتوای آموزشی</h3>
              </div>
            </div>

            <div className="col-6">
              <div
                className="box-course"
                style={{ backgroundColor: "#505050" }}
              >
                <RiLightbulbFlashLine className="course-icon" />
                <h3>دوره های مهارتی</h3>
              </div>
            </div>

            <div className="col-6">
              <div
                className="box-course mx-3"
                style={{ backgroundColor: "#01c1ee" }}
              >
                <FaRegFilePowerpoint className="course-icon" />
                <h3>پاورپوینت ها</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
