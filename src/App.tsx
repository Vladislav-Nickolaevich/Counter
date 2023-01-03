import React, {useState} from 'react';
import item from './App.module.css'
import Button from "./components/Button";
import Counter from "./components/Counter";
import {useEffect} from "react";
import Settings from './components/Settings/Settings';

function App() {
    const [number, setNumber] = useState<number>(0)
    const [min, setMin] = useState<number>(0)
    const [max, setMax] = useState<number>(5)

    useEffect(() => {
        let startValue = localStorage.getItem('minValue')
        if (startValue) {
            setMin(JSON.parse(startValue))
            setNumber(JSON.parse(startValue))
        }
    }, [])

    const [error, setError] = useState<string | null>(null)
    const startResetRed = number === min ? item.red : item.white
    const redInTheEndButtonAndCounter = number === max ? item.red : item.white
    const onIncHandler = () => {
        let valueLocal = localStorage.getItem('maxValue')
        if (valueLocal) {
            return number < JSON.parse(valueLocal) ? setNumber(number + 1) : ''
        }
    }
    const onResetHandler = () => {
        let valueLocalMax = localStorage.getItem('maxValue')
        let valueLocalMin = localStorage.getItem('minValue')
        if (!valueLocalMax && !valueLocalMin) {
            setNumber(0)
        } else if (number <= max) {
            return setNumber(min)
        }
    }

    return (
        <div>
            <Settings
                setNumber={setNumber}
                setError={setError}
                setMin={setMin}
                setMax={setMax}
                max={max}
                min={min}
            />

            <div className={item.wrapper2}>
                <Counter number={number}
                         error={error}
                         styleCounter={redInTheEndButtonAndCounter}
                />
                <div className={item.wrapperButton}>

                    <Button buttonClass={item.buttonInc}
                            onClickHandler={onIncHandler}
                            styleButton={redInTheEndButtonAndCounter}
                            nameButton={'inc'}
                    />
                    <Button buttonClass={item.buttonReset}
                            onClickHandler={onResetHandler}
                            styleButton={startResetRed}
                            nameButton={'reset'}
                    />
                </div>
            </div>
        </div>
    )
}


export default App;