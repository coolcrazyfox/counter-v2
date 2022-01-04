import React, {ChangeEvent, useEffect, useState,} from 'react';
import './App.css';
import {CounterContainer} from "./CounterContainer";
import SetContainer from "./SetContainer";


function App() {
    const startValue:number = 0
    const limitValue:number = 5
    const [number, setNumber]=useState<number>(startValue)
    const [start, setStart]=useState<number>(number)
    const [maxValue, setMaxValue]=useState<number>(limitValue)
    const [error, setError]= useState<string>("")
    const styleInc = number === maxValue || error !=='' ? true: false
    const styleRes = number === startValue || error !==''? true: false

    // Local Storage

    useEffect(()=>{
        let valueAsString = localStorage.getItem('counterValue')
        let maxValueAsString = localStorage.getItem('maxCounterValue')
        if(valueAsString && maxValueAsString){
            let newValue = JSON.parse(valueAsString)
            let newMaxValue = JSON.parse(maxValueAsString)
            setNumber(newValue)
            setMaxValue(newMaxValue)
            setStart(newValue)
        }
    }, [])

    useEffect(()=>{
        localStorage.setItem('counterValue', JSON.stringify(number))
    }, [number])
    useEffect(()=>{
        localStorage.setItem('maxCounterValue', JSON.stringify(maxValue))
    }, [maxValue])



    const changeMaxNumber=(value:number)=>{
        // console.log(value)
        let newMaxValue=value
        setMaxValue(newMaxValue)
    }

    const changeStartNumber=(value:number)=>{
        // console.log(value)
        let valueStart = value
        setStart(valueStart)
        setNumber(valueStart)
    }
    const changeError=(value:string)=>{
        setError(value)
    }
    const onSetClick=()=>{
        setError('')
    }


    const resetCounter = () => {
        setNumber(start)
    }
    const counterStart=()=>{
        if (number===maxValue){
            return
        }
        setNumber(number+1)
    }
    return (
        <div className="App">
            <SetContainer
                          maxNumber={maxValue}
                          startNumber={start}
                          error={error}
                          changeError={changeError}
                          changeMaxNumber={changeMaxNumber}
                          changeStartNumber={changeStartNumber}
                          onSetClick={onSetClick}
            />

            <CounterContainer  count={number}
                               error={error}
                               styleInc={styleInc}
                               styleRes={styleRes}
                               counterStart={counterStart}
                               resetCounter={resetCounter}
                               maxValue={maxValue}
            />
        </div>

    );
}
export default App;
