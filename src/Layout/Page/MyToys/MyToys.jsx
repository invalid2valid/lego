import React, { useContext, useEffect, useState } from "react";
import MyToyCard from "./MyToyCard";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../Sheard/Context/AuthContext";
const notify = () => toast("Item Deleted");

const MyToys = () => {
  const [toys, setToys] = useState([]);
  const [control, setControl] = useState(true);
  const [selectedOption, setSelectedOption] = useState("");
  const [sort, setSort] = useState(1);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(
      `https://lego-bego-server-invalid2valid.vercel.app/mytoy?email=${user?.email}&short=${sort}`
    )
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [control, sort, user]);

  const deleteHandel = (id) => {
    fetch(`https://lego-bego-server-invalid2valid.vercel.app/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => (setControl(!control), console.log(data)));
  };

  const handleChange = (event) => {
    setSelectedOption(event.target.value);

    if (selectedOption == "Price: High to low") {
      setSort(1);
    } else {
      setSort(-1);
    }
    console.log(sort);
  };

  console.log(toys);
  return (
    <div>
      <div>
        <select
          value={selectedOption}
          onChange={handleChange}
          className="select w-full "
        >
          <option>Price: Low to high </option>
          <option>Price: High to low</option>
        </select>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Seller</th>
              <th>Description</th>
              <th>Details</th>
              <th>Button</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {toys?.map((toy) => (
              <MyToyCard
                key={toy._id}
                toy={toy}
                deleteHandel={deleteHandel}
              ></MyToyCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
