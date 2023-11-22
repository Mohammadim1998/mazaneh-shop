import React from "react";
import "./SearchBox.css";
import { CgSearch } from "react-icons/cg";

export default function SearchBox({bgColor,width,iconColor}) {
  return (
    <div className="navbar-search mx-5 mx-lg-2" style={{width:`${width}`,backgroundColor:`#${bgColor}`}}>
      <input type="text" className="" placeholder="جستجو در مأذنه..." />
      <CgSearch className="search-icon" style={{color:`#${iconColor}`}}/>
    </div>
  );
}
