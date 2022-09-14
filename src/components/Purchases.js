import React, {useContext} from 'react';
import { Grid,makeStyles } from '@material-ui/core';
import {Link} from 'react-router-dom'

// component
import PurchaseCards from './shared/PurchaseCards';
import RightPurchase from './shared/RightPurchase';


// context
import { ContextProvider } from '../context/ItemContextProvider';

const useStyles=makeStyles((theme)=>({
    container:{
        minHeight:'100vh',
        display:'felx',
        justifyContent:'space-between',

    }
    ,

    leftComponent:{
        marginTop:'150px',
        padding:'10px'
    },

    rightComponent:{
        marginTop:'180px'
    }


}))


const Purchases = () => {

    const classes= useStyles();
    const {state, dispatch}= useContext(ContextProvider)

    return (
        <div className={classes.container}>
            <Grid container>

                <Grid item sm={8} className={classes.leftComponent}>
                    {
                        state.addItems.map((item)=> <PurchaseCards key={item.id} data={item}/>)
                    }
                </Grid>

                <Grid item sm={4} className={classes.rightComponent}>
                    <RightPurchase />
                </Grid>

            </Grid>

        </div>
    );
};

export default Purchases;