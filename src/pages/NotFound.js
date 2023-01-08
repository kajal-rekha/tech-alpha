import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container mx-auto mt-20 text-center">
      <img
        className="img h-46 w-64 mx-auto"
        src="https://cdni.iconscout.com/illustration/premium/thumb/404-error-alert-5759424-4816343.png"
        alt=""
      />
      <p className="text-4xl mb-4 font-semibold text-rose-400">
        Page not found
      </p>
      <Link to="/">
        <button className="bg-violet-800 text-gray-50 px-6 py-3 uppercase tracking-widest font-medium rounded-lg hover:bg-violet-500 duration-300">
          Go to home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
