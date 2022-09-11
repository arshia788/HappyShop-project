import React, {useState, createContext} from 'react';

import { data } from '../data';

export const ItemProvider=createContext()

const ItemProductProvider = ({children}) => {

    const [items, setItems]=useState(data)

    return (
        <div>
            <ItemProvider.Provider value={{items, setItems}}>
                {children}
            </ItemProvider.Provider>
        </div>
    );
};

export default ItemProductProvider;