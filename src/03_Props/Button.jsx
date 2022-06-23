import React from 'react'

const Button = ({ text, size, color }) => {
    return <>
        <button className={`btn btn-${size} btn-${color}`}>{text}</button><br />
    </>
}
//color size  text

export default Button