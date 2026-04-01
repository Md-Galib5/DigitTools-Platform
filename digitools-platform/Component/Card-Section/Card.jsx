import React, { use } from 'react';

import ModelHeader from './ModelHeader';


const Card = ({productPromise}) => {
    const datas = use(productPromise);
    console.log(datas);
    return (
        <div>
            <ModelHeader datas = {datas}/>
        </div>
    );
};

export default Card;