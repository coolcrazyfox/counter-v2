import React from "react";
import  "./Counter.Modules.css";
import {Screen} from "./Screen";
import {Buttons} from "./Buttons";

type PropsTestType ={
    count: number
    counterStart:() => void
    resetCounter:() => void
    styleInc:boolean
    styleRes:boolean
    maxValue:number
    error:string

}
export const CounterContainer: React.FC<PropsTestType> = ({error, maxValue, count,  counterStart, resetCounter, styleInc, styleRes  }) =>  {

    return (
        <div className={"mainTestContainer"}>
            <div className="testContainer">
                <Screen count={count}
                        error={error}
                        maxValue={maxValue}/>
                <Buttons styleRes={styleRes}
                         styleInc={styleInc}
                         counterStart={counterStart}
                         resetCounter={resetCounter}

                        />
            </div>
        </div>
    )
}
