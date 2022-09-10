import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core';

// component
import BoxCardPerfumes from './shared/BoxCardPerfumes';

// context
import { ItemProvider } from '../context/ItemContextProvider';

// function
import { filterBoxPerfumes } from '../helper/function';


const useStyles=makeStyles((theme)=>({
    container:{
        marginTop:'7.1rem',
        // display:'flex',
        // justifyContent:'center',
        // alignItems:'center',
    }
    ,

    holderBox:{

        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        flexWrap:'wrap',
        width:'80vw',
        margin:'auto',
        // border:'1px solid black',

        [theme.breakpoints.down('xs')]:{ 
            justifyContent:'center',
        }

    }
}))

const BoxPerfumes = () => {

    const classes= useStyles()
    
    const {items}= useContext(ItemProvider)

    const boxPerfumes=filterBoxPerfumes(items)
    console.log(boxPerfumes)

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