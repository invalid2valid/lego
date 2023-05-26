import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Sheard/Context/AuthContext";

const Login = () => {
  const loacation = useLocation();
  const navigate = useNavigate();
  const from = loacation.state?.from?.pathname || "/";
  const [error, setError] = useState("");
  const { signIn, googleSignIn } = useContext(AuthContext);

  const googleLogin = () => {
    googleSignIn();
    navigate(from);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        form.reset();
        setError(error.message);
      });

    console.log(email, password);
    form.reset();
  };
  return (
    <div className="flex flex-col justify-center items-center h-[80vh]">
      <form
        onSubmit={handleSubmit}
        className=" shadow-lg flex flex-col justify-center items-center gap-3 m-10 bg-[#F1F6F9] py-10 px-5 rounded-lg w-[300px] h-[400px]"
      >
        <h2 className="text-3xl font-bold text-[#212A3E] m-2">Log in:</h2>

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

        <p className="text-center">
          Do not have an account?{" "}
          <Link to={"/signup"} className="text-red-600">
            Create One
          </Link>
        </p>
        <input
          className="text-lg p-2  text-[#394867] bg-white w-28 rounded-md"
          type="submit"
          value={"submit"}
        />
        <div
          onClick={googleLogin}
          className="text-lg p-2  text-[#394867] bg-white  rounded-md"
        >
          Login With Google
        </div>
      </form>
      <p className="text-center text-red-600">{error}</p>
    </div>
  );
};

export default Login;
