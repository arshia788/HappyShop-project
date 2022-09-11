import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core';

// components
import DiscountCards from './shared/DiscountCards';

// function
import { discountsFilter } from '../helper/function';


// context
import { ItemProvider } from '../context/ItemProductProvider';

const useStyles=makeStyles((theme)=>({
    container:{
        padding:'15px',
        marginTop:theme.spacing(5),
    },

    mainBox:{
        width:'93%',
        margin:'auto',
    },

    textFiled:{
        [theme.breakpoints.down('xs')]:{
            width:'100%',
            display:'flex',
            justifyContent:'center'
        }
    },

    text:{
        borderBottom:'4px solid crimson',
        width:'9%',
        borderEndEndRadius:'10px',
        [theme.breakpoints.down('xs')]:{
            width:'31%',
        }
    },

    holderCards:{
        display:'flex',
        justifyContent:'space-between',
        flexWrap:'wrap !important',
        marginTop:theme.spacing(2.3),
        [theme.breakpoints.down('sm')]:{
            display:'flex',
            flexWrap:'wrap'
        }

    }


}))

const Discounts = () => {

    const classes = useStyles()

    const {items} = useContext(ItemProvider)

    const discount= discountsFilter(items)

    return (
        <div className={classes.container}>

            <div className={classes.mainBox}>

                <div className={classes.textFiled}>
                    <h2 className={classes.text}>discounts</h2>
                </div>

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