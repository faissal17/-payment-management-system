const ForgetPasswordController = require("../src/controller/auth/forgetPassword.controller");
const User = require("../src/model/User.schema");
const jwt = require("jsonwebtoken");

jest.mock("../src/model/User.schema");
jest.mock("jsonwebtoken");

const res = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
};

it("should return 404 if no email is provided", async () => {
  const req = {
    body: {
      email: "",
    },
  };

  await ForgetPasswordController.forget(req, res);

  expect(res.status).toHaveBeenCalledWith(404);
  expect(res.json).toHaveBeenCalledWith({
    message: "Please enter your registered email",
  });
});

it("should return 403 if no user found with the provided email", async () => {
  const req = {
    body: {
      email: "faissal@gmail.com",
    },
  };

  User.findOne.mockReturnValue(null);

  await ForgetPasswordController.forget(req, res);

  expect(res.status).toHaveBeenCalledWith(403);
  expect(res.json).toHaveBeenCalledWith({
    message: "No user found with this email.",
  });
});
