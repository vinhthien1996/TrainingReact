import React, { Component } from 'react'
import Header from './Header';
import SliderComponent from './SliderComponent';
import ProductListComponent from './ProductListComponent';
import FooterComponent from '../FooterComponent';

export default class BaiTapLayout extends Component {
    render() {
        return (
            <div>
                <Header />
                <SliderComponent />
                <ProductListComponent />
                <FooterComponent />
            </div>
        )
    }
}
