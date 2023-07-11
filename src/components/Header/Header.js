import React, {useRef, useState} from 'react';
import img from '../../img/L.png'
import * as Scroll from 'react-scroll';
import { Link} from 'react-scroll'
import Modal from "../Modal/Modal";
const Header = () => {

    const [modalActive , setModalActive] = useState(false)

    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [inMenuClicked, setInMenuClicked] = useState(false)

    const updateMenu = () => {
        if (!inMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        } else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setInMenuClicked(!inMenuClicked)
    }


    return (
        <div id="header">
            <div className="container">
                <div className="navbar">
                    <div className="logo">
                        <img src={img} alt=""/>
                    </div>
                    <ul>
                        <li><Link className="test6" to="about" spy={true} smooth={true} duration={500}>Курсы</Link></li>
                        <li><Link className="test6" to="our" spy={true} smooth={true} duration={500}>Преимущества</Link></li>
                        <li><Link className="test6" to="block" spy={true} smooth={true} duration={500}>Условия</Link></li>
                        <li><Link className="test6" to="about_us" spy={true} smooth={true} duration={500}>FAQ</Link></li>
                        <li><Link className="test6" to="footer" spy={true} smooth={true} duration={500} >Контакты</Link></li>
                    </ul>
                    <button onClick={() => setModalActive(true)} className="btn">Оставить заявку</button>
                </div>
                <div>
                    <nav>
                        <div className="burger-menu" onClick={updateMenu}>
                            <div className={burger_class}></div>
                            <div className={burger_class}></div>
                            <div className={burger_class}></div>
                        </div>
                    </nav>
                </div>
                <div className={menu_class}>
                    {/* {  <NavLink to="/registration">
                      <button className="btn-one">Регисрация</button>
                    </NavLink> } */}
                </div>
                <Modal active={modalActive} setActive={setModalActive}/>
            </div>

        </div>
    );
};

export default Header;