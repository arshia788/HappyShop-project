import React, {useState, useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
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
        padding:'20px',
        [theme.breakpoints.down('xs')]:{
            padding:'5px'
        }
    },

    box:{
        width:'93%',
        // padding:'10px',
        margin:'auto',
        height:'450px',
        borderRadius:'7px',
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        background:'#fff',
        overflow:'hidden',
        position:'relative',
        transition:'all .3s ease',
        [theme.breakpoints.down('xs')]:{
            width:'100%'
        }
    },

    img:{
        width:'100%',
        height:'100%',
        objectFit:'cover'
    },


    control:{
        position:'absolute',
        bottom:'20px',
        right:'10px',
    },

    icon:{
        transition:'all .3s ease',
        "&:hover":{
            color:'crimson'
        }
    }

}))

const BoxScroll = () => {

    const classes= useStyles()

    const {items, setItems}=useContext(ItemProvider)
    const [index, setIndex]=useState(0)
    const filtered= headPhones(items)
    const {id, image}=filtered[index]


    useEffect(()=>{

        let slider= setInterval(()=>{
            setIndex((index)=>{
                let sliderIndex= index + 1
                return checkIndex(sliderIndex)
            })
        },3300)

        return ()=> clearInterval(slider)

    },[index])


    const checkIndex=(number)=>{

        const indexItem=filtered.length -1

        if(number < 0){
            return indexItem
        }

        if(number > indexItem){
            return 0
        }

        return number
    }

    const nextSlide=()=>{
        setIndex((index)=>{
            const newIndex= index + 1
            return checkIndex(newIndex)
        })
    }

    const prevSlide=()=>{
        setIndex((index)=>{
            const newIndex= index - 1
            return checkIndex(newIndex)
        })
    }

    


    return (
        <div className={classes.container}>

            <div className={classes.box} >

            <Link to={`/happyshop/${id}`}>
                <img className={classes.img} src={image} />
            </Link>

                

                <div className={classes.control}>
                    <Icon onClick={prevSlide}  icon={arrowCurveLeft} size={30} className={classes.icon}/>
                    <Icon onClick={nextSlide} style={{marginLeft:'10px'}} className={classes.icon} 
                    
                    icon={arrowCurveRight} size={30}/>
                </div>
            </div>
            
        </div>
    );
};

export default BoxScroll;