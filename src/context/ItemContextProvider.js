import React, {createContext, useReducer} from 'react';

const initialState={
    addItems:[],
    itemsCounter:0,
    total:0,
    checkout:false
}

const sumItems = items=>{
    const itemsCounter = items.reduce((total, product)=> total + product.qty, 0 );
    const total= items.reduce((total, product)=> total + product.qty* product.price, 0);
    return {itemsCounter, total}
}



const reducer=(state, action)=>{


    switch(action.type){

        case "add-item":
            if(!state.addItems.find((item)=> item.id === action.payload.id)){
                state.addItems.push({
                    ...action.payload,
                    qty:1
                })
            }
            return{
                ...state,
                addItems:[...state.addItems],
                ...sumItems(state.addItems),
    checkout:false

            }
        case "remove":
            const filterd = state.addItems.filter((item)=> item.id !== action.payload.id)
            return{
                ...state, 
                addItems:[...filterd], ...sumItems(filterd),
    checkout:false

            }
        
        case "increase":
            const indexI= state.addItems.findIndex((item)=> item.id === action.payload.id)
            state.addItems[indexI].qty++;
            return {...state ,  ...sumItems(state.addItems) , 
    checkout:false
            
            }
        
        
        case "decrease":
            const indexB = state.addItems.findIndex((item)=> item.id === action.payload.id)
            state.addItems[indexB].qty--;
            return {...state, ...sumItems(state.addItems),
    checkout:false
            
            }

        case "checkout":
            return{
                addItems:[],
                itemsCounter:0,
                total:0,
                checkout:true
            }

        case "clear":
            return{
                addItems:[],
                itemsCounter:0,
                total:0,
                checkout:false
            }

        default:
            return state
    }
}


export const ContextProvider= createContext()

const ItemContextProvider = ({children}) => {

    const [state, dispatch]=useReducer(reducer, initialState);

    return (
        <div>
            <ContextProvider.Provider value={{state, dispatch}}>
                {children}
            </ContextProvider.Provider>
        </div>
    );
};

export default ItemContextProvider;