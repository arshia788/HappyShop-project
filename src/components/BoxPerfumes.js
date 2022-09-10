import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core';


// context
import { ItemProvider } from '../context/ItemContextProvider';

// function
import { filterBoxPerfumes } from '../helper/function';

const BoxPerfumes = () => {
    
    const {items}= useContext(ItemProvider)

    const boxDiorTomford=filterBoxPerfumes(items)
    console.log(boxDiorTomford)

    return (
        <div>
            
        </div>
    );
};

export default BoxPerfumes;