import {Component} from "react";

class Button extends Component{
    render() {
        return (
            <button {...this.props} className='mainButton'/>
        )
    }
}

export default Button