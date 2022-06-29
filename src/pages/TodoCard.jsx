import React from 'react'

function TodoCard({ i, todo, handleClass }) {
    return (
        <>
            <div key={`t-${i}`} className="card my-3">
                <div className="card">
                    <div className={handleClass(todo.priority)} data-bs-toggle="collapse" data-bs-target={`#todo-${i}`}>
                        {todo.task}
                    </div>
                    <div className="collapse" id={`todo-${i}`}>
                        <div className="card-body">{todo.desc}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TodoCard