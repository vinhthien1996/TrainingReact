import React, { Component } from 'react'

export default class BindingClass extends Component {
    sinhVien = {
        ma: '0001',
        ten: 'Nguyễn Văn An',
        hinhAnh: 'https://picsum.photos/200'
    }

    render() {
        const title = 'Frontend 54';
        const des = () => {
            return <p className="text-center">Description</p>
        }
        return (
            <div>
                <h2 className="text-center">{title}</h2>
                {des()}
                <h2 className="text-center">Thông tin sinh viên</h2>
                <p className="text-center">
                    <p><img src={this.sinhVien.hinhAnh} alt="Avatar"/></p>
                    <p>{this.sinhVien.ten}</p>
                </p>
            </div>
        )
    }
}
