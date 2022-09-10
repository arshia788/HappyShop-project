
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




export {headPhones, discountsFilter, splitNumber, diorFilter, perfumeFilter}

