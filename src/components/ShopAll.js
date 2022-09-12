import React, { useContext, useState } from 'react';
import { Grid, makeStyles } from '@material-ui/core';

// context
import { ItemProvider } from '../context/ItemProductProvider';

import { data } from '../data';


// components
import FilterShop from './FilterShop';
import ShopCards from './shared/ShopCards';

const useStyles=makeStyles((theme)=>({

    container:{
        minHeight:'100vh',
        marginTop:'150px',
    }

}))

const ShopAll = () => {

    const { items, setItems} = useContext(ItemProvider)

    const classes= useStyles()

    const [sort, setSort]=useState('')
    const [brnad, setBrand]= useState('')
    const [category, setCategory]= useState('')


    const sortItmes=(event)=>{

        setSort(event.target.value)
        console.log(sort)

        if(event.target.value === "new"){
            setItems(items.sort((a,b)=> a.id - b.id))
        }

        if(event.target.value === "old"){
            setItems(items.sort((a,b)=> b.id - a.id))
        }

        if(event.target.value === "cheap"){
            setItems(items.sort((a,b)=> a.price - b.price))
        }
    }

    const sortByBrand=(event)=>{
        
        setBrand(event.target.value)
        if(event.target.value === 'all'){
            setItems(data)
        }
        else{
            setItems(data.filter((product)=> product.brand === event.target.value))
        }
    }

    const sortByCategory = (event)=>{

        setCategory(event.target.value)
        if(event.target.value === 'all'){
            setItems(data)
        }
        else{
            setItems(data.filter((product)=> product.category === event.target.value))
        }
    }


    return (
        <div className={classes.container}>
            
            <Grid container>

                <Grid xs={12} item>

                    <FilterShop 
                    items={items.length}
                    sortItmes={sortItmes}
                    sortByBrand={sortByBrand}
                    brnad={brnad}
                    sortByCategory={sortByCategory}
                    category={category}
                    />

                </Grid>

                <Grid xs={12} item>
                    <ShopCards 
                        data={items}
                    />
                </Grid>

            </Grid>
        </div>
    );
};

export default ShopAll;