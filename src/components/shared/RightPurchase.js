import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';


import { ContextProvider } from '../../context/ItemContextProvider';

const useStyles=makeStyles((theme)=>({
    box:{
        background:'#fff',
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        borderRadius:'5px',
        padding:'25px 20px',
        [theme.breakpoints.down('xs')]:{
            width:'90%',
            margin:'10px auto',
        }
        
    },

    btnLeft:{
        border:'none',
        background:'crimson',
        color:'#fff',
        padding:'3px 7px',
        borderRadius:'5px',
        fontSize:'1.1rem',
        cursor:'pointer'
    },
    
    btnRight:{
        border:'none',
        background:'navy',
        color:'#fff',
        padding:'3px 7px',
        borderRadius:'5px',
        fontSize:'1.1rem',
        cursor:'pointer',
    },


}))

const RightPurchase = () => {
    
    const classes= useStyles()

    const {state, dispatch}= useContext(ContextProvider)

    return (
        <div >
                    {
                        state.itemsCounter > 0 &&<div className={classes.box}>
                            <p style={{marginBottom:'10px'}}><span style={{color:'seagreen', fontSize:'1.1rem'}}>total items:</span> {state.itemsCounter}</p>
                            <p style={{marginBottom:'20px'}}><span style={{color:'seagreen', fontSize:'1.1rem'}}>total payment:</span> {state.total} $</p>

                            <div style={{display:'flex', justifyContent:'space-between'}}>
                                <button className={classes.btnLeft} onClick={()=> dispatch({type:'checkout'})}>clear</button>
                                <button className={classes.btnRight} onClick={()=> dispatch({type:'clear'})}>check out</button>
                            </div>

                        </div>
                    }

                    {
                        state.checkout && <div>
                            <h3>checked out successfuly</h3>
                            <Link to='/happyshop'>back home</Link>
                        </div>
                    }


                    {
                        !state.checkout && state.itemsCounter === 0 && <div>
                            <h3>want to but?</h3>
                            <Link to='/happyshop/shop'></Link>
                        </div>
                    }
        </div>
    );
};

export default RightPurchase;