import React, {useContext} from 'react';
import { Grid,makeStyles } from '@material-ui/core';

// component
import PurchaseCards from './shared/PurchaseCards';


// context
import { ContextProvider } from '../context/ItemContextProvider';

const useStyles=makeStyles((theme)=>({
    container:{
        minHeight:'100vh'
    }
    ,

    leftComponent:{
        marginTop:'150px',
        padding:'10px'
    }



}))


const Purchases = () => {

    const classes= useStyles();
    const {state, dispatch}= useContext(ContextProvider)

    return (
        <div className={classes.container}>
                <Grid item sm={8} className={classes.leftComponent}>

                    {
                        state.addItems.map((item)=> <PurchaseCards key={item.id} data={item}/>)
                    }

                </Grid>
        </div>
    );
};

export default Purchases;