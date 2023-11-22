import React from "react";
import "./TeacherSection.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import TeacherBox from "../TeacherBox/TeacherBox";

export default function TeacherSection() {
  return (
    <section className="TeacherSection p-3">
      <div className="container p-3"  style={{border:`4px solid #f7f7f7`,borderRadius:'15px'}}>
        <div className="row mb-5">
            <SectionHeader 
            iconSection="/images/VectorMazanehTeacherIcon.png"
            title="اساتید ماذنه"/>
        </div>
        <div className="row">
         <TeacherBox teacherName="مصطفی طالبی" image="/images/09.jpg"/>
         <TeacherBox teacherName="محمد کهوند" image="/images/08.jpg"/>
         <TeacherBox teacherName="سجاد سلیمان‌نژاد" image="/images/11.jpg"/>
         <TeacherBox teacherName="محمد کهوند" image="/images/08.jpg"/>
         <TeacherBox teacherName="مصطفی طالبی" image="/images/09.jpg"/>
         <TeacherBox teacherName="سجاد سلیمان‌نژاد" image="/images/11.jpg"/>
        </div>
      </div>
    </section>
  );
}
