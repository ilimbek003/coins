import React from 'react';
import line from "../../img/линия.svg"
import info from "../../img/info-slider-prev-spider.svg"
import safe from "../../img/safe.webp.svg"

const BLock = () => {
    return (
        <div id="block">
            <img className="line-block" src={line} alt=""/>
            <div className="container">
                <div className="benefit">
                    <div className="benefits">
                        <img src={info} alt=""/>
                        <div className="drop"/>
                        <h6>Выгоды</h6>
                    </div>
                    <div className="benefits">
                        <img src={info} alt=""/>
                        <div className="drop"/>
                        <h6>Надежность</h6>
                    </div>
                    <div className="benefits">
                        <img src={info} alt=""/>
                        <div className="drop"/>
                        <h6>Лимиты</h6>
                    </div>
                    <div className="benefits1">
                        <div className="benefits">
                            <img src={info} alt=""/>
                            <div className="drop"/>
                            <h6>Простота</h6>
                        </div>
                    </div>
                   <div className="benefits1">
                       <div className="benefits">
                           <img src={info} alt=""/>
                           <div className="drop"/>
                           <h6>Сервис</h6>
                       </div>
                   </div>
                </div>
                <div className="block_safe">
                    <div>
                        <h1>Высокие лимиты</h1>
                        <p>Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
                            interdum,
                            ac aliquet odio mattis.</p>
                    </div>
                    <img src={safe} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default BLock;