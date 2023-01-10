import React, {ChangeEvent, useEffect, useState} from 'react';

type InputType = {
    title: string
    onChangeHandler: (value: string) => void
    value: number
}


export const Input = (props:InputType) => {
    const [value, setValue] = useState(props.value)

    useEffect(() => {
        if(value === props.value) return
        setValue(props.value)
    }, [props.value])
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(+e.currentTarget.value)
        props.onChangeHandler(e.currentTarget.value)
    }
    return (
        <div style={{color: 'white', marginBottom: '15px'}}>
            <span>{props.title}</span>
            <input onChange={onChangeHandler} value={value} type='number'/>

        </div>
    );
};