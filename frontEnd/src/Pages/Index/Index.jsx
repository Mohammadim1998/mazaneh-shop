import React from "react";
import "./Index.css";
import Navbar from "../../Components/Navbar/Navbar";
import SlideSection from "../../Components/SlideSection/SlideSection";
import CourseSection from "../../Components/CourseSection/CourseSection";
import ContentSection from "../../Components/ContentSection/ContentSection";
import NewCourseSection from "../../Components/NewCourseSection/NewCourseSection";
import TeacherSection from "../../Components/TeacherSection/TeacherSection";
import SectionComment from "../../Components/SectionComment/SectionComment";
import Footer from "../../Components/Footer/Footer";
import NewArticle from "../../Components/NewArticle/NewArticle";

export default function Index() {
  return (
    <div>
      <Navbar />
      <SlideSection />
      <CourseSection />
      <ContentSection />
      <NewCourseSection />
      <TeacherSection />
      <SectionComment />
      <NewArticle />
      <Footer />
    </div>
  );
}
