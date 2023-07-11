import React, {useState} from 'react';
import axios from "axios";

const Modal = ({active, setActive}) => {

    const [questions ,setQuestions] = useState(
        {
            name:'',
            number:'',
            text:''
        }
    )

    const config = {
        headers:{
          Authorization: "Token f013804766b525f19163ec3cc28818a25521284b",
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://coins-e528efb62dd4.herokuapp.com/review/", questions,config)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.error(error);
            });
    };


    return (
        <div>
            <div className={active ? 'modal__one active' : 'modal__one'} onClick={() => setActive(false)}>
                <div className="container">
                    <div className={active ? 'modal_content system' : 'modal_content'}
                         onClick={event => event.stopPropagation()}>
                        <div className="names__two">
                            <h1>Остались вопросы?</h1>
                            <p>Напишите их нам и мы постараемся ответить на них как можно скорее</p>
                            <form className="modal_form" onSubmit={handleSubmit}>
                                <div className="form-item">
                                    <input
                                        type="tel"
                                        id="name"
                                        autoComplete="off"
                                        onChange={(e) => setQuestions({...questions,name: e.target.value})}
                                        required/>
                                    <label htmlFor="name">Как к вам обращаться?</label>
                                </div>

                                <div className="form-item">
                                    <input
                                        type="tel"
                                        id="tel"
                                        autoComplete="off"
                                        onChange={(e) => setQuestions({...questions,number: e.target.value})}
                                        required/>
                                    <label htmlFor="tel">Ваш контактный телефон</label>
                                </div>
                                <div className="form-item">
                                    <textarea
                                        id="form_field_id"
                                        type="text"
                                        autoComplete="off"
                                        onChange={(e) => setQuestions({...questions,text: e.target.value})}
                                        required
                                    />
                                    <label htmlFor="form_field_id">Задайте Ваш вопрос здесь</label>
                                </div>

                                <input
                                    className="submit"
                                    type="submit"
                                    onSubmit={handleSubmit}
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;