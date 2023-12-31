import React from 'react';
import tel from "../../img/Frame.svg"
import Rules from "../../file/Rules.pdf"
import Terms from "../../file/Terms.pdf"
import fat from "../../img/Frame (2).svg"


const Footer = () => {
    return (
        <div id="footer">
            <div className="container">
                <div className="footer">
                    <div className="footer-contact">
                        <h1>Контакты</h1>
                        <a className="footer_tel" href="tel:+996 990 115 117">
                            <h2>+996 990 115 117</h2>
                        </a>
                    </div>
                    <div className="footer-contact">
                        <h1>Мы всегда на связи</h1>
                        <a className="file" href={Rules}>Публичная
                            оферта</a>
                        <br/>
                        <a className="file" href={Terms}>Политика конфиденциальности</a>
                        <div className="img-footer">
                            <img src={tel} alt=""/>
                            <a href="https://wa.me/990 115 117?text=hello+996">
                                <img src={fat} alt=""/>
                            </a>

                        </div>
                    </div>
                    <div className="footer-contact">
                        <h1>Время работы</h1>
                        <p>Пн-Пт: 10:00-18:00 <br/>
                            Сб-Вс: 12:00-16:00</p>
                    </div>
                </div>
                <h2 className="dolor">Все права защищены 2023 &copy;</h2>
                <div className="footer-line"/>
            </div>
        </div>
    );
};

export default Footer;