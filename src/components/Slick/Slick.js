import React from 'react';
import Slider from "react-slick";
import pres from "../../img/press-morningstar.svg.svg"
import press from "../../img/press-cryptonews.svg.svg"
import press1 from "../../img/6.svg"
import press2 from "../../img/7.svg"
import ton from "../../img/press-ton.svg.svg"
import benzinga from "../../img/press-benzinga.svg.svg"

const Slick = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
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
                    slidesToShow: 1.7,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="slick">
            <Slider {...settings} >
                <div>
                    <img src={pres} alt=""/>
                </div>
                <div>
                    <img src={press} alt=""/>
                </div>
                <div>
                    <img src={pres} alt=""/>
                </div>
                <div>
                    <img src={press1} alt=""/>
                </div>
                <div>
                    <img src={press2} alt=""/>
                </div>
                <div>
                    <img src={ton} alt=""/>
                </div>
                <div>
                    <img src={benzinga} alt=""/>
                </div>
                <div>
                    <img src={ton} alt=""/>
                </div>
                <div>
                    <img src={benzinga} alt=""/>
                </div>
            </Slider>
        </div>
    );
};

export default Slick;