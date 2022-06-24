import React from 'react'
import { useState } from 'react'
const Task = () => {
    const [x, setx] = useState(0);
    const [color, setcolor] = useState("cyan")
    const change = e => {
        setx(x => x + e)
    }
    const arth = e => {
        setx(x => {
            let f = 1
            for (let i = 0; i < e; i++) {
                f *= x
            }
            return f
        })
    }
    const bgcolor = e => {
        setcolor(e)
    }
    const reset = e => {
        setx(0)
    }
    return (
        <div style={{ backgroundColor: color }}>
            <h1>Variable: {x}</h1>
            <div className='btn-group'>
                <button className='btn btn-outline-info' disabled={x <= -100 ? true : false} onClick={e => change(-10)}>-10</button>
                <button className='btn btn-outline-info' disabled={x <= -100 ? true : false} onClick={e => change(-5)}>-5</button>
                <button className='btn btn-outline-info' disabled={x <= -100 ? true : false} onClick={e => change(-2)}>-2</button>
                <button className='btn btn-outline-info' disabled={x >= 100 ? true : false} onClick={e => change(2)}>+2</button>
                <button className='btn btn-outline-info' disabled={x >= 100 ? true : false} onClick={e => change(5)}>+5</button>
                <button className='btn btn-outline-info' disabled={x >= 100 ? true : false} onClick={e => change(10)}>+10</button>
            </div>
            <div>
                <button className='btn btn-outline-info' onClick={e => arth(2)}>Square</button>
                <button className='btn btn-outline-info' onClick={e => arth(3)}>Cube</button>
            </div>
            <button className='btn btn-outline-success' onClick={reset}>Reset</button>
            <div>
                <button className='btn btn-outline-danger' disabled={color === "red" ? true : false} onClick={e => bgcolor("red")}>bg red</button>
                <button className='btn btn-outline-dark' disabled={color === "white" ? true : false} onClick={e => bgcolor("white")}>bg white</button>
                <button className='btn btn-outline-info' disabled={color === "blue" ? true : false} onClick={e => bgcolor("blue")}>bg blue</button>
            </div>
        </div>
    )
}

export default Task