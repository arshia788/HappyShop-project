import React, {useContext, useState} from 'react';
import { makeStyles } from '@material-ui/core';


import lgv50 from '../images/LGV50.jpg';
import creed from '../images/perfumes/creed.jpg'


// icon
import PlusOneIcon from '@material-ui/icons/PlusOne';
import ExposureNeg1Icon from '@material-ui/icons/ExposureNeg1';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

// function
import { splitNumber } from '../helper/function';
import { findTag } from '../helper/function';
import { inAddItems } from '../helper/function';
import { qtyCheck } from '../helper/function';
import { itemQty } from '../helper/function';
import { findThrePic } from '../helper/function';

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
        padding:'23px 23px 160px 23px',
        display:'flex',
        justifyContent:'space-between',
        
        [theme.breakpoints.down('xs')]:{
            flexDirection:'column',
            padding:'23px 23px 50px 23px',
        },
        
        [theme.breakpoints.down('md')]:{
            padding:'23px 23px 80px 23px',
        },
        
    },

    imgHolder:{
        marginRight:'20px',
        width:'60%',
        maxHeight:'453.783px',
        [theme.breakpoints.down('xs')]:{
            width:'100%',
            marginBottom:theme.spacing(4.5),
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column',
        },

        [theme.breakpoints.down('md')]:{
            width:'100%',
            marginBottom:theme.spacing(4.5),
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column',
        },
    },
    
    img:{
        width:'100%',
        borderRadius:'5px',
        height:'100%',
        objectFit:'cover',
    },

    holderReplaceImg:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:'10px'
    },

    imgReplace:{
        width:'100px !important',
        margin:'0 5px',
        borderRadius:'5px',
        height:'100px !important',
        cursor:'pointer',
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

    controllBtn:{
        width:'37%', 
        display:'flex', 
        justifyContent:'space-between', 
        alignItems:'center',
        marginTop:'30px',
        [theme.breakpoints.down('xs')]:{
            width:'77%',
            margin:'auto',
            marginTop:'40px'
        }
    }
    ,

    button:{
        border:'none',
        background:'orange',
        color:'#fff',
        padding:'5px 10px',
        cursor:'pointer',
        borderRadius:'5px',
        fontSize:'1.1rem'
    },
    
    remove:{
        border:'none',
        borderRadius:'5px',
        background:'crimson',
        padding:'5px 10px',
        color:'#fff',
        cursor:'pointer',
    },
    
    minus:{
        border:'none',
        cursor:'pointer',
        borderRadius:'5px',
        background:'crimson',
        padding:'5px 10px',
        color:'#fff',
    },

    qty:{
        background:'navy',
        color:'#fff',
        borderRadius:'5px',
        fontSize:'1.1rem',
        width:'40px',
        textAlign:'center'
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

}))


const DetailProducts = (props) => {

    const classes= useStyles()
    const {state, dispatch}= useContext(ContextProvider);

    const id = props.match.params.id;
    const {items} = useContext(ItemProvider);
    const product = items[id - 1];
    const {image, price, name, info, brand, priceDiscount,type, category} = product

    const [holderImg, setHolderImg]=useState(image)
    const handleItem= findTag(type)
    
    const numberOfQty= itemQty(state, product)
    const twoImg = findThrePic(items, product)

    



    return (
        <div className={classes.container}>

            <div className={classes.box}>

                <div className={classes.imgHolder}>
                    <img className={classes.img}
                    src={holderImg} alt={name}/>

                    <div className={classes.holderReplaceImg}>

                        {
                            twoImg.map((item, index)=> <img onClick={()=>setHolderImg(item.image)}
                            className={classes.imgReplace} key={index} src={item.image}/>)
                        }

                        <img src={image} onClick={()=> setHolderImg(image)}style={{width:"100px", borderRadius:'5px', cursor:'pointer'}} />


                    </div>
                </div>

                <div className={classes.info}>

                   <p className={classes.name}>{name}</p>
                    
                    



                   <p className={classes.brand}><span style={{color:'crimson', fontWeight:'600', fontSize:'1.2rem'}}>brand:</span> {brand}</p>
                   <p className={classes.infoProduct}> 
                   <span style={{color:'crimson', fontSize:'1.2rem', fontWeight:'600'}}>info: </span>
                   {info}</p>


                    {
                        handleItem?
                        <div className={classes.pricies}>
                            <p className={classes.price}><s>{splitNumber(price)} </s> </p>
                            <p className={classes.priceDiscount}>{splitNumber(priceDiscount)}</p>
                        </div>
                        :
                        <p className={classes.price}>{splitNumber(price)}</p>
                    }

                    <div className={classes.controllBtn} >

                        <div>
                            
                            {qtyCheck(state, product) === 1 &&
                             <button className={classes.remove}
                             onClick={()=> dispatch({type:'remove', payload:product})}><DeleteForeverIcon /></button>}


                            {qtyCheck(state, product) > 1 && <button className={classes.minus}
                             onClick={()=> dispatch({type:'decrease', payload:product})}>
                            <ExposureNeg1Icon/></button>}

                        </div>
                        
                        <p className={classes.qty}>{numberOfQty}</p>
                        
                        
                        <div>

                            {
                                inAddItems(state, product)
                                ?
                                <button onClick={()=> dispatch({type:'increase', payload:product})}
                                className={classes.button}>
                                    <PlusOneIcon />
                                </button>
                            :
                            <button onClick={()=> dispatch({type:'add-item', payload:product})}
                            className={classes.button}>add-item</button>
                            }

                        </div>
                    </div>
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