import React from 'react';
import { makeStyles } from '@material-ui/core';


const useStyles=makeStyles((theme)=>({

    container:{
        boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
        background:'#fff',
        padding:' 25px 20px',
        borderRadius:'5px',
        width:'87%',
        margin:'auto',
        display:'flex',
        justifyContent: 'space-between',
        alignItems: 'align-items',
        [theme.breakpoints.down('xs')]:{
            flexDirection:'column'
        }
    },

    textHolder:{
        fontSize:'1.3rem',
        textAlign:'center',
        [theme.breakpoints.down('xs')]:{
            marginBottom:'15px',
            fontSize:'1.4rem',
        }
    },

    mainBoxRadio:{
        textAlign:'center',
    },

    
    controllRadio:{
        display:'flex',
        marginTop:'10px',
        [theme.breakpoints.down('xs')]:{
            flexDirection:'column',
            marginTop:'25px',
            marginBottom:'15px',
        }
    },

    questionLabel:{
        fontSize:'1.1rem',
        [theme.breakpoints.down('xs')]:{
            fontSize:'1.3rem',
        }
    },

    radioCenter:{
        margin:'0 10px',
        [theme.breakpoints.down('xs')]:{
            margin:'20px 0'
        }
    }
    ,

    selectOption:{
        display:'flex',
        flexDirection:'column',
        [theme.breakpoints.down('xs')]:{
            textAlign:'center',
            marginTop:'23px'
        }
    },

    textBrand:{
        fontSize:'1.1rem',
        [theme.breakpoints.down('xs')]:{
        fontSize:'1.3rem'
        }
    }
    ,

    selectBrnad:{
        marginTop:'10px', 
        border:'none', 
        padding:'5px',
        borderRadius:'5px',
        background:'navy',
        color:'#fff'
    },


}))

const FilterShop = ({items, sortItmes,sortByBrand, brnad, sortByCategory, category}) => {

    const classes = useStyles()

    return (
        <div className={classes.container}>

            <p className={classes.textHolder}>current Items :
             <span style={{color:'crimson'}}> {items}</span> </p>

            <div className={classes.mainBoxRadio}>
                <label className={classes.questionLabel}>sort by what ?</label>

                <div className={classes.controllRadio}>
                    <div>
                        <label style={{marginRight:'5px'}}>sort by new</label>
                        <input type='radio'  name='radios' value='new' onChange={sortItmes} />
                    </div>

                    <div className={classes.radioCenter} >
                        <label style={{marginRight:'5px'}}>sort by old</label>
                        <input type='radio'  name='radios' value='old' onChange={sortItmes}/>
                    </div>

                    <div>
                        <label style={{marginRight:'5px'}}>sort by lowest price</label>
                        <input type='radio'  name='radios' value='cheap' onChange={sortItmes}/>
                    </div>

                </div>

            </div>

            <div className={classes.selectOption}>

                <label className={classes.textBrand}>which brand ?</label>

                    <select value={brnad} onChange={sortByBrand}
                    className={classes.selectBrnad}>
                        <option value='all'>all</option>
                        <option value='samsung'>samsung</option>
                        <option value="iphone">iphone</option>
                        <option value="LG">LG</option>
                        <option value='razer'>razer</option>
                        <option value="logitech">logitech</option>
                        <option value="Xiaomi">Xiaomi</option>
                        <option value="chanel">chanel</option>
                        <option value="dior">dior</option>
                        <option value="tomford">tomford</option>
                        <option value="VIKTOR&ROLF">VIKTOR&ROLF</option>
                        <option value="Montblanc">Montblanc</option>
                        <option value="creed">creed</option>
                    </select>
            </div>


            <div className={classes.selectOption}>
                
                <label className={classes.textBrand}>which category ?</label>

                    <select value={category} onChange={sortByCategory}
                    className={classes.selectBrnad}>
                        <option value='all'>all</option>
                        <option value='mobile'>mobile</option>
                        <option value="headphone">headphone</option>
                        <option value="perfume">perfume</option>
                    </select>
            </div>

        </div>
    );
};

export default FilterShop;