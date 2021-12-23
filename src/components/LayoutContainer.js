import { Component } from "react";
import Tab from "./Tab";

class VenderContainer extends Component {
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
                            clickTab={this.clickTab}
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

export default VenderContainer