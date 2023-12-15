import React, { useState } from "react";
import { createApartement } from "../../Api/apartement.api";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function addApartement() {
  const navigate = useNavigate();
  const [apartment, setApartment] = useState({
    name: "",
    description: "",
    image: "",
    room: "",
    floor: "",
    city: "",
    adress: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setApartment((prevApartment) => ({ ...prevApartment, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createApartement(apartment);
      console.log(response);

      if (response) {
        Swal.fire("Success!", "Apartment has been created.", "success");
      } else {
        Swal.fire("Error", "Failed to create the Apartment.", "error");
      }
    } catch (error) {
      console.error("Error creating Apartment:", error);
      Swal.fire("Error", "Failed to create the Apartment.", "error");
    }
  };
  return (
    <React.Fragment>
      <div className="flex justify-center items-center mt-2">
        <form
          className="max-w-xl m-4 p-10 bg-white rounded shadow-2xl"
          onSubmit={handleSubmit}
        >
          <p className="text-gray-800 font-bold text-2xl">Add Apartement</p>
          <div className="mt-2 flex">
            <div className="w-full pr-2">
              <label className="block text-md font-semibold text-gray-800 mb-2">
                name
              </label>
              <input
                className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
                type="text"
                name="name"
                id="name"
                value={apartment.name}
                onChange={handleChange}
                placeholder="name of the apartement"
              />
            </div>
          </div>
          <div className="mt-2">
            <label className="block text-md font-semibold text-gray-800 mb-2">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              value={apartment.description}
              onChange={handleChange}
              className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
              type="text"
              placeholder="description"
            />
          </div>
          {/* <div className="flex mt-2">
            <div className="w-full pr-2">
              <label className="block text-md font-semibold text-gray-800 mb-2">
                image
              </label>
              <input
                name="image"
                id="image"
                value={apartment.image}
                onChange={handleChange}
                className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
                type="file"
                placeholder="image"
              />
            </div>
          </div> */}

          <div className="flex mt-2">
            <div className="w-1/2 pr-2">
              <label className="block text-md font-semibold text-gray-800 mb-2">
                Rooms
              </label>
              <input
                name="room"
                id="room"
                value={apartment.room}
                onChange={handleChange}
                className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
                type="number"
                placeholder="room"
              />
            </div>
            <div className="w-1/2 pl-2">
              <label className="block text-md font-semibold text-gray-800 mb-2">
                Floor
              </label>
              <input
                name="floor"
                id="floor"
                value={apartment.floor}
                onChange={handleChange}
                className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
                type="number"
                placeholder="Floor"
              />
            </div>
          </div>
          <div className=" mt-2">
            <label className="block text-md font-semibold text-gray-800 mb-2">
              city
            </label>
            <input
              name="city"
              id="city"
              value={apartment.city}
              onChange={handleChange}
              className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
              type="text"
              placeholder="city"
            />
          </div>
          <div className=" mt-2">
            <label className="block text-md font-semibold text-gray-800 mb-2">
              adress
            </label>
            <input
              name="adress"
              id="adress"
              value={apartment.adress}
              onChange={handleChange}
              className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
              type="text"
              placeholder="adress"
            />
          </div>
          <div className="mt-6"></div>
          <button className="w-full px-6 py-2 text-white font-semibold tracking-wider bg-gray-900 rounded">
            Checkout
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}
export default addApartement;
