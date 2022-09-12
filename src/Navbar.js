import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {makeStyles, Typography} from '@material-ui/core';

// icons
import { Icon } from 'react-icons-kit';
import { home } from 'react-icons-kit/icomoon/home';
import {cross} from 'react-icons-kit/entypo/cross';
import {shoppingBasket} from 'react-icons-kit/fa/shoppingBasket'


import { ContextProvider } from './context/ItemContextProvider';



const useStyles=makeStyles((theme)=>({
    nav:{
        transition:"all .3s ease",
        background:'crimson',
        display:'flex',
        justifyContent:'space-between',
        alignItems:"center",
        color:"#fff",
        width:(props)=>  props.move ? '100%':'90%',
        margin:'auto',
        position:"fixed",
        top:'0px',
        left:'0',
        right:'0',
        boxSizing:'border-box',
        padding:'15px',
        zIndex:'5',
        borderEndStartRadius: (props)=> props.move ?'0' :'10px' ,
        borderEndEndRadius:   (props)=> props.move ?'0' :'10px'  ,
        [theme.breakpoints.down('xs')]:{
            boxSizing:'border-box',
            padding:'13px'
        }

    },

    h1:{
        fontSize:'2.1rem',
        [theme.breakpoints.down('xs')]:{
            fontSize:'1.8rem',
        }
    },

    list:{
        transition:'all .3s ease',
        display:'flex',
        cursor:"pointer",
        [theme.breakpoints.down('xs')]:{
            position:'absolute',
            top:'60px',
            background:'crimson',
            display:"block",
            left:(props)=> props.list ? '0':'-100%',
            width:(props)=> props.list ? '100%' :'0%' ,
            borderTop:'1px solid #fff',
            borderEndEndRadius: '5px',
            borderEndStartRadius: '5px',
            // borderTopRightRadius: '5px',

        }
    },

    li:{
        transition:"all .3s ease",
        margin:'10px',
        fontSize:'1.2rem',
        [theme.breakpoints.down('xs')]:{
            padding:'10px 0 10px 5px',
            fontSize:'1rem'
            
        },
        [theme.breakpoints.down('sm')]:{
            padding:'10px 0 10px 5px',
            fontSize:'1rem'
            
        }
    },

    social:{
        width:"18%",
        [theme.breakpoints.down('xs')]:{
            width:"18%",
        }
        ,
        cursor:'pointer',
        position:'relative',
    },

    itemCounter:{
        textDecoration:'none !important',
        color:'#fff',
    },

    numbersInBasket:{
        position:'absolute',
        top:'20px',
        left:'30px',
        background:"navy",
        borderRadius:'50%',
        width:'20px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }
    ,

    btn:{
        border:'none',
        background:'transparent',
        display:"none",
        [theme.breakpoints.down('xs')]:{
            display:'block'
        }
    }
}))


const Navbar = () => {

    const {state}= useContext(ContextProvider)

    const [move, setMove]=useState(false)
    const [list, setList]= useState(false)

    const classes= useStyles({move, list})

    useEffect(()=>{
        window.addEventListener('scroll', function(){
            if(window.pageYOffset > 150){
                setMove(true)
            }else{
                
                setMove(false)
            }
        })
    },[move])

    return (
        <nav className={classes.nav}>
            <Typography variant='h1' className={classes.h1} >
                <Link to='/happyshop' style={{color:'#fff', textDecoration:'none'}}>
                    happy shop
                </Link>
            </Typography>

            <ul className={classes.list}>
                <li className={classes.li}> <Link to='/happyshop' style={{color:'#fff', textDecoration:'none'}}>home</Link>   </li>
                <li className={classes.li}> <Link to='/happyshop/shop' style={{color:'#fff', textDecoration:'none'}}>shop</Link>   </li>
            </ul>


            <div className={classes.social}>

                <Link to='/happyshop/purchases' className={classes.itemCounter} >
                    <Icon icon={shoppingBasket} size={27} style={{color:"#fff"}}/>
                    <span className={classes.numbersInBasket}>{state.itemsCounter}</span>
                </Link>

            </div>

            <button className={classes.btn} onClick={()=> setList(!list)}>
                {
                    list ?
                    <Icon icon={cross} size={23} style={{color:"#fff"}}/>
                    :
                    <Icon icon={home} size={23} style={{color:"#fff"}}/>

                }
            </button>
        </nav>
    );
};



export default Navbar;