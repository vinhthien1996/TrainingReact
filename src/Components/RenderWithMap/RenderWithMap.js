import React, { Component } from 'react'

export default class RenderWithMap extends Component {

    products = [
        { id: 1, name: 'iPhone', price: 1000 },
        { id: 2, name: 'iPhone X', price: 2000 },
        { id: 3, name: 'iPhone XS', price: 3000 },
    ]

    renderProduct = () => {
        let arr = [];

        for (const item of this.products) {
            let jsxProduct = <div className="col-4">
                <div className="card text-left">
                    <img className="card-img-top" src="https:/picsum.photos/200" />
                    <div className="card-body">
                        <h4 className="card-title">{item.name}</h4>
                        <p className="card-text">{item.price}</p>
                    </div>
                </div>
            </div>
            arr.push(jsxProduct);
        }
        return arr;
    }

    renderProductMap = () => {
        return this.products.map((product, index) => {
            return <div className="col-4" key={index}>
                <div className="card text-left">
                    <img className="card-img-top" src="https:/picsum.photos/200" alt={product.name} />
                    <div className="card-body text-center">
                        <h4 className="card-title">{product.name}</h4>
                        <p className="card-text">{product.price}</p>
                    </div>
                </div>
            </div>
        })
    }

    render() {
        return (
            // RENDER NHIEU THE CUNG CAP
            // [
            //     <p>A</p>,
            //     <div>B</div>
            // ]
            <div className="container">
                <div className="row">
                    {this.renderProductMap()}
                </div>
            </div>
        )
    }
}
