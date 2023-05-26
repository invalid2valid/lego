import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Update = () => {
  const notify = () => toast("Item Updated");

  const { id } = useParams();
  const [toy, setToy] = useState({});

  useEffect(() => {
    fetch(`https://lego-bego-server-invalid2valid.vercel.app/singletoy/${id}`)
      .then((res) => res.json())
      .then((data) => setToy(data));
  }, []);
  console.log(id);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const obj = {
      price,
      quantity,
      description,
    };
    console.log(obj);

    fetch(`https://lego-bego-server-invalid2valid.vercel.app/update/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price, quantity, description }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data, "update fetch"));
  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-[#F1F6F9] p-10 rounded-lg md:w-3/5 shadow-lg"
      >
        <div className="my-5">
          <label className="text-lg font-semibold p-2">Toy Price:</label>
          <input
            className="h-10 w-full m-2 p-2"
            name="price"
            type="number"
            defaultValue={toy.price}
            required
          />
        </div>
        <div className="my-5">
          <label className="text-lg font-semibold p-2">Quantity:</label>
          <input
            className="h-10 w-full m-2 p-2"
            name="quantity"
            type="number"
            defaultValue={toy.quantity}
            required
          />
        </div>
        <div className="my-5">
          <label className="text-lg font-semibold p-2">Description:</label>
          <input
            className="h-10 w-full m-2 p-2"
            name="description"
            defaultValue={toy.description}
            type="text"
            required
          />
        </div>
        {/* <div className="my-5">
          <label className="text-lg font-semibold p-2">Category:</label>
          <input
            className="h-10 w-full m-2 p-2"
            name="category"
            type="text"
            required
          />
        </div> */}

        <input
          onClick={notify}
          className="bg-white w-full mx-2 rounded-sm p-2"
          type="submit"
        />
        <ToastContainer />
      </form>
    </div>
  );
};

export default Update;
