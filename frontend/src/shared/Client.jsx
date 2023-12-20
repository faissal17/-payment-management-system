import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllUser, deleteUser } from "../Api/user.api";
import Swal from "sweetalert2";

function Client() {
  const [clients, setClients] = useState([]);
  useEffect(() => {
    getAllUser()
      .then((response) => {
        console.log(response);
        setClients(response.message);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const handleDeleteUser = async (userId) => {
    try {
      const response = await deleteUser(userId);
      console.log(response);
      if (response) {
        setClients((prevClient) =>
          prevClient.filter((clients) => clients._id !== userId)
        );
        Swal.fire("Deleted!", "Client has been deleted.", "success");
      } else {
        Swal.fire("Error", "Failed to delete the Client.", "error");
      }
    } catch (error) {
      console.error("Error deleting Client:", error);
      Swal.fire(
        "Error",
        "An error occurred while deleting the Client.",
        "error"
      );
    }
  };
  return (
    <React.Fragment>
      <div>
        <Link to="/addClient">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-12 mb-3">
            Add Client
          </button>
        </Link>
        <table className="divide-gray-200 w-full">
          <thead className="bg-gray-200">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Email
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Resrved
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-gray-100 divide-y divide-gray-200">
            {clients.map((client) => (
              <tr key={client._id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      {client.name}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{client.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      client.isReserving
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {client.isReserving ? "Reserving" : "Not reserving"}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                  <Link className="text-indigo-600 hover:text-indigo-900">
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDeleteUser(client._id)}
                    className="ml-2 text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}

export default Client;
