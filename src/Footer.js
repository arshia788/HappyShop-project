import React from 'react';
import { makeStyles } from '@material-ui/core';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';

const useStyles=makeStyles((theme)=>({
    footer:{
        borderTop:"1px solid crimson",
        paddingTop:'30px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
    },

    social:{
        display:"flex",
        justifyContent:'space-between',
        alignItems:"center",
        marginTop:theme.spacing(4.5),
        width:'30%',
        [theme.breakpoints.down('xs')]:{
            
            width:'55%',
        }
    },

    holder:{
        background:'#fff',
        borderRadius:'50%',
        width:'50px',
        height:'50px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        transition:"all .3s ease",
        cursor:"pointer",
        "&:hover":{
            background:'crimson'
        }
    },

    icon:{
        transition:"all .3s ease",
        "&:hover":{
            color:'#fff'
        },
        fontSize:'1.9rem'
    },

    holderText:{
        width:'53%',
        marginTop:theme.spacing(4.5),
        textAlign:'center',
        [theme.breakpoints.down('xs')]:{
            paddingBottom:'30px'
        }
    },





}))

const Footer = () => {

    const classes= useStyles()
    return (
        <div className={classes.footer}>

            <div>
                <h1>happy shop</h1>
            </div>

            <div className={classes.social}>
                <div className={classes.holder}>
                    <FacebookIcon className={classes.icon}/>
                </div>

                <div className={classes.holder}>
                    <TwitterIcon className={classes.icon}/>
                </div>

                <div className={classes.holder}>
                    <InstagramIcon className={classes.icon}/>
                </div>

                <div className={classes.holder}>
                    <EmailIcon className={classes.icon}/>
                </div>
            </div>

            <div className={classes.holderText}>
                <p className={classes.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. 
                </p>
            </div>


        </div>
    );
};

export default Footer;