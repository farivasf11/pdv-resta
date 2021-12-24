import {Component} from "react";
import Button from "./Button";

class LayoutMostrador extends Component {
    style = {
        containerMostrador:{
          margin: '10px'
        },
        containerButtons: {
            display: 'flex',
            gap: '10px'
        }
    }
    render() {
        return(
            <div style={this.style.containerMostrador}>
                <div style={this.style.containerButtons}>
                    <Button>Nueva orden</Button>
                    <Button>Ver historial</Button>
                </div>
            </div>
        )
    }
}

export default LayoutMostrador