import React from 'react'

function Badges({ getpriority, setdata, handleFilter, todos }) {
    return (
        <div className='d-flex justify-content-between'>
            <span type="button" onClick={e => handleFilter(getpriority("high").data)} className="badge bg-danger">High {getpriority("high").count}</span>
            <span type="button" onClick={e => handleFilter(getpriority("medium").data)} className="badge bg-warning">Medium {getpriority("medium").count}</span>
            <span type="button" onClick={e => handleFilter(getpriority("low").data)} className="badge bg-success">Low {getpriority("low").count}</span>
            <span type="button" onClick={e => setdata(todos)} className="badge bg-success">All {todos.length}</span>
        </div>
    )
}

export default Badges