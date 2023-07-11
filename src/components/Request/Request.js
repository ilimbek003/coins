import React, {useState} from 'react';
import axios from "axios";

const Request = () => {

    const [question, setQuestion] = useState(
        {
            name: '',
            number: '',
            text: ''
        }
    )

    const config = {
        headers: {
            Authorization: "Token f013804766b525f19163ec3cc28818a25521284b",
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://coins-e528efb62dd4.herokuapp.com/review/", question, config)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.error(error);
            });
    };


    return (
        <div id="request">
            <div className="container">
                <h1 className="request-h1">Заявка на обмен</h1>
                <div>
                    <form className="form-request" onSubmit={handleSubmit}>
                        <div className="request-form">
                            <input
                                type="text"
                                onChange={(e) => setQuestion({...question, name: e.target.value})}
                                placeholder="Имя"
                            />
                            <input
                                type="tel"
                                onChange={(e) => setQuestion({...question, number: e.target.value})}
                                placeholder="tel"
                            />
                        </div>
                        <input
                            className="textarea"
                            id="form_field_id"
                            type="text"
                            onChange={(e) => setQuestion({...question,text: e.target.value})}
                            placeholder="Ваш вопрос"
                        />
                        <input className="request-submit" type="submit" value="Оставить заявку"/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Request;