import React from 'react'

const Taskbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-light bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Todo</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarID"
                        aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarID">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="#">Task Input </a>
                            <a className="nav-link active" aria-current="page" href="#">All Tasks</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Taskbar