import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../features/products/cartSlice";
import { currencyFormatter } from "../utilities/currencyFormatter";

const Card = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addtoCartHandler = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  return (
    <div
      className="product flex flex-col gap-2 bg-white shadow-md rounded-xl overflow-hidden hover:shadow-2xl duration-300"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="img">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover hover:scale-125 duration-500"
        />
      </div>
      <div className="texts flex flex-col gap-2 px-5 pb-5">
        <span
          className="category-tag uppercase text-xs font-semibold tracking-widest text-teal-500"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {product.category}
        </span>
        <h3
          className="title  text-xl font-medium h-[5.25rem]"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          {product.name}
        </h3>
        <p
          className="details text-gray-500 h-[6rem]"
          data-aos="fade-up"
          data-aos-duration="1400"
        >
          {" "}
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          <span
            className="price text-xl font-medium text-rose-500"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            {currencyFormatter(product.price)}
          </span>
          <button
            onClick={() => addtoCartHandler(product)}
            className="uppercase bg-violet-500 text-violet-50 font-medium py-3 px-8 rounded-md hover:bg-orange-500 hover:text-orange-50 duration-300 shadow-lg shadow-violet-300 hover:shadow-orange-300"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
