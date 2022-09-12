import React, { useContext } from 'react';
import { Grid, makeStyles } from '@material-ui/core';

// context
import { ItemProvider } from '../context/ItemProductProvider';


// components
import FilterShop from './FilterShop';
import ShopCards from './shared/ShopCards';

const useStyles=makeStyles((theme)=>({

    container:{
        minHeight:'100vh',
        marginTop:'150px',
        // border:'1px solid black',
    }

}))

const ShopAll = () => {

    const {items} = useContext(ItemProvider)
    const classes= useStyles()


    return (
        <div className={classes.container}>
            
            <Grid container>

                <Grid xs={12} item>
                    <FilterShop 
                    items={items.length}
                    />
                </Grid>

                <Grid xs={12} item>

                </Grid>

            </Grid>
        </div>
    );
};

export default ShopAll;