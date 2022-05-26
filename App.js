import React from 'react';
import './App.scss';
import Accordion from "./components/accordion";

import mockupDB from './mockupDB.json';

document.title = 'React Accordion component';


function App() {
    return (
        <div className="App">
            <div className='accordion'>
                {
                    mockupDB.map((item, index) => (
                        <Accordion
                            question={item.question}
                            answer={item.answer}
                            key={`accordion-${index}`}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default App;
