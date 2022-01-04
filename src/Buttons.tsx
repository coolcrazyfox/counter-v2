import React from "react";

type ButtonsPropsType ={
    counterStart:() => void
    resetCounter:() => void
    styleInc:boolean
    styleRes:boolean


}
export const Buttons: React.FC<ButtonsPropsType> = ({ counterStart, resetCounter, styleInc, styleRes }) =>  {

    return (
        <div className="btnContainers">
            <button disabled={styleInc}
                    className={styleInc? "btn-disa": 'btn' }
                    onClick={counterStart}>inc</button>
            <button disabled={styleRes}
                    className={styleRes? "btn-disa": 'btn'}
                    onClick={resetCounter}>reset
            </button>

        </div>

    )

}