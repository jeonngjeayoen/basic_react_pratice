import React, { useState } from "react";

export default function Calculator() {
    const [count, setCount] = useState("");
    const [operation, setOperation] = useState("");
    const mapNumberList = ["1","2","3","4","5","6","7","8","9","0"];
    const calcList = ["-","+","*","%"];

    const handleNumber = (number) => {
        setCount(prev => prev + number)
    };

    const handleOperation = (cal) => {
        setCount(prev => prev + cal)
    };
    const Eval = () => {
        console.log(typeof count, count)
        let answer = eval(count)
        setCount(answer)
    };

    const reset = () => {
        setCount("");
        setOperation("");
    };

    return (
        <div className="wrapper">
            <div className="calculator">
                <form name="forms">
                    <input type="text" name="output" value={count} readOnly />
                    {mapNumberList.map((number) => (
                        <button type="button" key={number} onClick={() => handleNumber(number)}>
                            {number}
                        </button>
                    ))}
                    {calcList.map((cal) => (
                    <button type="button" onClick={() => handleOperation(cal)}>
                        {cal}
                    </button>))}                    
                    <button type="button" className="equal" onClick={Eval}>
                    =
                    </button>
                    <button type="button" className="reset" onClick={reset}>
                        reset
                    </button>
                </form>
            </div>
        </div>
    );
}