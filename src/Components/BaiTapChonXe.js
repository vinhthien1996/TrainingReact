import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {

    state = {
        imgSrc: './img/car/products/black-car.jpg'
    }

    setColor = (link) => {
        this.setState({ imgSrc: link });
    }

    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-6">
                        <img src={this.state.imgSrc} className="w-100" />
                    </div>
                    <div className="col-6">
                        <div class="card">
                            <div class="card-header bg-dark text-white">Exterior color</div>
                            <div class="card-body">
                                <div className="row mt-2 border border-muted p-2">
                                    <div className="col-2">
                                        <img src="./img/car/icons/icon-black.jpg" onClick={() => { this.setColor('./img/car/products/black-car.jpg') }} className="w-100" style={{cursor: "pointer"}} />
                                    </div>
                                    <div className="col-10">
                                        <h3>Black Color</h3>
                                    </div>
                                </div>
                                <div className="row mt-2 border border-muted p-2">
                                    <div className="col-2">
                                        <img src="./img/car/icons/icon-red.jpg" onClick={() => { this.setColor('./img/car/products/red-car.jpg') }} className="w-100" style={{cursor: "pointer"}} />
                                    </div>
                                    <div className="col-10">
                                        <h3>Red Color</h3>
                                    </div>
                                </div>
                                <div className="row mt-2 border border-muted p-2">
                                    <div className="col-2">
                                        <img src="./img/car/icons/icon-silver.jpg" onClick={() => { this.setColor('./img/car/products/silver-car.jpg') }} className="w-100" style={{cursor: "pointer"}} />
                                    </div>
                                    <div className="col-10">
                                        <h3>Silver Color</h3>
                                    </div>
                                </div>
                                <div className="row mt-2 border border-muted p-2">
                                    <div className="col-2">
                                        <img src="./img/car/icons/icon-steel.jpg" onClick={() => { this.setColor('./img/car/products/steel-car.jpg') }} className="w-100" style={{cursor: "pointer"}} />
                                    </div>
                                    <div className="col-10">
                                        <h3>Steel Color</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
