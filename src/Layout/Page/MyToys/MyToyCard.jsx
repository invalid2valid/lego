import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const MyToyCard = ({ toy, deleteHandel }) => {
  const notify = () => toast("Item Deleted");
  //   const deleteHandel = () => {
  //     fetch(`https://lego-bego-server-invalid2valid.vercel.app/delete/${toy._id}`, {
  //       method: "DELETE",
  //     })
  //       .then((res) => res.json())
  //       .then((data) => console.log(data));
  //     setControl(!control);
  //   };
  const funDelete = () => {
    const confirmed = window.confirm("Are you sure to delete?");
    if (confirmed) {
      deleteHandel(toy._id);
      notify();
    } else {
      console.log("not deleted");
    }
  };

  return (
    <>
      {" "}
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={toy.image} alt="image" />
              </div>
            </div>
            <div>
              <div className="font-bold">{toy.name}</div>
              <div className="text-sm opacity-50">{toy.category}</div>
            </div>
          </div>
        </td>
        <td>
          {toy.sname}
          <br />
          <span className="badge badge-ghost badge-sm">{toy.email}</span>
        </td>
        <td>{toy.description}</td>
        <td>
          Price: ${toy.price} <br /> Rating: {toy.rating} <br /> Quantity:{" "}
          {toy.quantity}{" "}
        </td>
        <th>
          <Link to={`/update/${toy._id}`} className="btn btn-ghost btn-xs">
            Update
          </Link>
          <button onClick={funDelete} className="btn btn-ghost btn-xs">
            Delete
          </button>
          <ToastContainer />
        </th>
      </tr>
    </>
  );
};

export default MyToyCard;
