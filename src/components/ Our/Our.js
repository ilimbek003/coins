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
                <div className="our">
                    <div>
                        <div className="our_block"/>
                        <div className="our_block-all">
                            <img src={our} alt=""/>
                            <h2>Автоматические выплаты на любые счета российских банков</h2>
                            <p>Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
                                interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per
                                conubia nostra, per inceptos himenaeos.</p>
                        </div>
                    </div>
                    <div>
                        <div className="our_block"/>
                        <div className="our_block-all">
                            <img className="ourOne" src={ourOne} alt=""/>
                            <h2>Выгодный обмен криптовалют без больших комиссий</h2>
                            <p>Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
                                interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per
                                conubia nostra, per inceptos himenaeos.</p>
                        </div>
                    </div>
                    <div>
                        <div className="our_block"/>
                        <div className="our_block-all">
                            <img src={ourOneT} alt=""/>
                            <h2>Общий баланс USDT для всех сетей без комиссии</h2>
                            <p>Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
                                interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per
                                conubia nostra, per inceptos himenaeos.</p>
                        </div>
                    </div>
                </div>
                <div className="our-all">
                    <div>
                        <div className="our_block_all"/>
                        <div className="ipsum">
                            <img className="alt" src={ourOneTw} alt=""/>
                            <h2>Доверенная команда</h2>
                            <p>Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
                                interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per
                                conubia nostra, per inceptos himenaeos.</p>
                        </div>
                    </div>
                    <div>
                        <div className="our_block_all"/>
                        <div className="ipsum">
                            <img className="aml" src={aml} alt=""/>
                            <h2>Легко и безопасно</h2>
                            <p>Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
                                interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per
                                conubia nostra, per inceptos himenaeos.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Our;


