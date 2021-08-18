import { Component} from 'react'

function Event1() {

    function greetings(){
        return alert('Hello morning everyone have a nice day')
    }

    return (
        <div>
            <p>If you press the Button alert Will show</p>
            <button onClick={() => alert("Hello Full Stack Batch 25 participants")}>hello</button>

            <p>If you press the Button alert Will show</p>
            <button onClick={greetings}>Greeting</button>

            
            <p>If you press the Button alert Will show</p>
            <input onChange={(e) => console.log(e.target.value)} />
        </div>
    )
}

export default class Event extends Component {
    constructor() {
        super()
    }

    greetings(){
        return alert('Hello morning everyone have a nice day')
    }

    render() {        
        return (
            <div>
                <p>If you press the Button alert Will show</p>
                <button onClick={() => alert("Hello Full Stack Batch 25 participants")}>hello</button>

                <p>If you press the Button alert Will show</p>
                <button onClick={this.greetings}>Greeting</button>

                
                <p>If you press the Button alert Will show</p>
                <input onChange={(e) => console.log(e.target.value)} />
            </div>
        )
    }
}