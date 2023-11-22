import React from "react";
import "./Footer.css";
import FooterItem from "../FooterItem/FooterItem";

export default function Footer() {
  return (
    <section className="footer">
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-4">
            <FooterItem title="ماذنه">
              <ul className="listFooter">
                <li>
                  <img src="/images/logo/gift.png" className="icon-footer" />
                  <a href="#">نذر آموزش</a>
                </li>
                <li>
                  <img src="/images/logo/us.png" className="icon-footer" />
                  <a href="#">درباره ما</a>
                </li>
                <li>
                  <img src="/images/logo/license.png" className="icon-footer" />
                  <a href="#">گواهینامه</a>
                </li>
                <li>
                  <img
                    src="/images/logo/broadcast.png"
                    className="icon-footer"
                  />
                  <a href="#">پخش زنده</a>
                </li>
                <li>
                  <img src="/images/logo/rules.png" className="icon-footer" />
                  <a href="#">قوانین بازاریابی</a>
                </li>
              </ul>
            </FooterItem>
          </div>

          <div className="col-6 col-md-4">
            <FooterItem title="تماس با ما">
              <ul className="listFooter">
                <li>
                  <img
                    src="/images/logo/location.png"
                    className="icon-footer"
                  />
                  <a href="#">قم بلوار امین،کوچه 8،نبش فرعی2،پلاک1</a>
                </li>
                <li>
                  <img src="/images/logo/phone.png" className="icon-footer" />
                  <a href="#">02532903201</a>
                </li>
                <li>
                  <img src="/images/logo/post.png" className="icon-footer" />
                  <a href="#">admin@mazane.org</a>
                </li>
              </ul>
              <span
                className="d-block mb-4 socialFooter"
                style={{ color: "#ffdb05" }}
              >
                شبکه های اجتماعی
              </span>
              <img
                src="/images/social/aparat.png"
                className="icon-footer"
                alt=""
              />
              <img
                src="/images/social/eitaa.png"
                className="icon-footer"
                alt=""
              />
              <img
                src="/images/social/Rectangle-8.png"
                className="icon-footer"
                alt=""
              />
              <img
                src="/images/social/Rectangle-7.png"
                className="icon-footer"
                alt=""
              />
              {/*
              <BsInstagram className="icon-footer" />
              <BsTelegram className="icon-footer" />
              <FiYoutube className="icon-footer" />
              <ImWhatsapp className="icon-footer" />
               */}
            </FooterItem>
          </div>

          <div className="col-12 col-md-4">
            <FooterItem>
              <div
                style={{ cursor: "pointer" }}
                className="logos-footer"
              >
                <div className="footer-logo-left">
                  <img src="/images/logo/logo-2.png" alt="" />
                </div>
                <div className="footer-logo-left">
                  <img src="/images/logo/logo-3.png" alt="" />
                </div>
                <div className="footer-logo-left">
                  <img src="/images/logo/logo.png" alt="" />
                </div>
              </div>
            </FooterItem>
          </div>
          
          <div className="footer-bottom d-flex justify-content-between align-items-center">
            <div className="footer-bottom-right">
              <img src="/images/logo-mazane-footer.png" alt="" />
            </div>

            <div className="footer-bottom-left">
              <h5 style={{ color: "#f3f3f3" }}>
                همه حقوق این وبسایت متعلق به تشکیلات رسانه ای تربیتی ماذنه
                میباشد.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
