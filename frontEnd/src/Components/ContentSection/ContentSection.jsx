import React from "react";
import "./ContentSection.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import ContentBox from "../ContentBox/ContentBox";

export default function ContentSection() {
  return (
    <section className="contentSection">
      <div className="container">
        <div className="row mb-5">
          <SectionHeader
          iconSection="/images/newIconPowerpoint.png"
            title="جدیدترین محتوا های آموزشی"
            btnTitle="همه محتوا ها"
          />
        </div>

        <div className="row contentBox-main-row d-flex justify-content-between align-items-center">
         <ContentBox />
         <ContentBox />
        </div>
      </div>
    </section>
  );
}
