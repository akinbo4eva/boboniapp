import React, { Component } from 'react'
import './BallStyles.css'

export default class Ball extends Component {
    render() {
        return(
            <div className='ball'>{this.props.balNum}</div>
        )
    }
}
