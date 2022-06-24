import React from 'react'
import "./style.css"
const Mystyle = () => {
    const show = false
    const x = {
        color: "blue",
        backgroundColor: show ? "green" : "red"
    }
    return <>
        <h1 style={x}>Hello World</h1>
        <h1 style={{ color: "yellow", backgroundColor: "blue" }}>Test</h1>
        <h1 className={show ? "dummy" : "x"}>Dummy text</h1>

    </>
}

export default Mystyle