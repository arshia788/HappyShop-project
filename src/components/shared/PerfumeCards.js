import React from 'react';
import { makeStyles } from '@material-ui/core';


// function
import { splitNumber } from '../../helper/function';

const useStyles=makeStyles((theme)=>({
    card:{
        width:'55.23%',
        borderRadius:'7px',
        height:'250px',
        overflow:'hidden',
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        marginLeft:'50px',
        background:'#fff',
        position:'relative',
        transition:"all .3s ease",
        transform:'scale(1)',
        color:'#fff',
        margin:'20px 0',
        padding:'0 0 49px 0',

        [theme.breakpoints.down('xs')]:{
            width:'80%',
            marginLeft:'33px',
        },
        
        [theme.breakpoints.down('md')]:{
            width:'80%',
            marginLeft:'33px',
            padding:'0 0 45px 0',
        },

    },

    img:{
        width:'100%',
        height:'160px',
        objectFit:'cover'
    },

    info:{
        marginTop:theme.spacing(2.5),
        color:'#111',
        padding:'0 10px',
        
    },

    name:{
        fontWeight:'600',
        fontSize:'1rem',
        marginBottom:'5px'
    },


    holderBtn:{
        marginTop:'20px',
        display:'flex  !important',
        justifyContent:'center !important',
        alignItems:'center !important'
    },
    
    button:{
        marginBottom:'10px',
        border:'none',
        padding:'5px 8px',
        borderRadius:'3px',
        background:'crimson',
        color:'#fff',
    },



}))

const PerfumeCards = ({data}) => {
    
    console.log(data)

    const classes= useStyles()

    return (
        <div className={classes.card}>
            <img className={classes.img} src={data.image}/>

            <div className={classes.info}>
                <p className={classes.name}>{data.name}</p>
                <p>{splitNumber(data.price)}</p>
            </div>
            
            <div className={classes.holderBtn}>
                <button className={classes.button}>details</button>
            </div>
        </div>
    );
};

export default PerfumeCards;