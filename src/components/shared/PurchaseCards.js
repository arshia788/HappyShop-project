import React from 'react';

const PurchaseCards = ({data}) => {
    return (
        <div>
            <img src={data.image} style={{width:"100px"}}/>
        </div>
    );
};

export default PurchaseCards;