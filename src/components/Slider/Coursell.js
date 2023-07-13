import React, {useState} from 'react';
import Slider from "react-slick";
import img from "../../img/Frame.png"
import btn from "../../img/div.wrap-intro__submit.svg"
import Modal from "../Modal/Modal";

const Coursell = () => {

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
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const [modalActive , setModalActive] = useState(false)
    const [number , setNumber] = useState('')
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
                                    <input
                                        onChange={(e) => setNumber( e.target.value)}
                                        type="number"
                                        value={number}
                                    />
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
                                </div>
                                <label className="label">Получаю</label>
                                <div>
                                    <input
                                        onChange={(e) => setNumber(e.target.value)}
                                        value={number}
                                        type="number"

                                    />
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
                            <button onClick={() => setModalActive(true)} className="btn-click">
                                <img src={btn} alt=""/>
                            </button>
                        </div>
                        <div className="block">
                            <h1>Как
                                купить криптовалюту?</h1>
                            <p>Самый базовый способ – майнинг. То есть, использование мощностей собственного компьютера
                                для добычи выбранной монеты. Но для существенного заработка с помощью майнинга требуются
                                немалые расходы на компьютерное оборудование. А цены на него значительно выросли в
                                последние годы.

                                Выгоднее смотрится вариант купить криптовалюту за фиатные деньги. Приобретенные монеты
                                можно отложить в долгий ящик, ожидая подъема цены, или использовать на криптовалютных
                                торгах для получения более быстрой прибыли.

                                Но свободно купить крипту в Кыргызстане не представляется возможным. Физические лица
                                могут только обменять сомы на нужную криптовалюту в пунктах-обменниках. Другие способы
                                приобретения цифровых монет считаются незаконными.
                            </p>
                        </div>
                    </div>
                    <Modal active={modalActive} setActive={setModalActive}/>
                </div>
            </div>
        </div>
    );
};

export default Coursell;