import React from 'react';
import { makeStyles } from '@material-ui/core';
import style from './perfumeSircle.module.css'


const useStyles=makeStyles((theme)=>({
    container:{
        marginTop:theme.spacing(5.3)
    },

    holder:{
        width:'90%',
        margin:'auto',
        border:'1px solid black',
    }
}))

const PerfumesSircle = () => {

    const classes= useStyles()

    return (
        <div className={classes.container}>

            <div className={classes.holder}>
                <div>
                    <p>tomFords perfumes</p>
                </div>

                <div className={classes.holderCards}>

                </div>
            </div>

        </div>
    );
};

export default PerfumesSircle;