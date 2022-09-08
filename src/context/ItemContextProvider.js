import React, {useState, createContext} from 'react';


export const ItemProvider=createContext()

const ItemContextProvider = ({children}) => {

    const [items, setItems]=useState()

    return (
        <div>
            <ItemProvider.Provider>
                {children}
            </ItemProvider.Provider>
        </div>
    );
};

export default ItemContextProvider;