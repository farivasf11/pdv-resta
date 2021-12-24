import { Component } from 'react';
import MainContainer from './components/MainContainer';
import LayoutCreateOrder from "./components/LayoutCreateOrder";
import './Main.css'
import {Routes, Route} from 'react-router-dom'
class App extends Component {
  render(){
    return (
        <MainRouter/>
    )
  }
}

const MainRouter = () => {
    return (
        <div>
            <Routes>
                <Route path='/*' element={<MainContainer/>}/>
                <Route path='/create-order/:id' element={<LayoutCreateOrder/>}/>
            </Routes>
        </div>
    )
}

export default App;
