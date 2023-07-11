import React from 'react';
import pres from "../../img/press-morningstar.svg.svg";
import press from "../../img/press-cryptonews.svg.svg";
import press1 from "../../img/6.svg";
import press2 from "../../img/7.svg";
import ton from "../../img/press-ton.svg.svg";
import benzinga from "../../img/press-benzinga.svg.svg";
import Slider from "react-slick";

const AboutUs = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 2,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"

    };
    return (
        <div id="about_us">
            <div className="container">
                <h1 className="about_us-h1">Что о нас говорят</h1>
                <div className="flex">
                    <Slider {...settings} >
                        <div>
                            <div className="good">
                                <h1>Soooo GOOD!</h1>
                                <p>Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
                                    interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per
                                    conubia nostra, per inceptos himenaeos.</p>
                            </div>
                            <div className="ellipse-one">
                                <div className="ellipse-all"/>
                                <div>
                                    <h6>Sorem</h6>
                                    <p>Korem</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="good">
                                <h1>Soooo GOOD!</h1>
                                <p>Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
                                    interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per
                                    conubia nostra, per inceptos himenaeos.</p>
                            </div>
                            <div className="ellipse">
                                <div className="ellipse-all"/>
                                <div>
                                    <h6>Dorem</h6>
                                    <p>Torem</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="good">
                                <h1>Soooo GOOD!</h1>
                                <p>Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
                                    interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per
                                    conubia nostra, per inceptos himenaeos.</p>
                            </div>
                            <div className="ellipse-one">
                                <div className="ellipse-all"/>
                                <div>
                                    <h6>Sorem</h6>
                                    <p>Korem</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="good">
                                <h1>Soooo GOOD!</h1>
                                <p>Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
                                    interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per
                                    conubia nostra, per inceptos himenaeos.</p>
                            </div>
                            <div className="ellipse">
                                <div className="ellipse-all"/>
                                <div>
                                    <h6>Dorem</h6>
                                    <p>Torem</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="good">
                                <h1>Soooo GOOD!</h1>
                                <p>Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
                                    interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per
                                    conubia nostra, per inceptos himenaeos.</p>
                            </div>
                            <div className="ellipse-one">
                                <div className="ellipse-all"/>
                                <div>
                                    <h6>Sorem</h6>
                                    <p>Korem</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="good">
                                <h1>Soooo GOOD!</h1>
                                <p>Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
                                    interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per
                                    conubia nostra, per inceptos himenaeos.</p>
                            </div>
                            <div className="ellipse">
                                <div className="ellipse-all"/>
                                <div>
                                    <h6>Dorem</h6>
                                    <p>Torem</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="good">
                                <h1>Soooo GOOD!</h1>
                                <p>Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
                                    interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per
                                    conubia nostra, per inceptos himenaeos.</p>
                            </div>
                            <div className="ellipse-one">
                                <div className="ellipse-all"/>
                                <div>
                                    <h6>Sorem</h6>
                                    <p>Korem</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="good">
                                <h1>Soooo GOOD!</h1>
                                <p>Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
                                    interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per
                                    conubia nostra, per inceptos himenaeos.</p>
                            </div>
                            <div className="ellipse">
                                <div className="ellipse-all"/>
                                <div>
                                    <h6>Dorem</h6>
                                    <p>Torem</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="good">
                                <h1>Soooo GOOD!</h1>
                                <p>Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
                                    interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per
                                    conubia nostra, per inceptos himenaeos.</p>
                            </div>
                            <div className="ellipse-one">
                                <div className="ellipse-all"/>
                                <div>
                                    <h6>Sorem</h6>
                                    <p>Korem</p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;