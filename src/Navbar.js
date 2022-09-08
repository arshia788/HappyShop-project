import React, { useEffect, useState } from 'react';
import {makeStyles, Typography} from '@material-ui/core';

// icons
import { Icon } from 'react-icons-kit';
import { home } from 'react-icons-kit/icomoon/home';
import {cross} from 'react-icons-kit/entypo/cross';

import {instagram} from 'react-icons-kit/fa/instagram';
import {facebookSquare} from 'react-icons-kit/fa/facebookSquare'
import {twitterSquare} from 'react-icons-kit/fa/twitterSquare';


const useStyles=makeStyles((theme)=>({
    nav:{
        transition:"all .3s ease",
        background:'crimson',
        display:'flex',
        justifyContent:'space-between',
        alignItems:"center",
        color:"#fff",
        padding:theme.spacing(1.5),
        width:(props)=>  props.move ? '100%':'80%',
        margin:'auto',
        borderRadius:(props)=> props.move ?'0' :'5px',
        position:"fixed",
        top:'0px',
        left:'0',
        right:'0',
        boxSizing:'border-box',
        padding:'20px',
        [theme.breakpoints.down('xs')]:{
            boxSizing:'border-box',
            padding:'13px'
        }

    },

    h1:{
        fontSize:'2.1rem'
    },

    list:{
        transition:'all .3s ease',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        width:'20%',
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
        }
    },

    li:{
        transition:"all .3s ease",
        margin:'0 10px 0 10px',
        fontSize:'1.2rem',
        [theme.breakpoints.down('xs')]:{
            padding:'10px 0 10px 5px',
            fontSize:'1.1rem'
            
        }
    },

    social:{
        width:"15%",
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        cursor:'pointer',
        [theme.breakpoints.down('xs')]:{
            display:'none'
        }
    },

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
                hsppy shop
            </Typography>

            <ul className={classes.list}>
                <li className={classes.li}>home</li>
                <li className={classes.li}>phones</li>
                <li className={classes.li}>perfumes</li>
            </ul>


            <div className={classes.social}>
                <Icon icon={instagram} size={27} style={{color:"#fff"}}/>
                <Icon icon={facebookSquare} size={27} style={{color:"#fff"}}/>
                <Icon icon={twitterSquare} size={27} style={{color:"#fff"}}/>

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