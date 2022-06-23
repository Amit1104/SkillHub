import React from 'react'
import Button from './Button'

const Card = ({ header, children }) => {
    return <>
        <div className="card">
            {/* <img src="https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" className="card-img-top" alt="..." /> */}
            <div className="card-body">
                <h5 className="card-title">{header}</h5>
                <h6 className="card-subtitle mb-2 text-muted ">{children}
                    <Button size="sm" color="danger" text="hello World" />
                </h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

            </div>
        </div>
    </>
}

export default Card