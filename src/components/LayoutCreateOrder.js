import {Component, useRef} from "react";
import Button from "./Button";
import {useNavigate, useParams} from 'react-router-dom'
import Minus from '../images/minus.svg'
import Add from '../images/add.svg'

const LayoutCreateOrder = () => {
    const navigate = useNavigate()
    const params = useParams()
    console.log(params)
    const styles = {
        main: {
            height: '95vh',
            margin: '10px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
        },
        topContainer: {
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
        }
    }
    return (
        <div style={styles.main}>
            <div style={styles.topContainer}>
                <Button onClick={() => navigate(-1)} >Regresar</Button>
                <p>Mesa <span className='spanBold'>{params.id}</span></p>
                <p>Comensales</p>
                <div className='tinyButton'>
                    <img src={Minus} width='18px'/>
                </div>
                <p className={'spanBold'}>2</p>
                <div className='tinyButton'>
                    <img src={Add} width='18px'/>
                </div>
            </div>
            <div className='createOrderLayout'>

            </div>
        </div>
    )
}

export default  LayoutCreateOrder