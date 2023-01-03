import React, {useEffect, useState } from 'react';
import Button from '../Button';
import { Input } from '../Input';
import item from '../../App.module.css'

type SettingsType = {
    setMin: (value: number) => void
    setMax: (value: number) => void
    setError: (value: string | null) => void
    setNumber: (value: number) => void
    max: number
    min: number
}

const Settings = (props: SettingsType) => {
    const {max, min, setMax, setMin, setNumber, setError} = props


    useEffect(() => {
        if(min === max || min < 0 || min > max){
            setError('Error')
        } else {
            setError(null)
        }
    }, [min, max, setMin, setMax])
    const getMinInputValue = (value: string) => {
        setMin(+value)
    }
    const getMaxInputValue = (value: string) => {
        setMax(+value)
    }
    const setNumberInput = () => {
            localStorage.setItem('maxValue', JSON.stringify(max))
            localStorage.setItem('minValue', JSON.stringify(min))
            setError(null)
            return min < max ? setNumber(min) : ''
    }
    const notSetValue = max !== min ? item.white : item.red
    const clearNumberInput = () => localStorage.clear()
    return (
        <div className={item.wrapper1}>
            <div className={item.wrapperTop}>
                <Input
                    value={max}
                    title={'max value: '}
                    onChangeHandler={getMaxInputValue}
                />
                <Input
                    value={min}
                    title={'start value: '}
                    onChangeHandler={getMinInputValue}
                />
            </div>
            <div className={item.wrapperButton}>
                <Button buttonClass={item.buttonInc}
                        onClickHandler={setNumberInput}
                        styleButton={notSetValue}
                        nameButton={'set'}
                        disabled={min === max || min < 0 || min > max}
                />
                <Button buttonClass={item.buttonInc}
                        onClickHandler={clearNumberInput}
                        nameButton={'cancel'}
                        styleButton={item.white}
                />
            </div>
        </div>
    );
};

export default Settings;
