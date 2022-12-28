import React, {ChangeEvent, useState} from 'react';

type InputType = {
    title: string
    valueStart: string
    onChangeHandler: (value: string) => void
}


const Input = (props:InputType) => {
    return (
        <div style={{color: 'white', marginBottom: '15px'}}>
            <span>{props.title}</span>
            <input onChange={(e) => props.onChangeHandler(e.currentTarget.value)} type='number'/>
        </div>
    );
};

export default Input;