import React, { useState } from 'react';
import AvailableCard from './AvailableCard/AvailableCard';
import SelectionCard from './SelectionCard/SelectionCard';

const ModelHeader = ({datas}) => {
    const [selectedType,setselectedType] = useState("available");
    const [isClicked,setisClicked] = useState([]);
    return (
        <div className='mb-10 space-y-3'>
             <div className='section-header text-center space-y-4'>
                <div className='inline-flex gap-1 items-center justify-center  text-uppercase'></div>
                <h1 className='text-5xl font-bold'>Premium Digital Tools</h1>
                <p className='text-base w-11/12 mx-auto text-gray-500'>Choose from our curated collection of premium digital products designed<br />to boost your productivity and creativity.</p>
            </div>

            <div className='flex items-center justify-center '>
                <div className='flex gap-2 w-62 rounded-full'>
                <button 
                onClick={() =>setselectedType("available")}
                className={`btn ${selectedType === "available" ? "bg-[#5537f7] text-white" : "bg-[#ffffff] text-black"}  rounded-full text-lg`}>Products</button>
                <button
                 onClick={() =>setselectedType("selected")} 
                className={`btn ${selectedType === "selected" ? "bg-[#5537f7] text-white" : "bg-[#ffffff] text-black"} rounded-full text-lg`}>Cart ({isClicked.length})</button>
                </div>
            </div>
            {selectedType === "available" ? (<AvailableCard datas = {datas} isClicked={isClicked} setisClicked={setisClicked}/>) : (<SelectionCard  datas={datas} isClicked={isClicked} setisClicked={setisClicked}/>)}
        </div>
    );
};

export default ModelHeader;