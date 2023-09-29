import React, {useState} from 'react';
import axios from "axios";
import "../Header/header.css"
import InputMask from "react-input-mask";

const Modal = ({modalActive, setModalActive}) => {
    const [questions, setQuestions] = useState({
        name: '',
        number: '',
        text: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);
    const config = {
        headers: {
            Authorization: 'Token 20c336c50442572e6621017043e9fbc4801ea5a8'
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post('https://coins-e528efb62dd4.herokuapp.com/review/', questions, config)
            .then((response) => {
                console.log(response);
                setIsSubmitted(true);
            })
            .catch((error) => {
                console.error(error);
            });
    };
    const handleSubmitModal = (e) => {
        e.preventDefault();
        const delayMillisecond = 1000;
        setTimeout(() => {
            setModalActive(false);
        }, delayMillisecond);
        const delayMillisecon = 1200;
        setTimeout(() => {
            setIsSubmitted(true);
        }, delayMillisecon);
        const delayMilliseconds = 500;
        setTimeout(() => {
            setIsSubmitted(false);
        }, delayMilliseconds);
    }
    const checkFormValidity = () => {
        if (questions.name !== '' && questions.number !== '' && questions.text !== '') {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    };
    return (
        <div>
            {
                modalActive && (
                    <div className='modal__one' onClick={() => setModalActive(false)}>
                        <div className='modal_content'
                             onClick={(event) => event.stopPropagation()}>
                            <div className="names__two">
                                <div>
                                    <h1 className="two_one">Остались вопросы?</h1>
                                    <p>Напишите их нам, и мы постараемся ответить <br/> на них как можно скорее.</p>
                                    <form className="modal_form" onSubmit={handleSubmitModal}>
                                        <div className="form-item">
                                            <label htmlFor="name">Как к вам обращаться?</label>
                                            <input
                                                type="text"
                                                id="name"
                                                autoComplete="off"
                                                onChange={(e) => {
                                                    setQuestions({...questions, name: e.target.value});
                                                    checkFormValidity();
                                                }}
                                                required
                                            />
                                        </div>
                                        <div className="form-item">
                                            <label htmlFor="tel">Ваш контактный телефон</label>
                                            <InputMask
                                                mask="+996 (999) 999-99-99"
                                                type="tel"
                                                id="tel"
                                                autoComplete="off"
                                                onChange={(e) => {
                                                    setQuestions({ ...questions, number: e.target.value });
                                                    checkFormValidity();
                                                }}
                                                required
                                            />
                                        </div>
                                        <div className="form-item">
                                            <label htmlFor="form_field_id">Задайте Ваш вопрос здесь</label>
                                            <textarea
                                                id="form_field_id"
                                                autoComplete="off"
                                                onChange={(e) => {
                                                    setQuestions({...questions, text: e.target.value});
                                                    checkFormValidity();
                                                }} required
                                            />
                                        </div>
                                        <button
                                            onClick={handleSubmitModal} className="submit--btn"  disabled={!isFormValid || isSubmitted}>
                                            <span>Отправить</span>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            {isSubmitted === true && (
                <div className="modal__one" onClick={() => setIsSubmitted(false)}>
                    <div className="isSubmitted">
                        <span style={{fontSize:"22px", color:"#fff"}}>&#10005;</span>
                        <h1>Ваша заявка отправлена</h1>
                        <p>Мы свяжемся с вами в ближайшее время.</p>
                    </div>
                </div>
            )}
        </div>

    );
};

export default Modal;



