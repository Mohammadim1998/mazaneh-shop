import React from "react";
import "./FooterItem.css";

export default function FooterItem({ title, children }) {
  return (
      <div className="footerContent">
        <span
          style={{ color: "#ffdb05", fontSize: "20px" }}
          className="footerTitle"
        >
          {title}
        </span>

        {children}
      </div>
  );
}
