import React from "react";
import {useDispatch} from "react-redux"
import { addToCart } from "../../store/slice/CartSlice";

const ProductTitle = ({ item }) => {

  const dispatch = useDispatch()

  const handleAddToCart = () => {
      dispatch(addToCart(item))
  }
  return (
    <div className="group flex flex-col items-center border-2 border-red-900 gap-3 p-4 h-[360px] mt-10 ml-5 rounded-xl">
      <div className="h-[180px]">
        <img
          src={item?.image}
          alt={item.title}
          className="object-cover h-full w-full"
        />
      </div>
      <div>
        <h1 className="w-40 truncate mt-3 text-gray-700 font-bold text-lg">
          {item?.title}
        </h1>
      </div>
      <div className="flex items-center justify-center w-full mt-5">
        <button onClick={handleAddToCart} className="bg-red-950 text-white border-2 rounded-lg font-bold p-4">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductTitle;
