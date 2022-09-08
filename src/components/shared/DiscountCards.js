import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

// function
import { splitNumber } from '../../helper/function';

const useStyles=makeStyles((theme)=>({
    card:{
        width:'23.23%',
        borderRadius:'7px',
        overflow:'hidden',
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        background:'#fff',
        position:'relative'
    },

    img:{
        width:'100%',
        height:'150px',
        objectFit:"contain"
    },

    info:{
        paddingLeft:'5px',
        marginTop:'5px',
    },

    pricies:{
        width:'95%',
        paddingBottom:theme.spacing(3.3),
        paddingLeft:'5px',
        marginTop:theme.spacing(2.3),
        display:'flex',
        justifyContent:"flex-start",
        alignItems:"center",
    },

    nowPrice:{
        marginRight:'15px',
        padding:'7px 5px',
        background:'crimson',
        borderRadius:'7px',
        color:'#fff',
        border:'none',
        
    }



}))
const DiscountCards = ({data}) => {

    const classes= useStyles()
    console.log(data)

    return (
        <div className={classes.card}>
            <img className={classes.img} src={data.image} alt={data.name}/>

            <div className={classes.info}>
                <p className={classes.text}>{data.name}</p>
                <p className={classes.text}>{data.brand}</p>
            </div>

            <div className={classes.pricies}>

                <p className={classes.nowPrice}> <s> {splitNumber(data.price)} </s></p>
                <p className={classes.disPrice}>{splitNumber(data.priceDiscount)}</p>
            </div>

        </div>
    );
};

export default DiscountCards;