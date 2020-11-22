import React, { Component } from 'react'

export default class DemoState extends Component {

    // Dữ liệu thay đổi sẽ được lưu trong state
    state = {
        isLogin: false
    }

    userName = 'Thiện';

    renderContent = () => {
        if(this.state.isLogin) {
            return <p>Hello {this.userName}</p>
        }
        return <button className="btn btn-info" onClick={() => {this.handleLogin()}}>Đăng nhập</button>
    }

    handleLogin = () => {
        // Để set lại giá trị trong state
        this.setState({
            isLogin: true
        });
        console.log('isLogin', this.state.isLogin);
    }

    render() {
        return (
            <div className="container pt-4">
                <h3>If else React</h3>
                {this.renderContent()}
            </div>
        )
    }
}
