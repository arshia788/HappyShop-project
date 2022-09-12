import React, {createContext, useReducer} from 'react';

const initialState={
    addItems:[],
    totalItems:0,
}

const sumItems=items=>{
    const itemsCounter= items.reduce((total, product)=> total + product.qty, 0)

    return{itemsCounter}
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
                ...sumItems(state.addItems)
            }
        case "remove":
            const filterd = state.addItems.filter((item)=> item.id !== action.payload.id)
            return{
                ...state, addItems:[...filterd],
                ...sumItems(state.addItems)
            }
        
        case "increase":
            const indexI= state.addItems.findIndex((item)=> item.id === action.payload.id)
            state.addItems[indexI].qty++;
            return {...state , ...sumItems(state.addItems)}
        
        
        case "decrease":
            const indexB= state.addItems.findIndex((item)=> item.id === action.payload.id)
            state.addItems[indexB].qty--;
            return {...state, ...sumItems(state.addItems)}

        default:
            return state
    }
}


export const ContextProvider= createContext()

const ItemContextProvider = ({children}) => {

    const [state, dispatch]=useReducer(reducer, initialState);
    console.log(state)

    return (
        <div>
            <ContextProvider.Provider value={{state, dispatch}}>
                {children}
            </ContextProvider.Provider>
        </div>
    );
};

export default ItemContextProvider;