import React, { useEffect, useState } from "react";
import ToyCard from "./ToyCard";

const AllToy = () => {
  const [toys, setToys] = useState([]);
  const [loader, setLoader] = useState(true);
  const [search, setSearch] = useState("");
  const [triger, setTriger] = useState(false);

  useEffect(() => {
    setLoader(true);
    fetch("https://lego-bego-server-invalid2valid.vercel.app/alltoys")
      .then((res) => res.json())
      .then((data) => setToys(data));

    setLoader(false);
  }, [triger]);

  const handleSearch = () => {
    fetch(`https://lego-bego-server-invalid2valid.vercel.app/search/${search}`)
      .then((res) => res.json())
      .then((data) => setToys(data))
      .catch((err) => {
        console.log(err);
        setTriger(!triger);
      });
    console.log(search);
  };

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  // console.log(toys);
  if (loader) {
    return (
      <p className="text-center text-4xl font-semibold mt-16 mb-10">
        Loading..
      </p>
    );
  }
  return (
    <div className="my-10">
      <h1 className="text-center text-5xl font-semibold mt-16 mb-10 underline">
        All Toys
      </h1>
      <div className="flex justify-center gap-5 m-10">
        <input
          placeholder="Search by name"
          onChange={handleInputChange}
          value={search}
          className="bg-gray-200 p-2 rounded-md"
          type="text"
        />{" "}
        <button onClick={handleSearch} className="bg-gray-200 p-2 rounded-md">
          Search
        </button>
      </div>

      <div>
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((t) => (
              <ToyCard key={t._id} toy={t}></ToyCard>
            ))}
          </tbody>
        </table>
      </div>
      <div></div>

      <div className="grid lg:grid-cols-2 gap-5">
        {/* {toys.map((t) => (
          <ToyCard key={t._id} toy={t}></ToyCard>
        ))} */}
      </div>
    </div>
  );
};

export default AllToy;
