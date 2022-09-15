import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';


// function
import { splitNumber } from '../../helper/function';

const useStyles=makeStyles((theme)=>({
    card:{
        width:'65.23%',
        borderRadius:'7px',
        overflow:'hidden',
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        marginLeft:'50px',
        background:'#fff',
        position:'relative',
        transition:"all .3s ease",
        transform:'scale(1)',
        color:'#fff',
        margin:'20px 0',
        padding:'0 0 20px 0',
        maxHeight:'285px',
        [theme.breakpoints.down('xs')]:{
            width:'80%',
            marginLeft:'33px',
            maxHeight:'345px',
            marginLeft:'20px'
        },
        
        [theme.breakpoints.down('md')]:{
            width:'80%',
            marginLeft:'33px',
        },

    },

    img:{
        width:'100%',
        height:'160px',
        objectFit:'cover',
        [theme.breakpoints.down('xs')]:{
            height:'230px'
        }
    },

    info:{
        marginTop:theme.spacing(2.5),
        color:'#111',
        padding:'0 10px',
        
    },

    name:{
        fontWeight:'600',
        fontSize:'1rem',
        marginBottom:'5px',
        [theme.breakpoints.down('xs')]:{
            fontWeight:'600',
            fontSize:'.9rem',
        }
    },


    holderBtn:{
        margin:'10px 0px',
        display:'flex  !important',
        justifyContent:'center !important',
        alignItems:'center !important',
    },

    price:{
        fontSize:'1rem'
    },
    
    button:{
        border:'none',
        padding:'5px 8px',
        borderRadius:'3px',
        background:'crimson',
        color:'#fff',
        cursor:"pointer"
    },
}))

const PerfumeCards = ({data}) => {
    

    const classes= useStyles()

    return (
        <div className={classes.card}>
            <img className={classes.img} src={data.image}/>

            <div className={classes.info}>
                <p className={classes.name}>{data.name}</p>
                <p className={classes.price}>{splitNumber(data.price)}</p>
            </div>
            
            <div className={classes.holderBtn}>
                <button className={classes.button}>
                    <Link to={`/happyshop/${data.id}`}     
                        style={{color:'#fff', textDecoration:'none'}}>details</Link>
                </button>
            </div>

        </div>
    );
};

export default PerfumeCards;