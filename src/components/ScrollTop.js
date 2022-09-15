import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core';


// icon
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';


const useStyles=makeStyles((theme)=>({
    
    container:{
        fontSize:'2.3rem',
        transition:"all .3s ease !important",
        position:'fixed',
        bottom:(props)=> (props.move ? '33px':'0'),
        right:"20px",
        background:'navy',
        width:'50px',
        height:'50px',
        borderRadius:'50%',
        display:(props)=> props.move ? 'flex':'none',
        justifyContent:'center',
        alignItems:'center',
        color:'#fff',
        zIndex:'3',
    },

    icon:{
        fontSize:'3.3rem'
    }

}))
const ScrollTop = () => {

    const [move, setMove]= useState(false)
    const classes = useStyles({move})

    useEffect(()=>{

        window.addEventListener('scroll', function(){
            if(window.pageYOffset > 500){
                setMove(true)
            }else{
                setMove(false)

            }
        })

    },[move])

    return (
        <div style={{transition:'all .3s ease'}}>
            <a href='#' className={classes.container}>
                <KeyboardArrowUpIcon className={classes.icon}/>
            </a>
        </div>
    );
};

export default ScrollTop;