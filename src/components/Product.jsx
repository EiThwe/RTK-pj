import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../feature/cartSlice";

const Product = ({ product }) => {
  const { title, image, price } = product;
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const isExist = cart?.find((item) => item.id === product.id)
  return (
    <div className="card w-72 p-5 bg-white rounded-md shadow-2xl">
      <figure>
        <img src={image} className="h-32 mx-auto" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title truncate text-slate-500">{title}</h2>
        <p className="text-xl text-slate-400">${price}</p>
        <div className=" flex justify-between mt-3">
          {isExist ? (
            <button className="p-2 border rounded-md bg-slate-800 w-1/2 text-slate-300">
              Added
            </button>
          ) : (
            <button
              className="p-2 border rounded-md bg-slate-500 w-1/2 text-slate-300"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </button>
          )}
          <button className="p-2 flex justify-between items-center gap-3 text-lg text-slate-600">
            Detail
            <FaArrowRight className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
