import React,{ useState } from 'react';
import { toast } from 'react-toastify';


const ModelCard = ({data,isClicked,setisClicked}) => {
    const [selected,setselected] = useState(false)
     const isFound = isClicked.find(item => item.id === data.id);

    const handleclicked = () =>{
        setselected(true);

        if(isFound){
            toast.error("Items Already Added");
            return;
        }

        setisClicked([...isClicked,data]);
        toast.success("Iteams Added to Cart")

    }
    return (
        <div className="card mx-auto w-80 sm:w-80 md:w-96 bg-base-100 shadow-md rounded-4xl">
  <div className="card-body">
    <div className="w-full flex justify-end">
    <span
  className={`badge badge-md rounded-full ${
    data.tag === "best seller"
      ? "bg-[#fef3c6] text-amber-600"
      : data.tag === "popular"
      ? "bg-[#e1e7ff] text-purple-700"
      : data.tag === "new"
      ? "bg-[#dbfce7] text-green-600"
      : "bg-gray-300 text-black"
  }`}
>
  {data.tag}
</span>
    </div>
    <div className="bg-white h-15 w-15 rounded-full flex items-center justify-center border-2 border-gray-200">
    <img src={data.icon} alt="icon"></img>
    </div>
    <div className="flex justify-between">
      <h2 className="text-2xl font-bold">{data.name}</h2>
    </div>
    <p>{data.description}</p>
    <span className="text-2xl"><span className="font-bold">${data.price}</span>/<span className="text-md text-gray-400">{data.period}</span></span>
    <ul className="mt-6 flex flex-col gap-2 text-lg">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{data.features[0]}</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{data.features[1]}</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{data.features[2]}</span>
      </li>
    </ul>
    <div className="mt-6">
      <button 
      onClick={handleclicked}
      className={`btn btn-block rounded-full ${selected ? "bg-green-500 text-white" : "btn-primary"}`}>{selected === true ? "Added to cart" : "Buy Now"}</button>
    </div>
  </div>
</div>
    );
};

export default ModelCard;