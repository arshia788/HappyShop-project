import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core';

// context
import { ItemProvider } from '../context/ItemContextProvider';

// owl
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// function
import { perfumeFilter } from '../helper/function';

// component
import PerfumeCards from './shared/PerfumeCards';

const useStyles=makeStyles((theme)=>({
    container:{
        marginTop:theme.spacing(10),
        padding:'15px',
        [theme.breakpoints.down('xs')]:{
            marginTop:theme.spacing(5)
        }

    },

    textFiled:{
        [theme.breakpoints.down('xs')]:{
            width:'100%',
            display:'flex',
            justifyContent:'center'
        }
    }
    ,

    text:{
        borderBottom:'4px solid crimson',
        borderEndEndRadius:'10px',
        width:'11%',
        marginLeft:'20px',
        fontSize:'1.5rem',
        [theme.breakpoints.down('xs')]:{
            width:'31%',
        },

        [theme.breakpoints.down('md')]:{
            width:'18%',
        }
    },
}))

const options = {
    // margin: 20,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: false,
    navText: ["Prev", "Next"],
    smartSpeed: 1000,
    border:'none',
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 2,
        },
        600: {
            items: 2,
        },
        700: {
            items: 3,
        },
        1000: {
            items: 4,
        }
    },
};


const Try = () => {

    const classes= useStyles()

    const {items} = useContext(ItemProvider)
    const perfume= perfumeFilter(items)

    return (
        <div className={classes.container}>
            
            <div className={classes.textFiled}>
                <h4 className={classes.text}>our perfumes</h4>
            </div>

            <OwlCarousel
            {...options}
            className='owl-theme'
            loop
            // dots
            nav
            >

            {
                perfume.map((product)=> <PerfumeCards key={product.id} data={product}/>)
            }
                
            </OwlCarousel>
            
        </div>
    );
};

export default Try;