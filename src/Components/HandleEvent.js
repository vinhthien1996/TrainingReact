import React, { Component } from 'react'

export default class HandleEvent extends Component {
    
    showMess = () => {
        alert("Hello Cybersoft FE54");
    }

    render() {
        return (
            <div className="container">
                <h2 className="text-center">Handle Event</h2>
                <button className="btn btn-info" onClick={() => {
                    this.showMess();
                }}>Click</button>
            </div>
        )
    }
}
