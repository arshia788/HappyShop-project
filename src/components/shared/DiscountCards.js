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
        position:'relative',
        transition:"all .3s ease",
        transform:'scale(1)',
        marginTop:theme.spacing(1.3),
        "&:hover":{
            transform:'scale(1.1)',
        }
        ,

        [theme.breakpoints.down('xs')]:{
            width:'47%',
            marginTop:theme.spacing(3.5)
        }
    },

    img:{
        width:'100%',
        height:'150px',
        objectFit:"contain"
    },

    info:{
        paddingLeft:'5px',
        marginTop:'5px',
        display:'flex',
        justifyContent:'space-between',
        padding:'0 10px'
    },

    text:{
        background:"navy",
        border:'none',
        color:'#fff',
        width:"fit-content",
        borderRadius:"3px",
        padding:'3px'
    },

    pricies:{
        width:'95%',
        paddingBottom:theme.spacing(2.3),
        paddingLeft:'5px',
        marginTop:theme.spacing(2.3),
        display:'flex',
        justifyContent:"space-between",
        alignItems:"center",
        [theme.breakpoints.down('xs')]:{
            display:'block'
        },

        [theme.breakpoints.down('sm')]:{
            display:'flex',
            justifyContent:'center',
            flexDirection:'column',
            alignItems:'center'
        },
        borderBottom:'1px solid #999'
    },

    nowPrice:{
        marginRight:'15px',
        padding:'4px 5px',
        background:'crimson',
        borderRadius:'7px',
        color:'#fff',
        width:'fit-content',
        border:'none',
        [theme.breakpoints.down('xs')]:{
            marginBottom:theme.spacing(1.5),
            marginRight:'0',
        }
        ,
        [theme.breakpoints.down('sm')]:{
            marginBottom:theme.spacing(1.5),
            marginRight:'0',

        },

    },

    disPrice:{
        padding:'4px 5px',
        width:'fit-content',
    },

    btn:{
        width:'100%',
        textAlign:'center',
        paddingBottom:theme.spacing(1.3),
        cursor:'pointer',
        marginTop:theme.spacing(1.3),
    }
    ,
    button:{
        background:'navy',
        padding:'5px',
        border:'none',
        borderRadius:'5px',
        color:'#fff',
        transition:'all .3s ease',
        cursor:'pointer',
        "&:hover":{
            background:'crimson'
        }
    }



}))
const DiscountCards = ({data}) => {

    const classes= useStyles()

    return (
        <div className={classes.card}>
            <img className={classes.img} src={data.image} alt={data.name}/>

            <div className={classes.info}>
                <p >{data.name}</p>
            </div>

            <div className={classes.pricies}>
                <p className={classes.nowPrice}> <s>{splitNumber(data.price)} </s></p>
                <p className={classes.disPrice}>{splitNumber(data.priceDiscount)}</p>
            </div>

            <div className={classes.btn}>  
                <button className={classes.button}>add-cart</button>
            </div>

        </div>
    );
};

export default DiscountCards;