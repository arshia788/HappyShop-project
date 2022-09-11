import React, {createContext, useReducer} from 'react';

const initialState={
    addItems:[],
    totalItems:0
}

const reducer=(state, action)=>{
    switch(action.type){

        case "add-cart":
            if(!state.addItems.find((item)=> item.id === action.payload.id)){
                state.addItems.push({
                    ...action.payload,
                    qty:1
                })
            }
            return{
                ...state,
                addItems:[...state.addItems]
            }
        case "remove":
            const filterd = state.addItems.filter((item)=> item.id !== action.payload.id)
            return{
                ...state, addItems:[...filterd]
            }
        
        case "increase":
            const indexI= state.addItems.findIndex((item)=> item.id === action.payload.id)
            state.addItems[indexI].qty++;
            return {...state}
        
        
        case "decrease":
            const indexB= state.addItems.findIndex((item)=> item.id === action.payload.id)
            state.addItems[indexB].qty++;
            return {...state}

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