import React, {useState} from 'react';
import our from "../../img/Автоматические выплаты иконка.png"
import ourOne from "../../img/Выдный обмен иконка.svg"
import ourOneT from "../../img/иконка обший баланс.svg"
import ourOneTw from "../../img/Поддержка иконка.svg"
import aml from "../../img/AML icons.svg"

const Our = () => {
    return (
        <div id="our">
            <div className="container">
                <h1 className="our-h1">Наши преимущества</h1>
                <div className="our_all">
                    <div className="our">
                        <div className="class">
                            <div className="our_block"/>
                            <div className="our_block-all">
                                <img src={our} alt=""/>
                                <h2>Безопасность и конфиденциальность</h2>
                                <p>100% Гарантия безопасности и конфеденциальности. Документы не требуются.</p>
                            </div>
                        </div>
                        <div className="class">
                            <div className="our_block"/>
                            <div className="our_block-all">
                                <img className="ourOne" src={ourOne} alt=""/>
                                <h2>Легко и быстро</h2>
                                <p>Моментальная оплата и отправка криптовалют. Поступление на Ваш кошелек в течение
                                    часа</p>
                            </div>
                        </div>
                        <div className="class">
                            <div className="our_block"/>
                            <div className="our_block-all">
                                <img src={ourOneT} alt=""/>
                                <h2>Доверенная
                                    команда курьеров</h2>
                                <p>Наши сотрудники доставят/заберут наличные в любой точке города</p>
                            </div>
                        </div>
                    </div>
                    <div className="our-all">
                        <div className="our_block_all1">
                            <div className="our_block_all"/>
                            <div className="ipsum">
                                <img className="alt" src={ourOneTw} alt=""/>
                                <h2>Фиксированная
                                    комиссия без посредников
                                </h2>
                                <p> Выгодный актуальный курс по тарифам Binance.com</p>
                            </div>
                        </div>
                        <div>
                            <div className="our_block_all"/>
                            <div className="ipsum">
                                <img className="aml" src={aml} alt=""/>
                                <h2>Гарантии и преимущества</h2>
                                <p>Круглосуточная обработка заявок и самый лучший курс на рынке для партнеров.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Our;


