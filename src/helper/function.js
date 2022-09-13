import { data } from "../data";


const headPhones=(items)=>{
    const filterHeadphones= items.filter((product)=> product.category === "headphone")
    return filterHeadphones
}

const discountsFilter=(items)=>{
    const filterDis = items.filter((product)=> product.type === 'discount')
    return filterDis
}

const splitNumber=(number)=>{
    const spilNumber= Number(number.toFixed(3)).toLocaleString() + ' $'
    return spilNumber
}

const diorFilter=(items)=>{
    const filterPerfum= items.filter((product)=> product.name === "dior sauvage")
    return filterPerfum
}


const perfumeFilter=(items)=>{
    const prefumeFil= items.filter((product)=> product.category === "perfume")
    return prefumeFil
}


const filterBoxPerfumes=(items)=>{
    const box = items.filter((product)=> product.name ==='tomford oudwood' || 
    product.name === 'lalique encre noire' || product.name === 'Creed-aventus'||product.name === 'Mont Blanc Legend'  )
    return box
}

// inja to omadi in items ro gerefti va gofti ke on item discunot bod bia true ro return bedeh
// chon onvar mikhay shart bezari ke true shod price va disprice biad agar na faghat price biad 
// chon hame ke discount ro nadaran.
const findTag = (items)=>{
    if(items === 'discount'){
        return true
    }else{
        return false
    }
}

const inAddItems=(state, data)=>{
    const indexA = !!state.addItems.find((product)=> product.id === data.id)
    return indexA
}


const qtyCheck=(state, data)=>{
    const indexC = state.addItems.findIndex((product)=> product.id === data.id)
    
    if(indexC === -1){
        return false
    }else{
        return state.addItems[indexC].qty
    }
}


const itemQty=(state, data)=>{
    const getItem = state.addItems.findIndex((product)=> product.id === data.id)

    if(getItem === -1){
        return false
    }
    else{
        return state.addItems[getItem].qty
    }
}

const findThrePic= (items, data)=>{
    const findpic= items.filter((product)=> product.category === data.category)
    const [a, b]=findpic
    const list= [a, b];
    return list
}







export {headPhones, discountsFilter,  qtyCheck, itemQty,
    splitNumber, diorFilter, perfumeFilter, 
    filterBoxPerfumes, findTag, inAddItems, findThrePic

}

