import { Component } from "react";

class ItemToolbar extends Component {
    render(){
        const { src, name} = this.props
        return(
            <div className="itemToolbar">
                <img src={src} alt={name}/>
            </div>
        )
    }
}

export default ItemToolbar