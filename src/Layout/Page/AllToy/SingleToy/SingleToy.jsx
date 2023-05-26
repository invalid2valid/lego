import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rating from "react-rating";

const SingleToy = () => {
  const [toy, setToy] = useState({});
  //   const { sname, email } = toy.seller;
  const [loader, setLoader] = useState(true);

  let { id } = useParams();
  console.log(id);
  useEffect(() => {
    fetch(`https://lego-bego-server-invalid2valid.vercel.app/singletoy/${id}`)
      .then((res) => res.json())
      .then((data) => setToy(data));
    setLoader(false);
  }, []);
  console.log(toy);

  if (loader) {
    return <h1>Loader</h1>;
  }

  //   console.log(toy);
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col gap-10 lg:flex-row-reverse">
          <img src={toy.image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{toy.name}</h1>
            <p> Price: $ {toy.price}</p>
            <p>Seller: {toy.sname} </p>
            <p>Seller Email: {toy.email} </p>
            <p>Sub-category: {toy.category}</p>
            <p>Available Quantity: {toy.quantity}</p>
            <p className="flex justify-start gap-2 ">
              {" "}
              <span>Rating:</span>{" "}
              <Rating initialRating={toy.rating} readonly />
            </p>
            <p>{toy.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleToy;
