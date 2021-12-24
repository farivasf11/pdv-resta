import {Component} from "react";
import {Link} from "react-router-dom";

class LayoutMesas extends Component {

    render() {
        const mesas = Array.from(Array(7).keys())
        return(
            <div className='layoutMesas'>
                {mesas.map(mesa => mesa != 0 ? <ItemMesa number={mesa}/> : null)}
            </div>
        )
    }
}

class ItemMesa extends Component {
    render() {
        return(
            <Link to={`/create-order/${this.props.number}`}>
                <div className='itemMesa' onClick={() => clickTable()}>
                    <h2>{this.props.number}</h2>
                </div>
            </Link>
        )
    }
}

const clickTable = () =>{
}

export default LayoutMesas