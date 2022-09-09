import React from 'react';
import { makeStyles } from '@material-ui/core';

import style from './perfumeSircle.module.css'

import diorsauvage from '../images/perfumes/Diorsauvage.jpg'


// const useStyles=makeStyles((theme)=>({
//     container:{
//         marginTop:theme.spacing(5.3),
//         width:'100%'
//     }
// }))

const PerfumesSircle = () => {


    return (
        <div className={style.container}>
            <img src={diorsauvage} className={style.img}/>
            
            <div className={style.box}>
                
            </div>

        </div>
    );
};

export default PerfumesSircle;