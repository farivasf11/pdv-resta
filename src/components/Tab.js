import {Component} from 'react'

class Tab extends Component {
    render () {
        const {name, clickTab} = this.props
        return(
            <div {...this.props}>
                <h2>{name}</h2>
            </div>
        )
    }
}

export default Tab