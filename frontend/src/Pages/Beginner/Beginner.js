
import React from 'react';
import classes from './Beginner.module.css';
import { useNavigate } from 'react-router-dom';

function Beginner() {
    const navigate = useNavigate();

    const letstart = async () => {
        navigate('/home');
    }

    return (
        <div className={classes.container}>
                      
                      <p className={classes.text2}>Good FoodGood Mood</p>
            <p className={classes.text}>YUMMMi♨️</p>
            <a className={classes.a} onClick={letstart}>Order<br></br>
             Now</a>
            <button onClick={letstart}></button>
        </div>
    );
}

export default Beginner;
