import React from 'react';
import { toast } from 'react-toastify';

const SelectionCard = ({isClicked,setisClicked}) => {

    const handleDelete = (item) =>{
        const filteritem = isClicked.filter(selectedItem => selectedItem.name !== item.name);
        toast.error(`${item.name} Remove From The Cart`);
        setisClicked(filteritem); 
    }
    const handleProceed = () =>{
    setisClicked([]);
    toast.success("Thank you! Your cart is now empty.");
    }

    const total = isClicked.reduce((sum,data) => sum + data.price,0);

  return (
    <div className="border border-gray-300 w-9/12 mx-auto rounded-3xl space-y-5">
        <h1 className="text-2xl font-bold mb-4 ml-8 mt-5">Your Cart</h1>

      {isClicked.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-10">
          <span className="text-6xl">🛒</span>
          <p className="text-gray-500 mt-3">Your cart is empty</p>
        </div>
      ) : (
        isClicked.map((data) =>{
        return(
            
            <div>
                <div>
                <div className="w-21/22 mx-auto p-4 mb-2 rounded-lg flex items-center justify-between bg-[#f9fafc] shadow-xs">
             <div className="flex items-center gap-3">
            <div className="bg-white h-12 w-12 rounded-full flex items-center justify-center">
            <img src={data.icon} alt="" />
        </div>

        <div>
         <h2 className="font-bold">{data.name}</h2>
         <p>${data.price}</p>
        </div>
       </div>
        <button onClick={() => handleDelete(data)} className="bg-transparent text-red-500 hover:text-red-700 font-medium">
        Remove
       </button>
       </div>
          </div>
               </div>
             
        )
      })
    )}

   {isClicked.length > 0 && (
        <>
          <div className="flex items-center justify-between w-21/22 mx-auto mb-2">
            <p>Total</p>
            <h2 className="text-xl font-bold">${total.toFixed(2)}</h2>
          </div>
          <div className="w-23/24 mx-auto">
            <button onClick={handleProceed}className="btn btn-primary w-full rounded-full">
              Proceed To Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};
export default SelectionCard;

