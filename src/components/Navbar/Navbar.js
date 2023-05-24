import React, { memo, useState, useEffect } from "react";

import "./navbar.css";
import logo from "../../asets/nav/Vector.png";
import menu from "../../asets/nav/menu.svg";
import { AiOutlinePlus } from 'react-icons/ai'
import phone from '../../asets/nav/phone2.png'

export const Navbar = ({ setOpen }) => {
  const [backToTopButton, setBackToTopButton] = useState(false);
  const [mobilMenu, setMobilMenu] = useState(false);



  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false)
        setMobilMenu(false)
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 400,
      behavior: "smooth",
    });
  };
  const scrollbottom = () => {
    window.scrollTo({
      top: 1420,
      behavior: "smooth",
    });
  };
  return (
    <>
      <nav>
        <div className="logo">
          <img src={logo} alt="" />
        </div>


        <div className="lincs">
          <button onClick={scrollUp}>
            <img src={menu} alt="" />
            Kurslar
          </button>
          <button onClick={scrollbottom}>
            <img src={menu} alt="" />
            Biz haqimizda
          </button>
          <a href="tel:+998973701818">
            <img src={menu} alt="" />
            <span>Biz bilan aloqa</span>
            <img className="call_icon" src={phone} alt="" />
          </a>

        </div>
        <div className="mobile_con">

          <button onClick={() => {
            setOpen(true)
            setMobilMenu(false)
          }} className="register-Nav">
            Ro'yhatdan o'tish
          </button>

          {mobilMenu ?
            <div onClick={() => setMobilMenu(false)} className="GrMenu"><AiOutlinePlus /></div> :
            <div onClick={() => setMobilMenu(true)} className="GrMenu"><img src={menu} alt="" /></div>
          }

        </div>



      </nav>
      <div className='hamburger_bar' style={mobilMenu && !backToTopButton ? { display: "block", transition: 'all 0.5s' } : { display: "none", transition: 'all 0.5s' }}>
        <div className="btns_nav">
          <button onClick={() => {
            scrollUp()
            setMobilMenu(false)
          }}> Kurslar</button>
          <button onClick={() => {
            scrollbottom()
            setMobilMenu(false)
          }}> Biz haqimizda</button>
          <button><a href="tel:+998973701818">Biz bilan aloqa</a></button>
        </div>
      </div>

      <div onClick={() => setMobilMenu(false)} style={mobilMenu && !backToTopButton ? { display: "block" } : { display: "none" }} className="back_none"></div>
    </>
  );
};

export default memo(Navbar);
