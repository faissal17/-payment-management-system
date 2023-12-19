import React from "react";
import { useState, useEffect } from "react";
import { getAllApartement } from "../../Api/apartement.api";
import { getAllUser } from "../../Api/user.api";
import { updatePayment } from "../../Api/payment.api";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
function editPayment() {
  const navigate = useNavigate();
  const [apartment, setApartement] = useState([]);
  const [client, setClient] = useState([]);
  const { id } = useParams();
  const [payment, setPayment] = useState({
    amount: "",
    user: "",
    apartment: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Promise.all([getAllApartement(), getAllUser()]);
        const [apartmentData, userDataResponse] = response;
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
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPayment((prevPayment) => ({
      ...prevPayment,
      [name]: value,
    }));
  };

  const handleUserChange = (selectedUser) => {
    setPayment((prevPayment) => ({
      ...prevPayment,
      user: selectedUser.target.value,
    }));
  };

  const handleApartmentChange = (selectedApartment) => {
    setPayment((prevPayment) => ({
      ...prevPayment,
      apartment: selectedApartment.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await updatePayment(id, payment);
      console.log(response);
      Swal.fire("Success!", "Apartment has been updated.", "success").then(
        () => {
          navigate("/Payment");
        }
      );
    } catch (error) {
      console.error("Error updating Apartment:", error);
      Swal.fire("Error", "Failed to update the Apartment.", "error");
    }
  };
  return (
    <React.Fragment>
      <div className="flex justify-center items-center mt-2">
        <form
          className="w-6/12 m-4 p-10 bg-white rounded shadow-2xl"
          onSubmit={handleSubmit}
        >
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
                value={payment.amount}
                onChange={handleChange}
                placeholder="Amount of the payment"
              />
            </div>
          </div>
          <div className=" mt-2">
            <label className="block text-md font-semibold text-gray-800 mb-2">
              Client
            </label>
            <select
              name="user"
              id="user"
              className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
              type="text"
              value={payment.user}
              onChange={handleUserChange}
              placeholder="Client"
            >
              <option>Select Client</option>
              {client.map((client) => (
                <option key={client._id} value={client._id}>
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
              name="apartment"
              id="apartment"
              className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
              type="text"
              value={payment.apartment}
              onChange={handleApartmentChange}
              placeholder="apartment"
            >
              <option>Select Apartement</option>
              {apartment.map((app) => {
                if (app.reserved == false) {
                  return (
                    <option key={app._id} value={app._id}>
                      {app.name}
                    </option>
                  );
                } else {
                  return null;
                }
              })}
            </select>
          </div>
          <div className="mt-6"></div>
          <button className="w-full px-6 py-2 text-white font-semibold tracking-wider bg-gray-900 rounded">
            Update
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}
export default editPayment;
