import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

// components
import BoxScroll from './components/BoxScroll';
import Discounts from './components/Discounts';

const useStyles=makeStyles((theme)=>({
    container:{
        marginTop:'130px',
        [theme.breakpoints.down('xs')]:{
            marginTop:'180px',

        }
    }
}))

const Landing = () => {

    const classes= useStyles()
    return (
        <div>

            <Grid container  className={classes.container}>

                <Grid item xs={12}>
                    <BoxScroll />
                </Grid>

                <Grid item xs={12}>
                    <Discounts />
                </Grid>

            </Grid>

        </div>
    );
};

export default Landing;