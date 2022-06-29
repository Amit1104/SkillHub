import React, { useState } from 'react'
import Addtodo from './Addtodo';
import Badges from './Badges';
import TodoCard from './TodoCard';

function Home({ todos }) {
    const [data, setdata] = useState(todos);

    const handleFilter = filterdata => {
        setdata(filterdata)
    }
    const getpriority = pri => {
        let h = todos.filter(item => item.priority === pri)
        return {
            data: h,
            count: h.length
        }
    }
    const handleClass = e => {
        switch (e) {
            case "high": return "card-header bg-danger"
            case "medium": return "card-header bg-warning"
            case "low": return "card-header bg-success"
            default: return "card-header"
        }
    }
    const handleAddTodo = values => {
        console.log(values);
    }


    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 offset-sm-3">
                        <Addtodo handleAddTodo={handleAddTodo} getpriority={getpriority} handleFilter={handleFilter} setdata={setdata} todos={todos} />
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className="row">
                    <div className="col-sm-6 offset-sm-3">
                        {todos.length === 0 ? <h1>No todos here</h1> : <h1>Total {`${todos.length}`}</h1>}
                        <div>
                            <Badges handleFilter={handleFilter} getpriority={getpriority} todos={todos} setdata={setdata} />
                        </div>
                        {
                            data.map(
                                (todo, i) => {
                                    return <TodoCard i={i} todo={todo} handleClass={handleClass} />
                                }
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home