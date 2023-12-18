import React, { useEffect, useState } from "react";
import { getAllApartement } from "../../Api/apartement.api";
import { getAllUser } from "../../Api/user.api";
import { createPayment } from "../../Api/payment.api";
function addPayment() {
  const [apartement, setApartement] = useState([]);
  const [client, setClient] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Promise.all([getAllApartement(), getAllUser()]);

        const [apartmentData, userDataResponse] = response;

        // Access the array of user data through the 'message' property
        const userData = userDataResponse.message || [];

        console.log("Apartment data:", apartmentData);
        console.log("User data:", userData);

        setApartement(apartmentData);
        setClient(userData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <React.Fragment>
      <div className="flex justify-center items-center mt-2">
        <form className="w-6/12 m-4 p-10 bg-white rounded shadow-2xl">
          <p className="text-gray-800 font-bold text-2xl">Add Payment</p>
          <div className="mt-2 flex">
            <div className="w-full pr-2">
              <label className="block text-md font-semibold text-gray-800 mb-2">
                Amount
              </label>
              <input
                className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
                type="number"
                name="amount"
                id="amount"
                placeholder="Amount of the payment"
              />
            </div>
          </div>
          <div className=" mt-2">
            <label className="block text-md font-semibold text-gray-800 mb-2">
              Client
            </label>
            <select
              name="client"
              id="client"
              className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
              type="text"
              placeholder="client"
            >
              <option value="">Select Client</option>
              {client.map((client) => (
                <option key={client._id} value={client.name}>
                  {client.name}
                </option>
              ))}
            </select>
          </div>
          <div className=" mt-2">
            <label className="block text-md font-semibold text-gray-800 mb-2">
              Apartement
            </label>
            <select
              name="apartement"
              id="apartement"
              className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
              type="text"
              placeholder="apartement"
            >
              <option value="">Select Apartement</option>
              {apartement.map((app) => (
                <option key={app._id} value={app.name}>
                  {app.name}
                </option>
              ))}
            </select>
          </div>
          <div className=" mt-2">
            <label className="block text-md font-semibold text-gray-800 mb-2">
              Date
            </label>
            <input
              name="date"
              id="date"
              className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
              type="date"
              placeholder="adress"
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
export default addPayment;
