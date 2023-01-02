import { useState } from "react";
import { currencyFormatter } from "../utilities/currencyFormatter";

const data = [
  {
    id: 1,
    name: "Blink Mini – Compact indoor plug-in smart security camera",
    description:
      "Monitor the inside of your home day and night with our 1080P HD indoor plug-in smart security camera",
    price: 64.99,
    image:
      "https://res.cloudinary.com/dy28teazb/image/upload/v1668172648/React%20Shopping/Products/81-585-013-01_a04wkd.jpg",
    category: "Camera",
  },
  {
    id: 2,
    name: "Vlogging Camera, 4K Digital Camera for YouTube with WiFi",
    description:
      "It's super suitable for the 'happy snapper' who just hope to point and shoot to take good quality images",
    price: 109.99,
    image:
      "https://res.cloudinary.com/dy28teazb/image/upload/v1668172649/React%20Shopping/Products/81pgsjFGpmL_qundpd.jpg",
    category: "Camera",
  },
  {
    id: 3,
    name: "SAMSUNG 55-Inch Class Crystal 4K UHD AU8000 Series HDR",
    description:
      "Witness millions of shades of color through powerful Dynamic Crystal technology",
    price: 497.99,
    image:
      "https://res.cloudinary.com/dy28teazb/image/upload/v1668172649/React%20Shopping/Products/cl-uhd-tu7090-un50tu7090gxzs-rperspective-285965740_duusj5.png",
    category: "TV",
  },
];

const Cart = () => {
  const [count, setCount] = useState(1);

  const handleIncrease = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrease = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div className="cart-section container mx-auto py-10">
      <h2 className="section-title uppercase text-2xl font-bold space-font text-center mb-10">
        Your cart
      </h2>
      <div className="cart-container ">
        <div className="products-headlines grid grid-cols-5 gap-10 border-b pb-3 uppercase font-medium">
          <div className="col-product col-span-2">Products</div>
          <div className="col-unit-price">Unit Price</div>
          <div className="col-quantity">Quantity</div>
          <div className="col-total-price ml-auto">Total Price</div>
        </div>

        <div className="products flex flex-col">
          {data.map((product) => (
            <div className="product grid grid-cols-5 gap-10 border-b mt-10 pb-5">
              <div className="left flex col-span-2 gap-5">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-32 w-32 object-cover"
                />
                <div className="details flex flex-col gap-3 items-start">
                  <span>{product.name}</span>
                  <button className="uppercase text-gray-400 hover:text-rose-500 duration-300">
                    Remove
                  </button>
                </div>
              </div>
              <div className="unit-price">
                {currencyFormatter(product.price)}
              </div>
              <div className="counter flex">
                <button
                  onClick={() => handleDecrease()}
                  className="h-10 w-10 bg-gray-100 border border-gray-300 active:bg-gray-700"
                >
                  -
                </button>
                <span className="h-10 w-10 bg-gray-100 flex justify-center items-center border border-gray-300">
                  {count}
                </span>
                <button
                  onClick={() => handleIncrease()}
                  className="h-10 w-10 bg-gray-100 border border-gray-300 active:bg-gray-700"
                >
                  +
                </button>
              </div>
              <div className="total-price ml-auto">
                {currencyFormatter(product.price)}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="cart-lower flex justify-between items-start py-10">
        <button className="clear-btn uppercase border py-3 px-8 hover:bg-rose-200 hover:text-rose-600 font-medium hover:border-rose-200 duration-300">
          Clear cart
        </button>
        <div className="flex flex-col items-start gap-2">
          <div className="top flex justify-between w-full text-2xl font-medium">
            <span className="text-sky-500">Subtotal</span>
            <span className="text-rose-500">$300</span>
          </div>
          <p className="text-gray-400">
            Taxes and shipping costs are calculated at the checkout
          </p>
          <button className="checkout bg-sky-500 w-full py-3 uppercase font-medium text-sky-50 tracking-widest hover:bg-sky-600 duration-300">
            Chechout
          </button>
          <button className="continue uppercase text-sky-500 font-medium">
            {" "}
            ⬅ Continue shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
