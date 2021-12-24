import { Component } from "react";
import {Link} from "react-router-dom";

class ItemToolbar extends Component {

    render(){
        const { item } = this.props
        return(
            <Link to={`/${item.path}`}>
                <div {...this.props} className="itemToolbar">
                    <img src={item.src}/>
                </div>
            </Link>

        )
    }
}

export default ItemToolbar