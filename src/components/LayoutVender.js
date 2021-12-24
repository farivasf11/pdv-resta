import { Component } from "react";
import Tab from "./Tab";
import LayoutMesas from "./LayoutMesas";
import LayoutMostrador from "./LayoutMostrador";

class LayoutVender extends Component {
    tabs = ['Mesas', 'Mostrador']
    state = {
        tabSelected: this.tabs[0]
    }

    clickTab = (tabName) => {
        this.setState({tabSelected: tabName})
    }

    render() {
        return (
            <div className="layoutContainer">
                <h1>Vender</h1>
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
                    {
                        {
                            'Mesas': <LayoutMesas/>,
                            'Mostrador': <LayoutMostrador/>
                        }[this.state.tabSelected]
                    }
                </div>
            </div>
        )
    }
}

export default LayoutVender