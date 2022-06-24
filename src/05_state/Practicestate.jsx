import React from 'react'
import { useState } from 'react'

const Practicestate = () => {
    const [x, setx] = useState(0)
    const [color, setcolor] = useState("cyan")
    const append = e => {
        setx(x => {
            return x < 5 ? x + 1 : x
        })
    }
    const descend = e => {
        setx(y => y === 0 ? y : y - 1)
    }
    const handleChange = e => {
        console.log(e.target.value);
        setcolor(e.target.value)
    }
    return (
        <div style={{ backgroundColor: color }}>
            <h1>Variable :{x}</h1>
            <div className='btn-group w-25'>
                <button disabled={x === 5 ? true : false} className='btn btn-outline-info' onClick={append}>+</button>
                <button disabled={x === 0 ? true : false} className='btn btn-outline-info' onClick={descend}>-</button>
            </div>
            <input type="color" onChange={handleChange} />
        </div>
    )
}

export default Practicestate