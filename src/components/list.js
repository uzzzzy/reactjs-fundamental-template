import { Component } from 'react'

class Item1 extends Component {
    render() {
        return (
            <div>
                Item {this.props.name}
            </div>
        )
    }
}

function Item(props) {
    return (
        <div>
            Item {props.name}
        </div>
    )
}

export default Item