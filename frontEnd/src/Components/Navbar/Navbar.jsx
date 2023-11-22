import React from "react";
import "./Navbar.css";
import SearchBox from "../SearchBox/SearchBox";
import { IoMdHome } from "react-icons/io";
import { GiMeepleGroup } from "react-icons/gi";
import { TbBrandOpenSource } from "react-icons/tb";
import { IoMdContact } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdArrowRight } from "react-icons/md";
import Modal from "../Modal/Modal";

export default function Navbar() {
  const responsiveMenuShow = () => {
    const menu = document.querySelector(".respomsive-menu");
    const modal = document.querySelector(".modal-parent");
    const open = document.querySelector(".btn-open");

    menu.classList.add("active");
    modal.classList.add("active");
    open.style.opacity=0
  };

  return (
    <>
      <div className="navbarr w-100 d-flex justify-content-center align-items-center">
        <div className="container p-0 d-flex justify-content-center align-items-center h-100">
          <div className="row w-100 h-100 d-flex justify-content-between align-items-center">
            <div className="col-1 col-sm-8 col-md-6 col-lg-8 navbar-right h-100 d-flex justify-content-right align-items-center">
              <div className="navbar-brand">
                <img src="/images/logo-mazane-black.png" className="navbar-logo" alt="" />
              </div>

              <ul className="navbarList d-none d-lg-flex mx-5 justify-content-center align-items-center">
                <li>
                  <IoMdHome className="navbar-icon" />
                  <a href="#">خانه</a>
                </li>
                <li>
                  <GiMeepleGroup className="navbar-icon" />
                  <a href="#">دسته بندی</a>
                </li>
                <li>
                  <TbBrandOpenSource className="navbar-icon" />
                  <a href="#">درباره ما</a>
                </li>
                <li>
                  <IoMdContact className="navbar-icon" />
                  <a href="#">تماس با ما</a>
                </li>
              </ul>
            </div>

            <div className="col-1 col-sm-4 col-md-6 col-lg-4  navbar-left h-100 d-flex justify-content-end align-items-center">
              <div  className="d-none d-lg-block searchBoxLG">
                <SearchBox bgColor="f2f2f2" width={`200px`} iconColor="000000" />
                </div>

              <span className="register-box d-flex py-sm-2 px-sm-4 py-lg-3 px-lg-4">
                <a href="#">ورود</a> <span className="mx-2">یا</span> <a href="#">عضویت</a>
              </span>

              <div className="btn-open d-flex d-lg-none" onClick={responsiveMenuShow}>
                <GiHamburgerMenu className="circle-svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal />
    </>
  );
}
