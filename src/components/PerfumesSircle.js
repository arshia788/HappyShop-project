import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core'



// context
import { ItemProvider } from '../context/ItemContextProvider';

// function
import { diorFilter } from '../helper/function';
import { splitNumber } from '../helper/function';

const useStyles=makeStyles((theme)=>({

    container:{
        marginTop: '2rem',
        width: '100%',
        height: '600px',
        position: 'relative',
    }
,

    img:{
        width: '100%',
        height:' 100%',
        opacity: '.6',
    }
    ,
    box:{
        overflow: 'hidden',
        position: 'absolute',
        top: '50px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '70vw',
        background: 'rgb(255, 255, 255)',
        margin: 'auto',
        height: '350px',
        zIndex: '3',
        opacity: '1',
        borderRadius: '13px',
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        display: 'flex',
        justifyContent: 'flex-start',
    },

    imgHolder:{
        width: '300px',
        height: '100%',
        marginRight: '20px',
    },

    imgDior:{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    }
    ,

    information:{
        width: '70%',
        marginTop: '1rem',
    }
    ,

    button:{
        border:'none',
        background:'transparent',
        background:'crimson',
        padding:'5px 10px',
        borderRadius:'5px',
        border:'none'
    },
    
    link:{
        textDecoration:"none",
        color:'#fff',
    }

}))

const PerfumesSircle = () => {

    const classes =useStyles()

    const {items} = useContext(ItemProvider)
    const[index, setIndex]=useState(0)

    const diorItem= diorFilter(items)
    console.log(diorItem)

    const {image, info, name, price, category, id} = diorItem[index]
    console.log(price)

    return (
        <div className={classes.container}>

            <img src={image} className={classes.img}/>
            
            <div className={classes.box}>

                <div className={classes.imgHolder}>
                    <img className={classes.imgDior} src={image}/>
                </div>

                <div className={classes.information}>

                    <p style={{marginBottom:'20px',fontSize:'1.5rem', 
                     fontWeight:'900', color:'navy'}} >{name}</p>

                    <p style={{color:'crimson', fontSize:'1.5rem', marginBottom:'10px'}}>
                        
                    category: <span style={{color:'black', fontSize:'1.3rem'}}>{category}</span> </p>


                    <p style={{marginBottom:'10px',}}> <span style={{color:'crimson', fontSize:'1.5rem'}}>info:</span> {info}</p>

                    <p style={{color:'crimson', fontSize:'1.5rem', marginBottom:'20px'}}>price: <span style={{color:'black', fontSize:'1.4rem'}}>{splitNumber(price)}</span> </p>

                    <button className={classes.button}>
                        <Link to={`/happyshop/${id}`} className={classes.link} >details</Link>
                    </button>
                
                </div>
            </div>

        </div>
    );
};

export default PerfumesSircle;