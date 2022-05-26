import React, {useState} from 'react';

import 'boxicons';
import './accordion.scss';

const Accordion = ({question, answer}) => {

    const [active, setActive] = useState(false);

    const openAnswer =() => {
        setActive(!active);
    };

    return (
        <div
            className={`accordion__item ${active ? 'active' : ''}`}
        >
            <AccordionQuestion
                question={question}
                onClick={openAnswer}
            />
            <AccordionAnswer
                answer={answer}
            />
        </div>
    );
};

export default Accordion;

const AccordionQuestion = ({question, onClick}) => {

    return (
        <div
            className='accordion__item__question'
            onClick={onClick}
        >
            {question}
            <span className='accordion__item__icon'>
                <i className='bx bx-chevron-down'></i>
            </span>
        </div>
    );
};

const AccordionAnswer = ({answer}) => {

    return (
        <div className='accordion__item__answer'>
            {answer}
        </div>
    );
};

