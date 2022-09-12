import React from 'react';
import { makeStyles } from '@material-ui/core';

import Fade from 'react-reveal/Fade'; 


const useStyles=makeStyles((theme)=>({
    
    container:{
        border:'1px solid black',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        flexWrap:'wrap'
    },

    box:{
        width:'23.23%'
    }
}))

const ShopCards = ({data}) => {

    console.log(data)
    const classes = useStyles()
    
    return (
        <div className={classes.container}>
            {
                data.map((item, index)=>{
                    return(
                        <Fade key={index} bottom>
                            <div className={classes.box}>
                                <img style={{width:'100%'}} src={item.image}/>
                            </div>
                        </Fade>
                    )
                })
            }
        </div>
    );
};

export default ShopCards;