import { useState } from "react";

export default function Calculator () {
    const [count, setcount] = useState(0)

    const asd = (event) => {
        let status = event.currentTarget.className
        if(status === "plus"){
            setcount(count + 1)
        }else if(status === "minus"){
            setcount(count - 1)
        }else if(status === "five"){
            setcount(count + 5)
        }else{
            setcount(count - 5)
        }
    }

    const reset = () => {
        setcount(0)
    }
    return(
        <div className="wrapper">
            <span className="subtext">
            grid,form,input,onclick,eval()을 이용해 간단한 계산기를 만들어 봤습니다.
            </span>
            <div className="calculator">
                <form name="forms">
                    <input type="text" name="output" value={count} />
                    <button type="button" className="plus" onClick={asd}>+</button>
                    <button type="button" className="minus" onClick={asd}>-</button>
                    <button type="button" className="five" onClick={asd}>+5</button>
                    <button type="button" className="fiveminus" onClick={asd}>+5</button>
                    <button type="button" className="reset" onClick={reset}>reset</button>
                </form>
            </div>
        </div>
    )
}