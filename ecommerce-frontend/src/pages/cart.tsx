import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/cart-item";
import { Link } from "react-router-dom";


const subtotal = 500000;
const shippingCharges = 500;
const tax = Math.round(subtotal * 0.18);
const cartItems = [
  {
    productId: "askjd",
    photo: "https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/61XZQXFQeVL._SX679_.jpg",
    name: "Ipad",
    price: 60000,
    quantity: 4,
    stock: 10,
  }
];
const discount = 400;
const total = 2000000;
const Cart = () => {
  const [couponCode, setCouponCode] = useState<string>("");
  const [isValidCouponCode, setisValidCouponCode] = useState<boolean>(false);
  
  useEffect(() => {

    const timeOutID = setTimeout (() => {
      if(Math.random() > 0.5) setisValidCouponCode(true);
      else setisValidCouponCode(false);
    }, 1000); 
    return() => {
      clearTimeout(timeOutID);
      setisValidCouponCode(false);  
    }
  },[couponCode])

  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? 
          (cartItems.map((i,idx) =>(
          <CartItem key = {idx} cartItem={i}/>)
        )): <h1>No Items Added</h1> }
      </main>
      <aside>
        <p>Subtotal: ₹{subtotal}</p>
        <p>Shipping Charges: ₹{shippingCharges}</p>
        <p>Tax: ₹{tax}</p>
        <p>
          Discount: <em>- ₹{discount}</em>
        </p>
        <p>
          <b>Total: ₹{total}</b>
        </p>

        <input
          type="text"
          placeholder="Coupon Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />

        {couponCode &&
          (isValidCouponCode ? (
            <span className="green">
              ₹{discount} off using the
              <code>{couponCode}</code>
            </span>
          ) : (
            <span className="red">
              Invalid Coupon
              <VscError />
            </span>
          ))}

          {cartItems.length > 0 && <Link to="/shipping">Checkout</Link>}
      </aside>
    </div>
  );
};

export default Cart;
