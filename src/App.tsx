import React, {useState} from 'react';
import item from './App.module.css'
import Button from "./components/Button";
import Counter from "./components/Counter";
import Input from "./components/Input";

function App() {
    const [number, setNumber] = useState(0)
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(5)



    const redInTheEndButtonAndCounter = number === max?  item.red: item.white
    const startResetRed =  number === min?  item.red: item.white
    const notSetValue = max !== min?  item.white:item.red


    const getMinInputValue = (value: string) => {
        setMin(+value)
    }
    const getMaxInputValue = (value: string) => {
        setMax(+value)
    }


    const setNumberInput = () => {
        if(max > min){
            localStorage.setItem('maxValue', JSON.stringify(max))
            localStorage.setItem('minValue', JSON.stringify(min))
            return min < max? setNumber(min): ''
        }
    }

    const clearNumberInput = () => localStorage.clear()
    const onIncHandler = () =>   {
        let valueLocal = localStorage.getItem('maxValue')
        if(valueLocal){
           return number < JSON.parse(valueLocal)? setNumber(number + 1): ''
        }
    }


    const onResetHandler = () => {
        let valueLocalMax = localStorage.getItem('maxValue')
        let valueLocalMin = localStorage.getItem('minValue')
        if(!valueLocalMax && !valueLocalMin){
            setNumber(0)
        } else if(number <= max) {
           return  setNumber(min)
        }
    }

    return (
        <div>
            <div className={item.wrapper1}>
                <div className={item.wrapperTop}>
                <Input
                    title={'max value: '}
                    valueStart={'0'}
                    onChangeHandler={getMaxInputValue}
                />
                <Input
                    title={'start value: '}
                    valueStart={'6'}
                    onChangeHandler={getMinInputValue}
                />
                </div>
                <div className={item.wrapperButton}>

                    <Button buttonClass={item.buttonInc}
                            onClickHandler={setNumberInput}
                            styleButton={notSetValue}
                            nameButton={'set'}
                    />
                    <Button buttonClass={item.buttonInc}
                            onClickHandler={clearNumberInput}
                            nameButton={'clear'}
                            styleButton={item.white}
                    />
                </div>
            </div>

            <div className={item.wrapper2}>
                <Counter number={number} styleCounter={redInTheEndButtonAndCounter}/>
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