import { useContext } from "react";
import { Navigate } from "react-router";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../Layout/Sheard/Context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[80vh]">
        <div className="text-4xl flex items-center">
          {" "}
          L
          <div className=" h-16 w-16 animate-spin">
            <img
              className=""
              src="https://png.pngtree.com/png-clipart/20220823/original/pngtree-loading-icon-dot-ring-vector-transparent-png-image_8462422.png"
              alt=""
            />
          </div>
          ADING
        </div>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
