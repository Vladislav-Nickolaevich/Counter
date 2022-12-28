import React from 'react';
import item from "../App.module.css";

type CounterType = {
    number: number
    styleCounter: string
}
const Counter = (props:CounterType) => {
    return (
        <div className={item.count}>
            <span className={props.styleCounter}>{props.number}</span>
        </div>
    );
};

export default Counter;