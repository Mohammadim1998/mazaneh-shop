import React from "react";
import "./NewCourseSection.css";
import CourseBox from "../CourseBox/CourseBox";
import SectionHeader from "../SectionHeader/SectionHeader";

export default function NewCourseSection() {
  return (
    <section className="NewCourseSection">
      <div className="container">
        <div className="row mb-5">
          <SectionHeader
          iconSection="/images/newIconCourse.png"
            title="جدیدترین دوره های مهارتی"
            btnTitle="همه دوره ها"
          />
        </div>
        <div className="row">
          <CourseBox
            title='دوره کاربردی "مدیریت رسانه در خانواده"'
            content="در این دوره درباره این صحبت میکنیم که چگونه رسانه ها را در خانه هایمان مدیریت کنیم از آسیب هایش جلوگیری کنیم و از فرصت هایش درست استفاده کنیم            "
            cardImage="/images/boxImages/box-4.png"
            minute="860"
            meet="43"
            provider="تشکیلات رسانه ای تربیتی ماذنه"
            price="190000"
            oldPrice="250000"
            offPrice="15"
            teacherExist="true"
          />

          <CourseBox
            title='دوره کاربردی "مدیریت رسانه در خانواده"'
            content="در این دوره درباره این صحبت میکنیم که چگونه رسانه ها را در خانه هایمان مدیریت کنیم از آسیب هایش جلوگیری کنیم و از فرصت هایش درست استفاده کنیم            "
            cardImage="/images/boxImages/box-2.png"
            minute="860"
            meet="43"
            provider="تشکیلات رسانه ای تربیتی ماذنه"
            price="190000"
            oldPrice="250000"
            offPrice="30"
            teacherExist="true"
          />

          <CourseBox
            title='دوره کاربردی "مدیریت رسانه در خانواده"'
            content="در این دوره درباره این صحبت میکنیم که چگونه رسانه ها را در خانه هایمان مدیریت کنیم از آسیب هایش جلوگیری کنیم و از فرصت هایش درست استفاده کنیم            "
            cardImage="/images/boxImages/box-3.png"
            minute="860"
            meet="43"
            provider="تشکیلات رسانه ای تربیتی ماذنه"
            price="190000"
            oldPrice="250000"
            offPrice="40"
            teacherExist="true"
          />

          <CourseBox
            title='دوره کاربردی "مدیریت رسانه در خانواده"'
            content="در این دوره درباره این صحبت میکنیم که چگونه رسانه ها را در خانه هایمان مدیریت کنیم از آسیب هایش جلوگیری کنیم و از فرصت هایش درست استفاده کنیم            "
            cardImage="/images/boxImages/box-1.png"
            minute="860"
            meet="43"
            provider="تشکیلات رسانه ای تربیتی ماذنه"
            price="190000"
            oldPrice="250000"
            offPrice="40"
            teacherExist="true"
          />
        </div>
      </div>
    </section>
  );
}
