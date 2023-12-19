import React, { useEffect, useState } from "react";
import { getAllApartement, deleteAllApartement } from "../Api/apartement.api";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Appartement() {
  const [apartement, setApartement] = useState([]);
  useEffect(() => {
    getAllApartement()
      .then((response) => {
        setApartement(response);
        console.log("Apartement data:", response);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const handleDeleteApartment = async (apartmentId) => {
    try {
      const response = await deleteAllApartement(apartmentId);
      console.log(response);
      if (response) {
        setApartement((prevApartements) =>
          prevApartements.filter((apartment) => apartment._id !== apartmentId)
        );
        Swal.fire("Deleted!", "Apartment has been deleted.", "success");
      } else {
        Swal.fire("Error", "Failed to delete the Apartment.", "error");
      }
    } catch (error) {
      console.error("Error deleting Apartment:", error);
      Swal.fire(
        "Error",
        "An error occurred while deleting the Apartment.",
        "error"
      );
    }
  };

  return (
    <React.Fragment>
      <div>
        <Link to="/addApartement">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-12 mb-3">
            Add Apartement
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
                Description
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Availible
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Price
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Room
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                floor
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                City
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
            {apartement.map((apt) => (
              <tr key={apt._id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img className="h-10 w-10 rounded-full" src={apt.image} />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {apt.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{apt.description}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      apt.reserved
                        ? "bg-red-100 text-red-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {apt.reserved ? "Not Available" : "Available"}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{apt.price}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{apt.room}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{apt.floor}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{apt.city}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                  <Link
                    to={`/editApartement/${apt._id}`}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    Edit
                  </Link>
                  <button
                    className="ml-2 text-red-600 hover:text-red-900"
                    onClick={() => handleDeleteApartment(apt._id)}
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

export default Appartement;
