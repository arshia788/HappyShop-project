import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core';

// component
import BoxCardPerfumes from './shared/BoxCardPerfumes';

// context
import { ItemProvider } from '../context/ItemProductProvider';

// function
import { filterBoxPerfumes } from '../helper/function';


const useStyles=makeStyles((theme)=>({
    container:{
        marginTop:'7.1rem',
    }
    ,

    holderBox:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        flexWrap:'wrap',
        width:'80vw',
        margin:'auto',
        [theme.breakpoints.down('xs')]:{ 
            justifyContent:'center',
        }
        ,
        [theme.breakpoints.down('md')]:{ 
            justifyContent:'center',
        }

    }
}))

const BoxPerfumes = () => {

    const classes= useStyles()
    
    const {items}= useContext(ItemProvider)

    const boxPerfumes=filterBoxPerfumes(items)

    return (
        <div className={classes.container}>

            <div style={{textAlign:'center', marginBottom:'20px'}}>
                <h2>you know what to do <span style={{color:'crimson'}}>next</span> :) </h2>
            </div>
            <div className={classes.holderBox}>

                {
                    boxPerfumes.map((product)=> <BoxCardPerfumes key={product.id} data={product}/>)
                }

            </div>

        </div>
    );
};

export default BoxPerfumes;