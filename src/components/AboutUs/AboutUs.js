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
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div id="about_us">
            <div className="container">
                <h1 className="about_us-h1">Что о нас говорят</h1>
                <div className="flex">
                    <Slider {...settings} >
                        <div className="about_us_padding">
                            <div className="good">
                                <h1>Кенешбеков Бека</h1>
                                <p>Биржа действительно хороша. Но сейчас подымаются сильные конкуренты, которые
                                    могут перехватывать инициативу у лидирующих криптоплощадок.</p>
                            </div>
                        </div>
                        <div className="about_us_padding">
                            <div className="good">
                                <h1>Алтынбеков Курсант</h1>
                                <p>Хочу оставить положительный отзыв о биржа. Работаю здесь полгода и пока никаких
                                    серьезных претензий нет. Устраивает и сама платформа и низкие комиссии.</p>
                            </div>
                        </div>
                        <div className="about_us_padding">
                            <div className="good">
                                <h1>Илияз уулу Ихсан</h1>
                                <p> Сейчас рынок криптовалюты во многом ориентируется на торги, которые проходят на этой
                                    бирже. Думаю, что не ошибусь, говоря о том, что на Бинанс торгует много трейдеров.
                                    </p>
                            </div>
                        </div>
                        <div className="about_us_padding">
                            <div className="good">
                                <h1>Кайырбеков Илим</h1>
                                <p>Я работаю на биржа только через компьютер. Через телефон только отслеживаю курсы
                                    криптовалютных пар.</p>
                            </div>
                        </div>
                        <div className="about_us_padding">
                            <div className="good">
                                <h1>Курманбеков Манас</h1>
                                <p>Несколько положительных слов в пользу Binance. Хорошая платформа, легко разобраться и
                                    торговать, хороший саппорт, заработанные средства тоже нормально выводят.</p>
                            </div>
                        </div>
                        <div className="about_us_padding">
                            <div className="good">
                                <h1>Мухамбетов Бексултан</h1>
                                <p>Все вроде ничего, но есть впечатление недоработанности, но насколько мне известно,
                                    компания постоянно улучшает сайт и делает много для своих клиентов, потому жду с
                                    нетерпением приятных обновлений.</p>
                            </div>
                        </div>
                        <div className="about_us_padding">
                            <div className="good">
                                <h1>Муратов Данияр</h1>
                                <p>Достаточно уверенный среднячок на крипторынке. Я здесь уже достаточно давно, и могу с
                                    уверенностью сказать, что биржа реально рабочая. Есть все необходимое.</p>
                            </div>
                        </div>
                        <div className="about_us_padding">
                            <div className="good">
                                <h1>Чынгызалиева Адеми</h1>
                                <p>Куча разных способов заработать, даже пассивно. Собственно так и делаю. Разместил
                                    через сервис Binance Earn BUSD и за 14 суток заработал 6,48% от 200$ примерно. Ну
                                    нормально!</p>
                            </div>
                        </div>
                        <div className="about_us_padding">
                            <div className="good">
                                <h1>Назарбек уулу Нурбек</h1>
                                <p>Стабильные заработки на уровне 300$ в месяц, а в декабря вообще 420$ вышло. Торгуйте
                                    на битке через Binance и будет вам счастье. Ликвидность позволяет хорошо
                                    зарабатывать</p>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;