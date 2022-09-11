import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core';

// function
import { splitNumber } from '../helper/function';
import { findTag } from '../helper/function';

// context
import { ItemProvider } from '../context/ItemProductProvider';
import { ContextProvider } from '../context/ItemContextProvider';


const useStyles=makeStyles((theme)=>({
    container:{
        marginTop:'100px !important',
        marginBottom:theme.spacing(10)
    },

    box:{
        width:'85%',
        margin:'auto',
        position:'relative',
        borderRadius:'5px',
        overflow:'hidden',
        background:'#fff',
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        padding:'23px',
        display:'flex',
        justifyContent:'space-between',
        [theme.breakpoints.down('xs')]:{
            flexDirection:'column'
        }
        
    },

    imgHolder:{
        marginRight:'20px',
        width:'60%',
        height:'100%',
        [theme.breakpoints.down('xs')]:{
            width:'100%',
            marginBottom:theme.spacing(4.5),
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
        },

        [theme.breakpoints.down('md')]:{
            width:'100%',
            marginBottom:theme.spacing(4.5),
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
        },
    },
    
    img:{
        width:'100%',
        borderRadius:'5px',
        height:'100%',
        objectFit:'cover',
    },

    name:{
        marginBottom:theme.spacing(5),
        marginTop:theme.spacing(1.3),
        fontSize:'1.5rem',
    },

    brand:{
        marginBottom:theme.spacing(3)
    },

    infoProduct:{
        marginBottom:theme.spacing(5.5),
    },

    pricies:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        width:'37%',
        [theme.breakpoints.down('sm')]:{
            width:'60%',
        },
        [theme.breakpoints.down('xs')]:{
            width:'80%',
            margin:'auto !important',
        },

    },

    price:{
        background:'crimson',
        color:'#fff',
        width:'fit-content',
        padding:'3px 7px',
        borderRadius:'5px',

    },

    priceDiscount:{
        background:'navy',
        color:'#fff',
        width:'fit-content',
        padding:'3px 7px',
        borderRadius:'5px'
    },


    boxRelated:{
        width:'90%',
        margin:' 50px auto',
        position:'relative',
        borderRadius:'10px',
        overflow:'hidden',
        background:'#fff',
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
    },

    button:{
        marginTop:theme.spacing(5),
        border:'none',
        background:'orange',
        color:'#fff',
        padding:'5px 10px',
        cursor:'pointer',
        borderRadius:'5px',
        fontSize:'1.1rem'
    }

}))
const DetailProducts = (props) => {

    const classes= useStyles()

    const {state, dispatch}= useContext(ContextProvider)

    const id = props.match.params.id
    const {items} = useContext(ItemProvider)
    const product = items[id - 1]
    const {image, price, name, info, brand, priceDiscount, type} = product

    // type ro dadi ta onja beri begi ke true hast on shart ya flase
    const yoyo= findTag(type)

    return (
        <div className={classes.container}>

            <div className={classes.box}>

                <div className={classes.imgHolder}>
                    <img className={classes.img}
                    src={image} alt={name}/>
                </div>

                <div className={classes.info}>

                   <p className={classes.name}>{name}</p>
                   <p className={classes.brand}><span style={{color:'crimson', fontWeight:'600', fontSize:'1.2rem'}}>brand:</span> {brand}</p>
                   <p className={classes.infoProduct}> 
                   <span style={{color:'crimson', fontSize:'1.2rem', fontWeight:'600'}}>info: </span>
                   {info}</p>


                    {
                        yoyo?
                        <div className={classes.pricies}>
                            <p className={classes.price}><s>{splitNumber(price)} </s> </p>
                            <p className={classes.priceDiscount}>{splitNumber(priceDiscount)}</p>
                        </div>
                        :
                        <p className={classes.price}>{splitNumber(price)}</p>
                    }


                    <button onClick={()=> dispatch({type:'add-item', payload:product})}
                    className={classes.button}>add-item</button>

                    
                </div>

            </div>


            {/* <div className={classes.boxRelated}>
                    
                <img className={classes.img}
                 src={image} alt={name}/>
            </div> */}

        </div>
    );
};

export default DetailProducts;