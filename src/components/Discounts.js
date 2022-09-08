import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core';

// components
import DiscountCards from './shared/DiscountCards';

// function
import { discountsFilter } from '../helper/function';


// context
import { ItemProvider } from '../context/ItemContextProvider';

const useStyles=makeStyles((theme)=>({
    container:{
        padding:'15px',
        marginTop:theme.spacing(5),
    },

    mainBox:{
        width:'93%',
        margin:'auto',
    },

    text:{
        borderBottom:'4px solid crimson',
        width:'9%',
        borderEndEndRadius:'10px',
        [theme.breakpoints.down('xs')]:{
            width:'28%'
        }
    },

    holderCards:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        flexWrap:'wrap !important',
        marginTop:theme.spacing(2.3),

    }


}))

const Discounts = () => {

    const classes = useStyles()

    const {items} = useContext(ItemProvider)

    const discount= discountsFilter(items)
    console.log(discount)

    return (
        <div className={classes.container}>

            <div className={classes.mainBox}>

                <h2 className={classes.text}>discounts</h2>

                <div className={classes.holderCards}>

                    {
                        discount.map((product)=> <DiscountCards key={product.id} data={product}/>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Discounts;