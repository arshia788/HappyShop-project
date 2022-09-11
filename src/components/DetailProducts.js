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
        width:'90%',
        margin:'auto',
        position:'relative',
        borderRadius:'10px',
        overflow:'hidden',
        background:'#fff',
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        
    },

    img:{
        width:'300px',
        height:'100%',
        objectFit:'cover',

    },

    boxRelated:{
        width:'90%',
        margin:' 50px auto',
        position:'relative',
        borderRadius:'10px',
        overflow:'hidden',
        background:'#fff',
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
    }

}))
const DetailProducts = (props) => {

    const classes= useStyles()

    const id = props.match.params.id
    const {items}= useContext(ItemProvider)
    const product= items[id - 1]
    const {image, price, name}= product


    return (
        <div className={classes.container}>

            <div className={classes.box}>
                <img className={classes.img}
                 src={image} alt={name}/>
            </div>

            {/* <div className={classes.boxRelated}>
                    
                <img className={classes.img}
                 src={image} alt={name}/>
            </div> */}
            
        </div>
    );
};

export default DetailProducts;