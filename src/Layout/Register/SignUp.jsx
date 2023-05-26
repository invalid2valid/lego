import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Sheard/Context/AuthContext";

const SignUp = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const loacation = useLocation();
  const { createUser, photoName } = useContext(AuthContext);
  const from = loacation.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const url = form.url.value;
    console.log(name, email, password, url);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        photoName(name, url);
        navigate(from);
      })
      .catch((error) => {
        setError(error.message);
      });

    form.reset();
  };

  // console.log(createUser);

  return (
    <div className="flex flex-col justify-center items-center h-[80vh]">
      <form
        onSubmit={handleSubmit}
        className=" shadow-lg flex flex-col justify-center items-center gap-3 m-10 bg-[#F1F6F9] py-10 px-5 rounded-lg w-[300px] h-[440px]"
      >
        <h2 className="text-3xl font-bold text-[#212A3E] m-2">Sign Up:</h2>
        <input
          className="text-lg p-2 rounded-sm text-[#394867]"
          required
          type="text"
          placeholder="Name:"
          name="name"
        />
        <input
          className="text-lg p-2 rounded-sm text-[#394867]"
          required
          type="email"
          placeholder="email:"
          name="email"
        />
        <input
          className="text-lg p-2 rounded-sm text-[#394867]"
          required
          type="password"
          placeholder="password:"
          name="password"
        />
        <input
          className="text-lg p-2 rounded-sm text-[#394867]"
          required
          type="url"
          placeholder="Photo Url:"
          name="url"
        />
        <p className="text-center">
          Have an account?{" "}
          <Link to={"/login"} className="text-red-600">
            Log in.
          </Link>
        </p>
        <input
          className="text-lg p-2  text-[#394867] bg-white w-28 rounded-md"
          type="submit"
          value={"submit"}
        />
      </form>
      <p className="text-center text-red-600">{error}</p>
    </div>
  );
};

export default SignUp;
