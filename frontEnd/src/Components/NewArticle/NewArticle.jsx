import React from "react";
import "./NewArticle.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import ArticleCourse from "../ArticleCourse/ArticleCourse";

export default function NewArticle() {
  return (
    <section className="newArticle">
      <div className="container">
        <div className="row mb-5">
          <SectionHeader
            iconSection="/images/newIconPowerpoint.png"
            title="جدیدترین مقالات"
            btnTitle="همه مقالات"
          />
        </div>
        {/*********** END ROW ONE ***********/}

        <div className="row">
          <div className="col-12 col-md-6 articleRight">
            <div className="articleRightInner">
              <div className="articleRightcontent p-3">
                <h4>پاورپوینت "ترور آنلاین" + درسنامه</h4>
                <p>
                  در این سخنرانی که با محوریت بیانیه گام دوم انقلاب طراحی شده
                  چند نمونه از آثار و نتایج جنگ روانی تشریح میشود. همچنین برخی
                  از تکنیک های عملیات روانی...
                </p>
                <div
                  className="articleRightFooter d-flex justify-content-between align-items-center"
                  style={{ marginTop: "20px" }}
                >
                  <span
                    className="articlecourseDate text-white"
                    style={{ fontSize: "14px", fontWeight: "100" }}
                  >
                    چهارشنبه 17 آذر 1400
                  </span>
                  <button className="articlecourseBtn">نمایش بیشتر</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="row">
              <ArticleCourse
                title='دوره کاربردی "مدیریت رسانه در خانواده"'
                content="در این دوره درباره این صحبت میکنیم که چگونه رسانه ها را در خانه هایمان مدیریت کنیم از آسیب هایش جلوگیری کنیم و از فرصت هایش درست استفاده کنیم            "
                cardImage="/images/boxImages/box-5.png"
                date="چهارشنبه 17 آذر 1400"
              />

              <ArticleCourse
                title='دوره کاربردی "مدیریت رسانه در خانواده"'
                content="در این دوره درباره این صحبت میکنیم که چگونه رسانه ها را در خانه هایمان مدیریت کنیم از آسیب هایش جلوگیری کنیم و از فرصت هایش درست استفاده کنیم            "
                cardImage="/images/boxImages/box-5.png"
                date="چهارشنبه 17 آذر 1400"
              />
            </div>
          </div>
        </div>
        {/*********** END ROW TWO ***********/}
        <div className="row pt-5 pb-5 rowThree d-flex justify-content-between">
          <div className="col-12 col-sm-6">
            <div className="Colleague pt-5 p-0 ">
              <h1 style={{ marginBottom: "2rem", fontWeight: "bolder" }}>
                همکاران ما
              </h1>
              <p
                style={{
                  fontSize: "11px",
                  textAlign: "justify",
                  fontWeight: "600",
                  marginBottom: "3rem",
                }}
              >
                همکاری با معتبر ترین مراکز علمی و دانشگاهی، برگزاری دوره های
                آموزشی و صدور گواهینامه پایان دوره مشترک، اقدامی است در جهن
                ارائه خدمات بهتر آموزشی و قدردانی از اعتماد شما دانش پژوهان عزیز
              </p>
            </div>
          </div>
          <div className="col-12 col-sm-6">
            <div className="logos">
              <div className="logo">
                <img src="/images/logo/logo-1.png" alt="logo-republic" />
              </div>
              <div className="logo">
                <img src="/images/logo/logo-sham.png" alt="logo-sham" />
              </div>
              <div className="logo">
                <img
                  src="/images/logo/logo-mazane-footer.png"
                  alt="logo-mazane"
                />
              </div>
            </div>
          </div>
        </div>
        {/*********** END ROW THREE ***********/}
        <div className="row d-flex justify-content-evenly align-items-center rowFour">
          <div
            className="col-5 col-lg-2 footer-counter"
            style={{ backgroundColor: "#505050" }}
          >
            <div>109219</div>
            <span>دانش پژوه</span>
          </div>
          <div
            className="col-5 col-lg-2 footer-counter"
            style={{ backgroundColor: "#020b4c" }}
          >
            <div>7</div>
            <span>دوره فعال</span>
          </div>
          <div
            className="col-5 col-lg-2 footer-counter"
            style={{ backgroundColor: "#01c1ee" }}
          >
            <div>38</div>
            <span>درس فعال</span>
          </div>
          <div
            className="col-5 col-lg-2 footer-counter"
            style={{ backgroundColor: "#f19123" }}
          >
            <div>14994</div>
            <span>گواهینامه</span>
          </div>
        </div>
        {/*********** END ROW FOUR ***********/}
      </div>
    </section>
  );
}
