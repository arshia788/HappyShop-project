import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core';

import { ItemProvider } from '../context/ItemProductProvider';
import { ContextProvider } from '../context/ItemContextProvider';


const useStyles=makeStyles((theme)=>({
    container:{
        marginTop:'100px !important',
        marginBottom:theme.spacing(10)
    },

    box:{
        width:'85%',
        margin:'auto',
        position:'relative',
        borderRadius:'5px',
        overflow:'hidden',
        background:'#fff',
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        padding:'23px',
        display:'flex',
        justifyContent:'space-between',
        [theme.breakpoints.down('xs')]:{
            flexDirection:'column'
        }
        
    },

    imgHolder:{
        marginRight:'20px',
        width:'750px',
        height:'100%',
        [theme.breakpoints.down('xs')]:{
            width:'450px',
            marginBottom:theme.spacing(4.5)
        }
    },
    
    img:{
        width:'100%',
        borderRadius:'5px',
        height:'100%',
        objectFit:'cover',
    },

    name:{
        marginBottom:theme.spacing(5),
        fontSize:'1.5rem'
    },

    

    

    brand:{
        
    }

,



    boxRelated:{
        width:'90%',
        margin:' 50px auto',
        position:'relative',
        borderRadius:'10px',
        overflow:'hidden',
        background:'#fff',
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
    },

}))
const DetailProducts = (props) => {

    const classes= useStyles()

    const id = props.match.params.id
    const {items}= useContext(ItemProvider)
    const product= items[id - 1]
    const {image, price, name, info, brand}= product


    return (
        <div className={classes.container}>

            <div className={classes.box}>

                <div className={classes.imgHolder}>
                    <img className={classes.img}
                    src={image} alt={name}/>
                </div>

                <div className={classes.info}>

                   <p className={classes.name}>{name}</p>
                   <p className={classes.brand}><span style={{color:'crimson', fontWeight:'600', fontSize:'1.2rem'}}>brand:</span> {brand}</p>
                   <p className={classes.infoProduct}> 
                   <span style={{color:'crimson', fontSize:'1.2rem', fontWeight:'600'}}>info: </span>
                   {info}</p>

                </div>

                {/* <img /> */}
            </div>

            {/* <div className={classes.boxRelated}>
                    
                <img className={classes.img}
                 src={image} alt={name}/>
            </div> */}

        </div>
    );
};

export default DetailProducts;