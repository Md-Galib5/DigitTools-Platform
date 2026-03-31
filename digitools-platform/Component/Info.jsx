import React from 'react';

const Info = () => {
    return (
        <div className=" bg-[#4F39F6] px-5 py-8 text-amber-50 mb-5">
            <div className="w-9/12 mx-auto grid grid-cols-1 md:grid-cols-3">
            <div className="px-8 py-8 text-center">
                <div className="border-b md:border-b-0 md:border-r border-white">
                <h1 className="font-semibold text-5xl mb-4">50K+</h1>
                <p className="text-xl">Active Users</p>
                </div>
            </div>
            <div className="px-8 py-8 text-center">
                <div className="border-b md:border-b-0 md:border-r border-white">
                <h1 className="font-semibold text-5xl mb-4">200+</h1>
                <p className="text-xl">Premium Tools</p>
                </div>
            </div>
            <div className="px-8 py-8 text-center">
                <h1 className="font-semibold text-5xl mb-4">4.9</h1>
                <p className="text-xl">Rating</p>
            </div>
            </div>
        </div>
    );
};

export default Info;