import React, { Component } from 'react'


export default class ScoreKeeper extends Component {
    static defaultProps = {
        options: [
            "angry",
            "anchor",
            "archive",
            "at",
            "baby",
            "bone",
            "cloud" 
        ]
    }
    constructor(props) {
        super(props)
        this.state = {
            icons: []
        }
    }
    addIcon = () => {
        let idx = Math.floor(Math.random() * this.props.options.length);
        let newIcons = this.props.options[idx];
        this.setState({icons: [...this.state.icons, newIcons]})
    }    
    render(){
        const icons = this.state.icons.map((icon) => {
            return(
                <i className={`fas fa-${icon}`}/>
              
            )
            
        }
        )
        return(
            <div>
                <h1>Icons: {icons}</h1>
                <button onClick={() => this.addIcon()}>click button</button>
            </div>
        )
    }
}    
    // updateState = ()=>{
    //     this.setState({
    //         score: this.state.score + 1
    //     })

    // }

    // incrementState = (currentState) => {
    //     return(
    //         {score: currentState.score + 1}
    //     )
    // }
    // newState = () => {
    //     this.setState(this.incrementState);
        // this.setState(this.incrementState);
        // this.setState(this.incrementState);
        // this.setState((st)=>({score: st.score + 1}));
        // this.setState((st)=>({score: st.score + 1}));
        // this.setState({score: this.state.score +1 });
        // this.setState({score: this.state.score +1 });
        // this.setState({score: this.state.score +10 });
//     }
//   render() {
//     return (
//       <div>
//         <h1>Score: {this.state.score}</h1>
//         <button type='button' onClick={() => this.updateState()} >button</button>
//         <button type='button' onClick={() => this.newState()} >button</button>
//       </div>
//     )
//   }
// }
