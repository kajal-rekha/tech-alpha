import { currencyFormatter } from "../utilities/currencyFormatter";

const Card = ({ product }) => {
  return (
    <div className="product flex flex-col gap-2 bg-white shadow-md rounded-xl overflow-hidden hover:shadow-2xl duration-300">
      <div className="img">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="texts flex flex-col gap-2 px-5 pb-5">
        <span className="category-tag uppercase text-xs font-semibold tracking-widest text-teal-500">
          {product.category}
        </span>
        <h3 className="title  text-xl font-medium h-[5.25rem]">
          {product.name}
        </h3>
        <p className="details text-gray-500 h-[6rem]"> {product.description}</p>
        <div className="flex justify-between items-center">
          <span className="price text-xl font-medium text-rose-500">
            {currencyFormatter(product.price)}
          </span>
          <button className="uppercase bg-violet-500 text-violet-50 font-medium py-3 px-8 rounded-md hover:bg-orange-500 hover:text-orange-50 duration-300 shadow-lg shadow-violet-300 hover:shadow-orange-300">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
