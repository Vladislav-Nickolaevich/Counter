import React from 'react';
import item from "../App.module.css";

type CounterType = {
    number: number
    styleCounter: string
    error: string | null
}
const Counter = (props:CounterType) => {
    return (
        <div className={item.count}>
            <span className={props.styleCounter}>{props.error === null ? props.number: props.error} </span>
        </div>
    );
};

export default Counter;