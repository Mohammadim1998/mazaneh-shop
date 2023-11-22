import React from "react";
import "./ContentBox.css";

export default function ContentBox() {
  return (
    <div
      className="col-12 col-sm-12 col-md-12 col-lg-6 p-0 card-content-box"
      style={{
        height: "300px",
        border: `1px solid #efefef`,
        borderTopRightRadius: "10px",
        borderBottomLeftRadius: "10px",
      }}
    >
        <div className="card-top d-flex">
          <div className="card-top-right d-flex justify-content-center align-items-center">
            <img src="/images/powerPointImage.png" alt="" />
          </div>

          <div className="card-top-left p-3">
            <h1 className="mb-4 fw-bolder">
              پاورپوینت + درسنامه((جنگ نامرئی)){" "}
            </h1>
            <p style={{ fontSize: "12px",textAlign:"justify" }} className="aboutPowerpoint">
              اولین هدف این است که به مخاطبانمان بفهمانیم نبرد حق و باطل پایان
              ندارد.
              <br />
              فقط ابزارش عوض شده است. دیروز با شمشیر میجنگیدند امروز با
              رسانه.همین حس میتواند به او کمک کند تا صحنه را بشناسد و نسبت به
              محیط اطرافش بی تفاوت نباشد متاسفانه امروز در کشورمان بازار شایعات
              داغ است و تبیین این مسئله می تواند نقش مهمی در آگاه سازی مسئله
              ایفا کند.
            </p>
            <div className="introduce-powerpoint mt-2 d-flex justify-content-between align-items-center">
              <div className="introduce-img">
                <img src="/images/10.jpg" alt="" />
              </div>
              <div className="d-flex flex-column align-items-center">
                <span>100</span>
                <span>صفحه</span>
              </div>
            </div>
          </div>
        </div>
        <div className="card-foot p-4 d-flex justify-content-between align-items-center">
          <div className="provider-right d-flex flex-column">
            <span
              style={{ fontSize: "12px", fontWeight: "bolder" }}
              className="d-block"
            >
              ارائه دهنده
            </span>
            <span style={{ fontSize: "12px", color: "#4e7fff" }}>
              اداره کل امور مبلغین سازمان تبلیغات
            </span>
          </div>
          <div className="provider-left d-flex flex-column">
            <del className="off-price" style={{color:"red"}}>700000</del>
            <span style={{ color: "green",fontWeight:"bolder" }}>600000</span>
          </div>
        </div>
    </div>
  );
}
