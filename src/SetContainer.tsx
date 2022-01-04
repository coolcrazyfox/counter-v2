import React, {ChangeEvent, useState} from 'react';
import  "./SetModel.css";

type SetPropsType={
    error:string
    maxNumber:number
    startNumber:number
    changeError:(value:string)=>void
    changeMaxNumber:(value:number)=>void
    changeStartNumber:(value:number)=>void
    onSetClick:()=>void
}

const SetContainer: React.FC<SetPropsType> = ({error,
                                                  onSetClick,
                                                  changeError,
                                                  startNumber,
                                                  changeMaxNumber,
                                                  changeStartNumber,
                                                  maxNumber,
                                                  }) => {


    const onChangeStart =(e:ChangeEvent<HTMLInputElement>)=>{
        changeStartNumber(e.currentTarget.valueAsNumber)
        if(e.currentTarget.valueAsNumber !==startNumber){
            changeError('enter value and press "set"')
        }
        if(e.currentTarget.valueAsNumber=== maxNumber || e.currentTarget.valueAsNumber<0){
            changeError('incorrect value')
        }
    }
    const onChangeMax = (e:ChangeEvent<HTMLInputElement>)=>{
        if(e.currentTarget.valueAsNumber !==maxNumber){
            changeError('enter value and press "set"')
        }
        if(e.currentTarget.valueAsNumber === startNumber || e.currentTarget.valueAsNumber<0){
            changeError('incorrect value')
        }
        changeMaxNumber(e.currentTarget.valueAsNumber)
    }
    const onClickButtons=()=>{
        onSetClick()
    }
    // const stylesInput= error ==="incorrect value"?
    const disabledButtonSet = error === " " || error === 'incorrect value' || startNumber<0
    // const disabledInput = error ==='' || startNumber<0
    return (
        <div className={"bodySet"}>
            <div className={'mainSetContainer'}>
                <div className={"blockMax"}>
                    <span className="maxtValue">Max Value <input
                        type="number"
                        min={startNumber}
                        value={maxNumber}
                        onChange={onChangeMax}
                        className={disabledButtonSet?'disInput':'maxInput'}/></span>
                </div>
                <div className={"blockStart"}>
                    <span className="startValue">Start Value<input
                        type="number"
                        max={maxNumber}
                        value={startNumber}
                        onChange={onChangeStart}
                        className={disabledButtonSet?'disInputStart': 'startInput'}/>
                    </span>
                </div>
                <div className="buttonSet">
                    <button className={disabledButtonSet?"dis-set":"setBtn"}
                            disabled={disabledButtonSet}
                            onClick={onClickButtons}><span>Click!</span><span>set</span></button>
                </div>
            </div>

        </div>
    );
};


export default SetContainer;