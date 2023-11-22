import React from "react";
import "./SectionComment.css";
import CommentBox from "../CommentBox/CommentBox";

export default function SectionComment() {
  return (
    <section className="SectionComment">
      <div className="container">
        <div className="row text-white" style={{ marginBottom: "10rem" }}>
          <div className="col d-flex justify-content-center align-items-center">
            <h1 style={{ fontSize: "24px" }}>نظرات دانش پژوهان</h1>
          </div>
        </div>

        <div className="row">
          <CommentBox
            profImg="/images/prof.png"
            title="چگونه دوره مجازی برگزار کنیم؟"
            comment="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
           استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
           ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
           کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،"
            username="حسین یوسفیان"
          />

          <CommentBox
            profImg="/images/prof.png"
            title="چگونه دوره مجازی برگزار کنیم؟"
            comment="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
           استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
           ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
           کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،"
            username="حسین یوسفیان"
          />

          <CommentBox
            profImg="/images/prof.png"
            title="چگونه دوره مجازی برگزار کنیم؟"
            comment="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
           استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
           ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
           کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،"
            username="حسین یوسفیان"
          />
        </div>
      </div>
    </section>
  );
}
