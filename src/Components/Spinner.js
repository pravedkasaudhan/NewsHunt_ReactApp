import React, { Component } from 'react'
import loading from "./loading1.gif"

export class Spinner extends Component {
    render() {
        return (
            <div className="text-center my-3">
                <img src={loading} alt="loading" style={{height:"20px"}} />
            </div>
        )
    }
}

export default Spinner
