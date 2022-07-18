import React, { Component } from 'react'
import Ball from './Ball'
import './LotteryStyles.css'


export default class Lottery extends Component {
    static defaultProps = {
        title: 'Lotto',
        max_balls: 6,
        max_num: 40
    }

    constructor(props) {
        super(props)
        this.state = {nums: Array.from({length: this.props.max_balls})}
    }

    numGen = () => {
        this.setState((curState) => {
            return({
                nums: curState.nums.map(i => Math
                    .floor(Math.random() * this.props.max_num) + 1)})
        })
    
    }
    

    handleChange = () => {
        this.numGen()
    }

    render() {
        return(
            <section className='lottery'>
                <h1>{this.props.title}</h1>
                <div>
                {this.state.nums.map(n => <Ball balNum={n}/>)} 
                </div>
                <button onClick={() => this.handleChange()}>Generate</button>
            </section>
        )
    }

}

//     static defaultProps = {
//         title: 'loto',
//         max_balls: '6',
//         max_num: '40'
//     }

//     constructor(props) {
//         super(props)
//         this.state = {nums: Array.from({length: this.props.max_balls})}
//     }

//     generate = () => {
//         this.setState((curState => ({ nums: curState.nums.map(n => Math.floor(Math.random() * this.props.max_num) + 1 )})))
//     }

//     changeNum = () => {
//         this.generate()

//     }
//   render() {
//     return (
//       <section className='lottery'>
//         <h1>{this.props.title}</h1>
//         <div>
//             {this.state.nums.map(n => <Ball fig={n}/>)}
//         </div>
//         <button onClick={() => this.changeNum()}>Generate number</button>
      
//       </section>
//     )
//   }
// }
