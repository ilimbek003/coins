import React, {useState} from 'react';
import Modal from "../Modal/Modal";
const About = () => {
    const [modalActive , setModalActive] = useState(false)
    return (
        <div id="about">
            <div className="container">
                <div className="about_navbar">
                    <h1 className="kgs">Обменяем криптовалюту за наличные KGS/USD/EUR</h1>
                    <p>Продажа и покупка биткоинов, эфиров и других криптовалют в Бишкеке</p>
                    <button onClick={() => setModalActive(!modalActive)} className="submit__btn">Оставить заявку</button>
                    <Modal modalActive={modalActive} setModalActive={setModalActive}/>
                </div>
            </div>
        </div>
    );
};

export default About;