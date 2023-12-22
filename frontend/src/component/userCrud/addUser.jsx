import React, { useState } from "react";
import { createUser } from "../../Api/user.api";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Navbar from "../../shared/Navbar";


function addUser() {
  const navigate = useNavigate();
  const [clients, setClients] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setClients((perveClients) => ({ ...perveClients, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createUser(clients);
      console.log(response);

      Swal.fire("Success!", "User has been created.", "success").then(() => {
        navigate("/Client");
      });
    } catch (error) {
      console.error("Error creating User:", error);
      Swal.fire("Error", "Failed to create the User.", "error");
    }
  };

  return (
    <React.Fragment>
      <Navbar/>
      <div className="flex justify-center items-center h-screen">
        <form
          className="max-w-xl m-4 p-10 bg-white rounded shadow-2xl"
          onSubmit={handleSubmit}
        >
          <p className="text-gray-800 font-bold text-2xl">Add Client</p>
          <div className="mt-2 flex w-96">
            <div className="w-full pr-2">
              <label className="block text-md font-semibold text-gray-800 mb-2">
                Name
              </label>
              <input
                className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
                type="text"
                name="name"
                id="name"
                value={clients.name}
                onChange={handleChange}
                placeholder="User Name"
              />
            </div>
          </div>
          <div className=" mt-2">
            <label className="block text-md font-semibold text-gray-800 mb-2">
              Email
            </label>
            <input
              name="email"
              id="email"
              className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
              type="text"
              value={clients.email}
              onChange={handleChange}
              placeholder="User Email"
            />
          </div>
          <div className=" mt-2">
            <label className="block text-md font-semibold text-gray-800 mb-2">
              Password
            </label>
            <input
              name="password"
              id="password"
              value={clients.password}
              onChange={handleChange}
              className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
              type="password"
              placeholder="User Password"
            />
          </div>
          <div className="mt-6"></div>
          <button className="w-full px-6 py-2 text-white font-semibold tracking-wider bg-gray-900 rounded">
            Create
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}
export default addUser;
