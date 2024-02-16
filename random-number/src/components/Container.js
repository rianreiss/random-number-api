import React, { useEffect, useState } from 'react';
import './container.css';
import repeat from '../repeat.svg';


const Container = () => {
    const [number, setNumber] = useState([]);
    const [fact, setFact] = useState([]);

    const fetchNumber = async () => {
        const res = await fetch('http://numbersapi.com/random/math');
        const data = await res.text();

        const words = data.split(' ');

        const number = words[0];
        setNumber(number);

        const fact = words.slice(1).join(' ');
        setFact(fact);
    };

    useEffect(() => {
        fetchNumber();
    }, []);


    return (
        <div className='card'>
            <div className='number'>
                {number}
            </div>
            <div className='info'>
                <b className='number'>{number} </b>
                {fact}
            </div>
            <button className='generate button-19' onClick={fetchNumber}>
                <img src={repeat}></img>
                <>  </>
                Generate
            </button>
        </div>
    )
}

export default Container;