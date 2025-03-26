import React from "react";
import CartPreview from "../Components/CartItems/CartPreview";

const Cart = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center py-7">Your Shopping Cart</h1>
      <CartPreview />
    </div>
  );
};

export default Cart;