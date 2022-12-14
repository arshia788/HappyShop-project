import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core';


// icon
import CancelIcon from '@material-ui/icons/Cancel';

// function
import { purchaseQtyCards, splitNumber } from '../../helper/function';

// context
import { ContextProvider } from '../../context/ItemContextProvider';


const useStyles=makeStyles((theme)=>({
    box:{
        borderRadius:'5px',
        display:'flex',
        background:'#fff',
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        padding:"40px 13px",
        position:'relative',
        marginTop:theme.spacing(2.5),
        [theme.breakpoints.down('xs')]:{
            flexDirection:'column',
        }
    },

    icon:{
        position:"absolute",
        right:'10px',
        top:'10px',
        fontSize:'2rem',
        color:'crimson',
        cursor:"pointer",
    },

    imgHolder:{
        width:'50%',
        marginRight:theme.spacing(1.3),
        [theme.breakpoints.down('xs')]:{
            width:'100%',
            marginBottom:'13px',
            marginTop:'13px'
        }
    },

    img:{
        width:'100%',
        height:'100%',
        borderRadius:'5px',
    },

    name:{
        fontSize:'1.2rem',
        fontWeight:'600',
        marginBottom:theme.spacing(3),
        [theme.breakpoints.down('xs')]:{
            textAlign:'center',
        }
    },

    info:{
        marginBottom:'20px'
    },

    itemInBasket:{
        marginTop:'20px',
        fontSize:'1.2rem',
        [theme.breakpoints.down('xs')]:{
            textAlign:'center',
            marginTop:'30px',
        }

    }
    ,

    qty:{
        background:'navy',
        padding:'3px 10px',
        width:'fit-content',
        color:'#fff',
        borderRadius:'5px',
        fontSize:'1.1rem',
    },

    price:{
        display:'flex',
        margin:'20px 0px',
        alignItems:'center',

    },

    priceItem:{
        background:'crimson',
        color:'#fff',
        padding:'3px 7px',
        borderRadius:'5px',
        marginRight:'13px',
        fontSize:'1.1rem'
    },
    
    samePrice:{
        background:'navy',
        color:'#fff',
        padding:'3px 7px',
        width:'fit-content',
        borderRadius:'5px',
    }
}))

const PurchaseCards = ({data}) => {

    const classes= useStyles()

    const {dispatch}= useContext(ContextProvider)

    return (

        <div className={classes.box}> 

            <CancelIcon onClick={()=> dispatch({type:'remove', payload:data})} 
            className={classes.icon}/>

            <div className={classes.imgHolder}>
                <img className={classes.img}src={data.image} alt={data.name}/>
            </div>

            <div className={classes.infoItem}>
                <p className={classes.name}>{data.name}</p>
                <p className={classes.info}> 
                <span style={{color:'crimson', fontSize:'1.1rem'}}>info:</span> {data.info}</p>

                {
                    purchaseQtyCards(data.type)
                    ?
                    <div className={classes.price}>
                        <p className={classes.priceItem}> <s>{splitNumber(data.price)}</s> </p>
                        <p className={classes.samePrice}>{splitNumber(data.priceDiscount)}</p>
                    </div>

                    :
                    <p className={classes.samePrice}>{splitNumber(data.price)}</p>
                }

                <p className={classes.itemInBasket}>your items in basket <span className={classes.qty}>{data.qty}</span> </p>
            </div>
                
        </div>

    );
};

export default PurchaseCards;