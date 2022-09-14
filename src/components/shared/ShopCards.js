import React from 'react';
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core';

import Fade from 'react-reveal/Fade'; 

import { findTag } from '../../helper/function';

const useStyles=makeStyles((theme)=>({
    
    container:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        flexWrap:'wrap',
        width:'91%',
        margin:'20px auto',
        [theme.breakpoints.down('xs')]:{
            width:'100%'
        }
    },

    box:{
        width:'25%',
        boxShadow:' rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        background:'#fff',
        height:'290px',
        borderRadius:'5px',
        overflow:'hidden',
        margin:'20px 10px',
        padding:"0 0 70px 0",
        transition:'all .3s ease',
        [theme.breakpoints.down('xs')]:{
            width:'45%',
            margin:'10px'
        }
    },

    img:{
        width:'100%',
        height:'200px',
        objectFit:'cover',
    },

    twoPrice:{
        display:'flex',
        justifyContent:'space-between',
        marginLeft:'10px',
        padding:'10px 5px'
    },

    disPrice:{
        background:'crimson',
        color:'#fff',
        padding:'3px 7px',
        borderRadius:'5px',
    },

    mainPrice:{
        color:'#fff',
        padding:'3px 7px',
        borderRadius:'5px',
        background:'navy',
        width:"fit-content"
    },

    mainPrice2:{
        color:'#fff',
        padding:'3px 7px',
        borderRadius:'5px',
        background:'navy',
        width:"fit-content",
        marginLeft:'10px',
        marginTop:'10px',
    },

    linkHolder:{
        width:'100%',
        marginTop:theme.spacing(3.5),
        textAlign:'center',
    },

    text:{
        margin:'15px 0 0 10px',
        fontSize:'1.1rem',
    }
    ,
    link:{
        textDecoration:'none',
        color:'#fff',
        background:'crimson',
        borderRadius:'5px',
        padding:'5px 7px',
    },


}))

const ShopCards = ({data}) => {

    console.log(data)
    const classes = useStyles()
    
    return (
        <div className={classes.container}>
            {
                data.map((item, index)=>{
                    return(
                        <Fade bottom  key={index}>
                            <div key={index} className={classes.box}>
                                <img className={classes.img} src={item.image}/>

                                <p className={classes.text}>{item.name}</p>

                                {
                                    findTag(item.type) ?

                                    <div className={classes.twoPrice}>
                                        <p className={classes.disPrice}> <s>{item.price}</s> </p>
                                        <p className={classes.mainPrice}>{item.priceDiscount}</p>

                                    </div>
                                    :
                                    <p className={classes.mainPrice2}>{item.price}</p>
                                }

                                <div className={classes.linkHolder}>
                                    <Link className={classes.link}
                                     to={`/happyshop/shop/${item.id}`}>details</Link>
                                </div>
                            </div>
                        </Fade>
                    )
                })
            }
        </div>
    );
};

export default ShopCards;