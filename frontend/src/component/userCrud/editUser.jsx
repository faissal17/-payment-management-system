import React, { useState } from "react";
import { editUser } from "../../Api/user.api";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
function updateUser() {
  const navigate = useNavigate();
  const { id } = useParams();
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
      const response = await editUser(id, clients);
      console.log(response);

      Swal.fire("Success!", "User has been updated.", "success").then(() => {
        navigate("/Client");
      });
    } catch (error) {
      console.error("Error udpating User:", error);
      Swal.fire("Error", "Failed to create the User.", "error");
    }
  };
  return (
    <React.Fragment>
      <div className="flex justify-center items-center mt-2">
        <form
          className="max-w-xl m-4 p-10 bg-white rounded shadow-2xl"
          onSubmit={handleSubmit}
        >
          <p className="text-gray-800 font-bold text-2xl">update Client</p>
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
              className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
              type="password"
              value={clients.password}
              onChange={handleChange}
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
export default updateUser;
