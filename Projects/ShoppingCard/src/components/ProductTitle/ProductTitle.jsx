import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/slice/CartSlice";

const ProductTitle = ({ item }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);
  
  const handleAddToCart = () => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item.id))
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
        <button
          onClick={
            cart.some((product) => product.id == item.id)
              ? handleRemoveFromCart
              : handleAddToCart
          }
          className="bg-red-950 text-white border-2 rounded-lg font-bold p-4"
        >
          {cart.some((product) => product.id == item.id)
            ? "Remove from Cart"
            : "Add To Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductTitle;
