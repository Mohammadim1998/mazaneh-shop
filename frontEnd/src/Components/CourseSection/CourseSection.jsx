import React from "react";
import "./CourseSection.css";
import SectionHeader from "./../../Components/SectionHeader/SectionHeader";
import CourseBox from "../CourseBox/CourseBox";

export default function CourseSection() {
  return (
    <section className="courseSection">
      <div className="container">
        <div className="row">
          <SectionHeader
          iconSection="/images/newIconCourse.png"
            title="جدیدترین دوره های آموزشی"
            btnTitle="همه دوره ها"
          />
        </div>
        <div className="row mt-5">
          <CourseBox
            title='دوره کاربردی "مدیریت رسانه در خانواده"'
            content="در این دوره درباره این صحبت میکنیم که چگونه رسانه ها را در خانه هایمان مدیریت کنیم از آسیب هایش جلوگیری کنیم و از فرصت هایش درست استفاده کنیم            "
            cardImage="/images/boxImages/box-1.png"
            minute="860"
            meet="43"
            provider="تشکیلات رسانه ای تربیتی ماذنه"
            price="190000"
            oldPrice="250000"
            offPrice="20"
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
            offPrice="25"
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
            offPrice="50"
             teacherExist="true"
          />
          <CourseBox
            title='دوره کاربردی "مدیریت رسانه در خانواده"'
            content="در این دوره درباره این صحبت میکنیم که چگونه رسانه ها را در خانه هایمان مدیریت کنیم از آسیب هایش جلوگیری کنیم و از فرصت هایش درست استفاده کنیم            "
            cardImage="/images/boxImages/box-4.png"
            minute="860"
            meet="43"
            provider="تشکیلات رسانه ای تربیتی ماذنه"
            price="190000"
            oldPrice="250000"
            offPrice="35"
             teacherExist="true"
          />
          
        </div>
      </div>
    </section>
  );
}
