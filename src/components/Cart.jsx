import React from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { increaseQuantity, removeFromCart } from "../feature/cartSlice";

const Cart = ({ item }) => {
  const { image, title, price, quantity } = item;
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between w-[1024px] container mx-auto mt-10 shadow-xl p-5 rounded-md">
      <div className="flex justify-between gap-5 items-center">
        <img src={image} className="h-24 w-20" alt="" />
        <div>
          <p className="truncate text-slate-500">{title}...</p>
          <p className="text-xl  text-slate-600">${item.totalPrice}</p>
          <button
            className="text-red-500"
            onClick={() => dispatch(removeFromCart(item))}
          >
            remove
          </button>
        </div>
      </div>
      <div>
        <p
          className="cursor-pointer text-2xl"
          onClick={() => dispatch(increaseQuantity(item))}
        >
          <IoIosArrowUp />
        </p>
        <p className="text-center text-xl">{quantity}</p>
        <p className="cursor-pointer text-2xl">
          <IoIosArrowDown />
        </p>
      </div>
    </div>
  );
};

export default Cart;
