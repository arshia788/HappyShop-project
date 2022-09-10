import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles=makeStyles((theme)=>({
    box:{
        width:'45%',
        height:'300px',
        margin:theme.spacing(2),
        borderRadius:'30px',
        overflow:'hidden',
        cursor:'pointer',
        [theme.breakpoints.down('xs')]:{
            width:'100%'
        },
    },

    img:{
        width:"100%",
        height:'100%',
        objectFit:'cover'
    }
}))

const BoxCardPerfumes = ({data}) => {

    const classes = useStyles()

    return (
        <div className={classes.box}>
            <img className={classes.img} src={data.image} alt={data.name}/>
        </div>
    );
};

export default BoxCardPerfumes;