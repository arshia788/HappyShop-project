
const headPhones=(items)=>{
    const filterHeadphones= items.filter((product)=> product.category === "headphone")
    return filterHeadphones
}

const discountsFilter=(items)=>{
    const filterDis = items.filter((product)=> product.type === 'discount')
    return filterDis
}

const splitNumber=(number)=>{
    const spilNumber= Number(number.toFixed(3)).toLocaleString() + '$'
    return spilNumber
}




export {headPhones, discountsFilter, splitNumber}

