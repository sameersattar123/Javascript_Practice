import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/slice/CartSlice";

const CartTitle = ({ item }) => {
  const dispatch = useDispatch();
  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item.id));
  };
  return (
    <div className="flex items-center p-5 justify-between bg-red-500 mt-2 mb-2 rounded-xl">
      <div className="flex p-3">
        <img src={item?.image} className="h-28 rounded-lg" alt={item?.title} />

        <div className="ml-10 self-start space-y-5">
          <h1 className="text-xl text-white font-bold">{item?.tile}</h1>
          <p className="text-white font-extrabold">{item?.price}</p>
        </div>
      </div>
      <button
        className="bg-red-950 text-white border-2 rounded-lg font-bold p-4"
        onClick={handleRemoveFromCart}
      >
        Remove From Cart
      </button>
    </div>
  );
};

export default CartTitle;
