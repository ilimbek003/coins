import React, {useState} from 'react';
import data from "../../data/data";

const Accordion = () => {
    const [selected, setSelected] = useState(null)
    const [actives, setActive] = useState("plus")

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }
    return (
        <div id="accordion">
            <div className="container">
                <h1 className="accordion-h1">Часто задаваемые
                    вопросы</h1>
                <div className="accordion">
                    {
                        data.map((el, i, idx) => (

                            <div className={selected === i ? "sit box " : "sit"}>
                                <div  className="sit-amet" onClick={() => toggle(i)}>
                                    <h4 className="arty" key={idx.id}>{el.question}</h4>
                                    <div className="magic">
                                        {
                                            selected === i ?
                                                <h1 className={actives ? "plus actives " : 'plus'}>+</h1> :
                                                <h1 className="plus">-</h1>

                                        }
                                    </div>
                                </div>
                                <div className={
                                    selected === i ? 'content show  ' : 'content'
                                }>
                                    <p className="plain-one">{el.answer}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Accordion;