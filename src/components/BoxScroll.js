import React, {useState, useContext} from 'react';
import { makeStyles } from '@material-ui/core';

// icons
import { Icon } from 'react-icons-kit';
import {arrowCurveRight} from 'react-icons-kit/metrize/arrowCurveRight'
import {arrowCurveLeft} from 'react-icons-kit/metrize/arrowCurveLeft'

// function
import { headPhones } from '../helper/function';


// context
import { ItemProvider } from '../context/ItemContextProvider';


const useStyles=makeStyles((theme)=>({
    container:{
        width:'100%',
        height:'auto',
        // border:'1px solid black',
        boxSizing:'border-box',
        padding:'20px'
    },

    box:{
        width:'81%',
        // padding:'10px',
        margin:'auto',
        height:'450px',
        borderRadius:'7px',
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        background:'#fff',
        overflow:'hidden',
        position:'relative',
    },

    img:{
        width:'100%',
        height:'100%'
    },

    info:{
        position:'absolute',
        left:'0',
        top:"40px",
        "&:hover":{
            left:'50px'
        }
    },

    control:{
        position:'absolute',
        bottom:'20px',
        right:'10px',
    }

}))

const BoxScroll = () => {

    const classes= useStyles()

    const {items, setItems}=useContext(ItemProvider)

    const [index, setIndex]=useState(0)

    const filtered= headPhones(items)
    
    const {id, image, name  , price}=filtered[index]

    const nextSlide=()=>{
        setIndex((index)=>{
            const newIndex= index + 1
            return newIndex
        })
    }

    const prevSlide=()=>{
        setIndex((index)=>{
            const newIndex= index - 1
            return newIndex
        })
    }

    


    return (
        <div className={classes.container}>

            <div className={classes.box}>

                <img className={classes.img} src={image} />

                <div className={classes.info}>
                    <span style={{fontSize:'2.3rem', color:'navy'}}>{name}</span>
                    <p >{price}</p>
                </div>

                <div className={classes.control}>
                    <Icon onClick={prevSlide} icon={arrowCurveLeft} size={30}/>
                    <Icon onClick={nextSlide} style={{marginLeft:'30px'}} icon={arrowCurveRight} size={30}/>
                </div>
            </div>
            
        </div>
    );
};

export default BoxScroll;