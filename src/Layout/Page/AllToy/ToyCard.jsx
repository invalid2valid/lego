import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const ToyCard = ({ toy }) => {
  // console.log(toy);
  // console.log(sname);

  return (
    <>
      <tr>
        <td>{toy.sname}</td>
        <td>{toy.name}</td>
        <td>{toy.category}</td>
        <td>$ {toy.price}</td>
        <td>$ {toy.quantity}</td>
        <th>
          <Link
            to={`http://localhost:5173/singletoy/${toy._id}`}
            className="btn btn-ghost btn-xs"
          >
            Details
          </Link>
        </th>
      </tr>
    </>
  );
};

export default ToyCard;
