import React from 'react'

export default function ProductRFC(props) {

    let {name, price} = props;

    return (
        <div className="card text-left">
            <img className="card-img-top" src="https://picsum.photos/200/200" alt="Phone" />
            <div className="card-body">
                <h4 className="card-title">{name}</h4>
                <p className="card-text">{price}</p>
            </div>
        </div>
    )
}
