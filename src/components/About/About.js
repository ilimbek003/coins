import React, {useState} from 'react';
import Modal from "../Modal/Modal";
const About = () => {
    const [modalActive , setModalActive] = useState(false)
    return (
        <div id="about">
            <div className="container">
                <div className="about_navbar">
                    <h1>Morem ipsum dolor sit amet, consectetur </h1>
                    <p>Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                        ac aliquet odio mattis.</p>
                    <button onClick={() => setModalActive(true)}>Оставить заявку</button>
                    <Modal active={modalActive} setActive={setModalActive}/>
                </div>
            </div>
        </div>
    );
};

export default About;