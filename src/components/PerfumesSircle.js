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
        [theme.breakpoints.down('xs')]:{
            height:'800px',
        }
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
        top: '100px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '70vw',
        background: 'rgb(255, 255, 255)',
        margin: 'auto',
        zIndex: '3',
        opacity: '1',
        borderRadius: '13px',
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        display: 'flex',
        justifyContent: 'flex-start',

        [theme.breakpoints.down('xs')]:{
            top:'10px',
            display:'flex',
            flexDirection:'column',
            
        }
    },

    // imgHolder:{
    //     width: '350px',
    //     height: '100% ',
    //     marginRight: '20px',
    //     // [theme.breakpoints.down('xs')]:{
    //     //     width:'100%',
    //     //     height:'200px'
    //     // }
    // },

    imgDior:{
        width: '250px',
        height: '100%',
        objectFit: 'cover',
        marginRight:'20px',
        paddingBottom:theme.spacing(2),
        [theme.breakpoints.down('xs')]:{
            width:'100%',
            height:'310px',
            objectFit: 'cover',
            margin:'0',
        }
    }
    ,


    information:{
        marginTop: '1rem',
        paddingBottom:theme.spacing(1.3),
        [theme.breakpoints.down('xs')]:{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column',
            // padding:'0px 70px 10px'
        }
    }
    ,

    category:{
        color:'crimson', 
        fontSize:'1.5rem', 
        marginBottom:'10px',
        [theme.breakpoints.down('xs')]:{
            display:'flex',
            justifyContent:'space-between', 
            alignItems:'center'
        }, 
    }
    ,

    categorySpan:{
        color:'black', 
        fontSize:'1.3rem', 
        [theme.breakpoints.down('xs')]:{
            marginLeft:'10px',
        }
    }
    ,

    p:{
        [theme.breakpoints.down('xs')]:{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            margin:'5px'
        }
    },

    button:{
        border:'none',
        background:'transparent',
        background:'crimson',
        padding:'5px 10px',
        borderRadius:'5px',
        border:'none',
    },
    
    link:{
        textDecoration:"none",
        color:'#fff',
    }

}))

const PerfumesSircle = () => {

    const classes =useStyles()

    const {items} = useContext(ItemProvider)
    const [index, setIndex]=useState(0)

    const diorItem= diorFilter(items)

    const {image, info, name, price, category, id} = diorItem[index]

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

                        
                    <p className={classes.category}>
                    category: <span className={classes.categorySpan}>{category}</span> </p>


                    <p className={classes.p} style={{marginBottom:'10px',}}> <span style={{color:'crimson', fontSize:'1.5rem'}}>info: </span> {info}</p>

                    <p style={{color:'crimson', fontSize:'1.5rem', marginBottom:'15px', }}>price: <span style={{color:'black', fontSize:'1.2rem'}}>{splitNumber(price)}</span> </p>

                    <button className={classes.button}>
                        <Link to={`/happyshop/${id}`} className={classes.link} >details</Link>
                    </button>
                
                </div>
            </div>

        </div>
    );
};

export default PerfumesSircle;