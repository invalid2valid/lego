import React, { useContext } from "react";
import Rating from "react-rating";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../Sheard/Context/AuthContext";
import { Link } from "react-router-dom";
const HomeCatCard = ({ toy }) => {
  const { user } = useContext(AuthContext);

  const notify = () => toast("Please Login first.");
  const rating = toy.rating;
  const firstExample = {
    size: 30,
    value: 4.5,
    edit: false,
  };
  //   console.log(toy);
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={toy.image} alt={toy.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {toy.name}
          <div className="badge badge-secondary">{toy.category}</div>
        </h2>
        <p> Price: $ {toy.price}</p>
        <p className="flex justify-start gap-2 ">
          {" "}
          <span>Rating:</span> <Rating initialRating={toy.rating} readonly />
        </p>
        <Link
          to={`http://localhost:5173/singletoy/${toy._id}`}
          onClick={notify}
          className="font-semibold badge-secondary rounded-md p-2 text-center"
        >
          View Details
        </Link>
        {!user && <ToastContainer />}
      </div>
    </div>
  );
};

export default HomeCatCard;
