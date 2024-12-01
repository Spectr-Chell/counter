import { useState } from "react"
import Button from "../Button/Button.jsx"

export default function CounterSection() {
    const [count, setCount] = useState(0)
    let textDecoration
    if (count === 0) {
        textDecoration = "none"
    }
    else {
        textDecoration = count > 0 ? "Overline" : "Underline" 
    }

    return (
        <section>
            <Button style={ { top: "450px", left: "350px" }} onClick={() => setCount(count + 1)}>+</Button>
            <Button style={ { top: "450px", left: "800px" } } onClick={() => setCount(count - 1)}>-</Button>
            <Button style={ { top: "450px", left: "310px" } } onClick={() => setCount(0)}>reset</Button>
            <h1 style={ {position: "absolute", fontSize: "100px", left: "735px", textDecoration } }>{count}</h1>
        </section>
    )
}