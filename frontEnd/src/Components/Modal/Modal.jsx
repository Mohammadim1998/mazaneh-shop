import React from "react";
import "./Modal.css";
import ReactDOM from "react-dom";
import { IoMdHome } from "react-icons/io";
import { GiMeepleGroup } from "react-icons/gi";
import { TbBrandOpenSource } from "react-icons/tb";
import { IoMdContact } from "react-icons/io";
import { GrClose } from "react-icons/gr";
import { MdArrowRight } from "react-icons/md";

import SearchBox from "../SearchBox/SearchBox";

export default function Modal() {
  
  const responsiveMenuShow = () => {
    const menu = document.querySelector(".respomsive-menu");
    const modal = document.querySelector(".modal-parent");
    const open = document.querySelector(".btn-open");
    menu.classList.remove("active");
    modal.classList.remove("active");
    open.style.opacity = 1;
  };

  return ReactDOM.createPortal(
    <div className="respomsive-menu d-block d-lg-none">
      <div className="btn-close" onClick={responsiveMenuShow}>
        <GrClose className="circle-svg-close" />
      </div>

      <div className="container w-100 h-100 d-flex justify-content-center">
        <div className="row w-100 h-100 d-flex flex-column align-items-center p-2">
          <div
            className="w-100 d-flex justify-content-center p-0 my-4"
            style={{ height: `48px` }}
          >
            <SearchBox
              bgColor="171A1D"
              width={`100%`}
              style={{ width: `300px` }}
              iconColor="ffffff"
            />
          </div>

          <div className="p-0 my-5">
            <ul className="responsiveList">
              <li className="">
                <IoMdHome className="menu-icon" />
                <a href="#" className="">
                  خانه
                </a>
              </li>
              <li>
                <GiMeepleGroup className="menu-icon" />
                <a href="#" className="">
                  دسته بندی
                  <ul className="innerList">
                    <li>
                      <a href="#">دوره‌های آموزشی</a>
                    </li>
                    <li>
                      <a href="#">دوره‌های مهارتی</a>
                    </li>
                    <li>
                      <a href="#">پاورپوینت‌ها</a>
                    </li>
                    <li>
                      <a href="#">محتوای آموزشی</a>
                    </li>
                  </ul>
                </a>
              </li>
              <li>
                <MdArrowRight className="menu-icon" />
                <a href="#" className="">
                  درباره ما
                </a>
              </li>
              <li>
                <MdArrowRight className="menu-icon" />
                <a href="#" className="">
                  تماس با ما
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modals-parent")
  );
}
