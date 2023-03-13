import React from "react";
import { useSelector } from "react-redux";
import Cart from "./Cart";

const AddToCart = () => {
  const { cart, totalAmount } = useSelector((state) => state.cart);
  // console.log(totalAmount);
  // console.log(cart)
  return (
    <>
      <div className="flex flex-col gap-2">
        {cart?.map((item) => (
          <Cart key={item.id} item={item} />
        ))}
      </div>
      {cart.length > 0 ? (
        <div className="mt-10 max-w-[1024px] mx-auto">
          <hr className="bg-slate-700 h-[2px]" />
          <div className="flex justify-between text-slate-600 p-7">
            <h1 className="text-xl">Total</h1>
            <p className="text-xl">{totalAmount}</p>
          </div>
        </div>
      ) : (
        <div className="text-xl text-slate-600 text-center h-screen mt-10">
          There is no item in this cart
        </div>
      )}
    </>
  );
};

export default AddToCart;
