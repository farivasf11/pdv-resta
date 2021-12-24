import { Component } from "react";
import Tab from "./Tab";

class LayoutProductos extends Component {
    tabs = ['Productos', 'Inventario']
    state = {
        tabSelected: this.tabs[0]
    }

    clickTab = (tabName) => {
        this.setState({tabSelected: tabName})
    }

    render() {
        return (
            <div className="layoutContainer">
                <h1>Productos</h1>
                <div className="tabsContainer">
                    {this.tabs.map(tab => 
                        <Tab
                            name={tab}
                            onClick={()=> this.clickTab(tab)}
                            className={this.state.tabSelected==tab ?
                                'itemTabSelected' :
                                'itemTabUnselected'}
                        />)}
                </div>
                <div className="venderMainLayout">

                </div>
            </div>
        )
    }
}

export default LayoutProductos