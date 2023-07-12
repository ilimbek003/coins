import React from 'react';
import Slider from "react-slick";
import img from "../../img/Frame.png"
import btn from "../../img/div.wrap-intro__submit.svg"
const Coursell = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 414,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <div className="about_slider">
                <div className="shadow-one"/>
                <Slider {...settings}>
                    <div>
                        <h5>LTC $93,61 (-1,57 %)</h5>
                    </div>
                    <div>
                        <h5>XRP $0,47 (-0,44 %)</h5>
                    </div>
                    <div>
                        <h5>SOL $21,06 (-1,30 %)</h5>
                    </div>
                    <div>
                        <h5 className="btc">BTC $30 126,40 (-0,15 %)</h5>
                    </div>
                    <div>
                        <h5>BCH $268,69 (+1,11 %)</h5>
                    </div>
                    <div>
                        <h5>OKB $42,72 (+3,35 %)</h5>
                    </div>
                    <div>
                        <h5>SOL $21,06 (-1,30 %)</h5>
                    </div>
                    <div>
                        <h5>XRP $0,47 (-0,44 %)</h5>
                    </div>
                    <div>
                        <h5>OKB $42,72 (+3,35 %)</h5>
                    </div>
                </Slider>
                <div className="shadow"/>
                <div className="container">
                    <div className="coursell-item">
                        <div>
                            <img src={img} alt=""/>
                            <form className="form">
                                <label className="label">Отдаю</label>
                                <div>
                                    <input type="text" value="1 000.00"/>
                                    <div className="tether">
                                        <p>USDT</p>
                                        <span>
                                        Tether TRC20
                                    </span>
                                    </div>
                                    <div>
                                        <div className="line-wihte"/>
                                        <div className="line"/>
                                    </div>
                                    <p className="cash">Tether TRC20 - CASH USD</p>
                                    <p className="cash-one">1 = 1.009</p>
                                </div>
                                <label className="label">Получаю</label>
                                <div>
                                    <input type="text" value="1 009.00"/>
                                    <div className="tether">
                                        <p>USD</p>
                                        <span>
                                        Киев
                                    </span>
                                    </div>
                                    <div>
                                        <div className="line-wihte"/>
                                        <div className="line"/>
                                    </div>
                                </div>
                            </form>
                            <button className="btn-click">
                                <img src={btn} alt=""/>
                            </button>
                        </div>
                        <div className="block">
                            <h1>Dorem ipsum dolor </h1>
                            <p>Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum
                                est
                                a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin
                                lacus,
                                ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
                                lectus.
                                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                                himenaeos.
                                Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
                                rhoncus
                                ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi
                                convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coursell;