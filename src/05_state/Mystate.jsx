import React from 'react'
import { useState } from 'react'

const Mystate = () => {
    const [state, setstate] = useState("apple");
    let x = "dell"
    const hc = e => {
        x = "hp"
        console.log(x);
        setstate("hello world")
    }
    return (
        <>
            <h1>{x}</h1>
            <h1>{state}</h1>
            <button onClick={hc}>Change</button>
        </>
    )
}

export default Mystate