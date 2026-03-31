import React, { use } from 'react';
import AvailableCard from './AvailableCard/AvailableCard';

const Card = ({productPromise}) => {
    const datas = use(productPromise);
    console.log(datas);
    return (
        <div>
            <AvailableCard datas = {datas}/>
        </div>
    );
};

export default Card;