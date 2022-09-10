import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

// components
import BoxScroll from './components/BoxScroll';
import Discounts from './components/Discounts';
import PerfumesSircle from './components/PerfumesSircle';
import SliderPhones from './components/SliderPhones';

const useStyles=makeStyles((theme)=>({
    container:{
        marginTop:'100px',
        [theme.breakpoints.down('xs')]:{
            marginTop:'160px',

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

                <Grid item xs={12}>
                    <PerfumesSircle />
                </Grid>

                <Grid item xs={12}>
                    <SliderPhones />
                </Grid>

            </Grid>

        </div>
    );
};

export default Landing;