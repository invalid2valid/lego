import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className=" h-screen w-full flex flex-col justify-center items-center ">
      <img
        className=" rounded-xl shadow-2xl "
        src="https://c1.wallpaperflare.com/preview/286/573/109/error-not-found-404-lego.jpg"
        alt=""
      />

      <Link to={"/"} className="m-10 border-2  px-10 py-4 rounded-lg shadow-lg">
        Back to HOME
      </Link>
    </div>
  );
};

export default ErrorPage;
