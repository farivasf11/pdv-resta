import { Component } from "react";
import VenderContainer from "./LayoutContainer";
import ItemToolbar from "./ItemToolbar";
import Sales from '../images/sales.svg'
import Products from '../images/products.svg'
import Corte from '../images/corte.svg'
import Statisctics from '../images/statistics.svg'


class MainContainer extends Component {
    toolbar = [
        {src: Sales, name: 'Vender'},
        {src: Products, name: 'Productos'},
        {src: Corte, name: 'Corte'},
        {src: Statisctics, name: 'Estadisticas'},
    ]
    render() {
        return (

            <div className="mainContainer">
                <div className="toolbarContainer">
                    {this.toolbar.map(item =>
                        <ItemToolbar 
                        src={item.src}
                        name={item.name}
                        />)}
                </div>
                <div className="centerContainer">
                    <VenderContainer/>
                </div>
            </div>
        )
    }
}

export default MainContainer