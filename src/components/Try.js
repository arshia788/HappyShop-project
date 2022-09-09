import React, {useContext} from 'react';

import { ItemProvider } from '../context/ItemContextProvider';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



const Try = () => {

    const {items} = useContext(ItemProvider)

    return (
        <div>
            <OwlCarousel
            className='owl-theme'
            loop
            items={3}
            dots
            nav>
                
                {

                }
                
            </OwlCarousel>
            
        </div>
    );
};

export default Try;