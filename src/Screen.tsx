import React from "react";
import './Counter.Modules.css';
type ScreenPropsType = {
    count: number
    maxValue:number
    error:string

}
export const Screen : React.FC<ScreenPropsType> = ({maxValue, count, error}) =>  {

    const newScreen =error? "errorCount": count === maxValue? "red": 'result'

    return (
        <div>
            <div  className={newScreen} >{count}</div>

            <div className={"error"}>{error}</div>

        </div>
    )

}
// function Response(props) {
//     const isSuccess = props.isSuccess;
//     if (isSuccess) {
//         return <SuccessMessage/>;
//     }
//     return <ErrorMessage/>;
//     //или
//     //return isSuccess ? <SuccessMessage/> : <ErrorMessage/>
// }