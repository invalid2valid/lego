import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Sheard/Context/AuthContext";
import { ToastContainer, toast } from "react-toastify";

const AddToys = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState({});
  const [acc, setAcc] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const notify = () => toast("An item added");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const sellerName = from.sellerName.value;
    const email = from.email.value;
    let category = selectedOption;
    const price = from.price.value;
    const rating = from.rating.value;
    const quantity = from.quantity.value;
    const description = from.description.value;
    const image = from.image.value;

    const addData = {
      name: name,
      sname: sellerName,
      email: email,
      category: category,
      price: price,
      rating: rating,
      quantity: quantity,
      description: description,
      image: image,
    };

    fetch(`https://lego-bego-server-invalid2valid.vercel.app/addtoys`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addData),
    })
      .then((res) => res.json())
      .then(notify(), (data) => setAcc(data));

    from.reset();
  };
  <ToastContainer />;
  console.log(acc.acknowledged);
  return (
    <div className=" flex justify-center ">
      <form
        onSubmit={handleSubmit}
        className="bg-[#F1F6F9] p-10 rounded-lg md:w-3/5 shadow-lg"
      >
        <div className="my-5">
          <label className="text-lg font-semibold p-2">Toy Name:</label>
          <input
            className="h-10 w-full m-2 p-2"
            name="name"
            type="text"
            required
          />
        </div>
        <div className="my-5">
          <label className="text-lg font-semibold p-2">Seller Name:</label>
          <input
            className="h-10 w-full m-2 p-2"
            name="sellerName"
            type="text"
            value={user?.displayName}
            required
          />
        </div>
        <div className="my-5">
          <label className="text-lg font-semibold p-2">Email:</label>
          <input
            className="h-10 w-full m-2 p-2"
            name="email"
            value={user?.email}
            type="email"
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
        <div className="my-5">
          <label className="text-lg font-semibold p-2">Category:</label> <br />
          <select
            value={selectedOption}
            onChange={handleChange}
            className="select w-full "
          >
            <option value="" disabled>
              Select an option
            </option>
            <option>DC</option>
            <option>Avatar</option>
            <option>Star Wars</option>
          </select>
        </div>
        <div className="my-5">
          <label className="text-lg font-semibold p-2">Price:</label>
          <input
            className="h-10 w-full m-2 p-2"
            name="price"
            type="number"
            required
          />
        </div>
        <div className="my-5">
          <label className="text-lg font-semibold p-2">Rating:</label>
          <input
            className="h-10 w-full m-2 p-2"
            name="rating"
            min="1"
            max="5"
            type="number"
            required
          />
        </div>
        <div className="my-5">
          <label className="text-lg font-semibold p-2">Quantity:</label>
          <input
            className="h-10 w-full m-2 p-2"
            name="quantity"
            type="number"
            required
          />
        </div>
        <div className="my-5">
          <label className="text-lg font-semibold p-2">Description:</label>
          <textarea
            className="h-10 w-full m-2 p-2"
            name="description"
            type="text"
            required
          />
        </div>
        <div className="my-5">
          <label className="text-lg font-semibold p-2">image:</label>
          <input
            className="h-10 w-full m-2 p-2"
            name="image"
            type="url"
            required
          />
        </div>
        <input
          // onClick={notify}
          className="bg-white w-full mx-2 rounded-sm p-2"
          type="submit"
        />
        <ToastContainer />
      </form>
    </div>
  );
};

export default AddToys;
