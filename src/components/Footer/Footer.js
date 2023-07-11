import React, { useState } from "react";
import tel from "../../img/Frame.svg";
import fac from "../../img/Frame (1).svg";
import fat from "../../img/Frame (2).svg";
import you from "../../img/Frame (3).svg";
import insta from "../../img/Frame (4).svg";

const Footer = () => {
<<<<<<< HEAD
  const [activeScroll, setActiveScroll] = useState("");

  function Scroll() {
    if (window.scrollY > 60) {
      setActiveScroll("scroll-top");
    } else {
      setActiveScroll("scroll-top activeone");
    }
  }
  Scroll();

  return (
    <div id="footer">
      <div className="container">
        <a href="#" className={activeScroll}></a>
        <div className="footer">
          <div className="footer-contact">
            <h1>Контакты</h1>
            <h2>
              <a href="tel:+996 647 5648">+996 647 5648</a>
            </h2>
            <h2>
              <a href="tel:+996 647 5648">+996 647 5648</a>
            </h2>
            <h2>
              <a href="tel:+996 647 5648">+996 647 5648</a>
            </h2>
          </div>
          <div className="footer-contact">
            <h1>Мы всегда на связи</h1>
            <div>
              <img src={tel} alt="" />
              <img src={fac} alt="" />
              <img src={fat} alt="" />
              <img src={you} alt="" />
              <img src={insta} alt="" />
=======
    return (
        <div id="footer">
            <div className="container">
                <div className="footer">
                    <div className="footer-contact">
                        <h1>Контакты</h1>
                        <h2><a href="tel:+996 647 5648">+996 647 5648</a></h2>
                        <h2><a href="tel:+996 647 5648">+996 647 5648</a></h2>
                        <h2><a href="tel:+996 647 5648">+996 647 5648</a></h2>
                    </div>
                    <div className="footer-contact">
                        <h1>Мы всегда на связи</h1>
                        <div>
                            <img src={tel} alt=""/>
                            <img src={fac} alt=""/>
                            <img src={fat} alt=""/>
                            <img src={you} alt=""/>
                            <img src={insta} alt=""/>
                        </div>
                    </div>
                    <div className="footer-contact">
                        <h1>Время работы</h1>
                        <p>Пн-Пт: 10:00-18:00 <br/>
                            Сб-Вс: 12:00-16:00</p>
                    </div>
                </div>
                <h2 className="dolor">Бишкек, ipsum dolor sit amet consectetur</h2>
                <div className="footer-line"/>
>>>>>>> ba0cbe69ef314c3defffab8c476c0cae4f706b0c
            </div>
          </div>
          <div className="footer-contact">
            <h1>Время работы</h1>
            <p>
              Пн-Пт: 10:00-18:00 <br />
              Сб-Вс: 12:00-16:00
            </p>
          </div>
        </div>
        <h2 className="dolor">Бишкек, ipsum dolor sit amet consectetur</h2>
        <div className="footer-line" />
      </div>
    </div>
  );
};

export default Footer;
