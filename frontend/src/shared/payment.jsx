import React, { useEffect, useState } from "react";
import { getAllPayment, deletPayment } from "../Api/payment.api";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
function Payment() {
  const [payments, setPayment] = useState([]);

  useEffect(() => {
    getAllPayment()
      .then((response) => {
        setPayment(response);
        console.log("Payment data:", response);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleDeletePayment = async (paymentId) => {
    try {
      const response = await deletPayment(paymentId);
      console.log(response);
      if (response) {
        setPayment((prevPayments) =>
          prevPayments.filter((payments) => payments._id !== paymentId)
        );
        Swal.fire("Deleted!", "payments has been deleted.", "success");
      } else {
        Swal.fire("Error", "Failed to delete the payments.", "error");
      }
    } catch (error) {
      console.error("Error deleting payments:", error);
      Swal.fire(
        "Error",
        "An error occurred while deleting the payments.",
        "error"
      );
    }
  };

  return (
    <React.Fragment>
      <Link to="/addPayment">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-12 mb-3">
          Add Payment
        </button>
      </Link>
      <table className="divide-gray-200 w-full">
        <thead className="bg-gray-200">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Amount
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Date
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              User
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              apartment
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-100 divide-y divide-gray-200">
          {payments.map((pay) => (
            <tr key={pay._id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      {pay?.amount}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{pay?.date}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">
                  {pay.user?.name}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                  {pay?.apartment?.name}
                </div>
              </td>

              <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                <Link
                  to={`/editPayment/${pay._id}`}
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDeletePayment(pay._id)}
                  className="ml-2 text-red-600 hover:text-red-900"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
}
export default Payment;
