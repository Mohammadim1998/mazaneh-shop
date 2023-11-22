import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineFilter9Plus } from "react-icons/md";

export default function SectionHeader({ title, btnTitle,iconSection }) {
  return (
    <div className="col d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <img src={iconSection} className="titleSpanicon" style={{width:'30px',height:'30px'}} />
        {/*
         <MdOutlineFilter9Plus className="titleSpanicon" style={{ fontSize: `24px` }} />
         */}
        <span className="mx-3 titleSpan">{title}</span>
      </div>
      {btnTitle ? (
        <div className="d-flex align-items-center">
          <a href="#" className="linkSpan" style={{ color: "black" }}>
            {btnTitle}
          </a>
          <IoIosArrowBack className="linkSpanicon" style={{ fontSize: `24px` }} />
        </div>
      ) : null}
    </div>
  );
}
