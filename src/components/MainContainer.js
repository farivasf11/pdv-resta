import { Component } from "react";
import ItemToolbar from "./ItemToolbar";
import Sales from '../images/sales.svg'
import Products from '../images/products.svg'
import Corte from '../images/corte.svg'
import Statistics from '../images/statistics.svg'
import LayoutProductos from "./LayoutProductos";
import LayoutVender from "./LayoutVender";
import {Routes, Route, Redirect, useMatch} from "react-router-dom";


class MainContainer extends Component {
    toolbar = [
        {src: Sales, name: 'Vender', path: 'sales'},
        {src: Products, name: 'Productos', path: 'products'},
        {src: Corte, name: 'Corte', path: 'cash-register'},
        {src: Statistics, name: 'Estadísticas', path: 'statistics'},
    ]
    state = {
        selected: this.toolbar[0].name
    }
    style = {
        backgroundColor: 'rgba(235, 87, 87, 0.3)'
    }
    clickItemToolbar = (name) => {
        this.setState({selected: name})
    }
    render() {
        return (
            <div className="mainContainer">
                <div className="toolbarContainer">
                    {this.toolbar.map(item =>
                        <ItemToolbar
                            style={this.state.selected == item.name ? this.style : null}
                            onClick={() => this.clickItemToolbar(item.name)}
                            item={item}
                        />)}
                </div>
                <div className="centerContainer">
                    <Routes>
                        <Route path='/sales' element={<LayoutVender/>}/>
                        <Route path={'/products'} element={<LayoutProductos/>}/>
                    </Routes>
                </div>
            </div>
        )
    }
}

export default MainContainer