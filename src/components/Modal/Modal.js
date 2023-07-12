import React, {useState} from 'react';
import axios from "axios";

const Modal = ({active, setActive}) => {
    const [questions, setQuestions] = useState({
        name: '',
        number: '',
        text: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false); // Состояние для отслеживания статуса отправки

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
                setIsSubmitted(true); // Устанавливаем состояние отправки в true после успешного ответа
            })
            .catch((error) => {
                console.error(error);
            });
    };
    return (
        <div>
            <div className={active ? 'modal__one active' : 'modal__one'} onClick={() => setActive(false)}>
                <div className="container">
                    <div className={active ? 'modal_content system' : 'modal_content'}
                         onClick={(event) => event.stopPropagation()}>
                        <div className="names__two">
                            {isSubmitted ? (
                                <div className="isSubmitted">
                                    <h1>Ваша заявка отправлена</h1>
                                    <p>Мы свяжемся с вами в ближайшее время.</p>
                                </div>
                            ) : (
                                <div>
                                    <h1 className="two_one">Остались вопросы?</h1>
                                    <p>Напишите их нам, и мы постараемся ответить на них как можно скорее.</p>
                                    <form className="modal_form" onSubmit={handleSubmit}>
                                        <div className="form-item">
                                            <input
                                                type="text"
                                                id="name"
                                                autoComplete="off"
                                                onChange={(e) => setQuestions({...questions, name: e.target.value})}
                                                required
                                            />
                                            <label htmlFor="name">Как к вам обращаться?</label>
                                        </div>

                                        <div className="form-item">
                                            <input
                                                type="tel"
                                                id="tel"
                                                autoComplete="off"
                                                onChange={(e) => setQuestions({...questions, number: e.target.value})}
                                                required
                                            />
                                            <label htmlFor="tel">Ваш контактный телефон</label>
                                        </div>
                                        <div className="form-item">
                      <textarea
                          id="form_field_id"
                          autoComplete="off"
                          onChange={(e) => setQuestions({...questions, text: e.target.value})}
                          required
                      />
                                            <label htmlFor="form_field_id">Задайте Ваш вопрос здесь</label>
                                        </div>

                                        <input className="submit" type="submit" value="Отправить"/>
                                    </form>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;



