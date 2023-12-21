const createApartement = require("../src/controller/apartment/addApartment.controller");
const Apartement = require("../src/model/apartment.schema");

jest.mock("../src/model/apartment.schema");

const res = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
};

describe("createApartement Controller", () => {
  it("should return status 400 if name is empty", async () => {
    const req = {
      body: {
        name: "",
        description: "Example Description",
        price: 300,
        city: "youssoufia",
        adress: "Youcode",
        room: 3,
        floor: 4,
      },
    };

    await createApartement(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      status: "error",
      message: "All fields are required",
    });
  });

  it("should return status 400 if description is empty", async () => {
    const req = {
      body: {
        name: "Example Name",
        description: "",
        price: 300,
        city: "youssoufia",
        adress: "Youcode",
        room: 3,
        floor: 4,
      },
    };

    await createApartement(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      status: "error",
      message: "All fields are required",
    });
  });

  it("should return status 400 if price is empty", async () => {
    const req = {
      body: {
        name: "Example Name",
        description: "Example Description",
        price: "",
        city: "youssoufia",
        adress: "Youcode",
        room: 3,
        floor: 4,
      },
    };

    await createApartement(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      status: "error",
      message: "All fields are required",
    });
  });

  it("should return status 400 if city is empty", async () => {
    const req = {
      body: {
        name: "Example Name",
        description: "Example Description",
        price: 300,
        city: "",
        adress: "Youcode",
        room: 3,
        floor: 4,
      },
    };

    await createApartement(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      status: "error",
      message: "All fields are required",
    });
  });

  it("should return status 400 if adress is empty", async () => {
    const req = {
      body: {
        name: "Example Name",
        description: "Example Description",
        price: 300,
        city: "youssoufia",
        adress: "",
        room: 3,
        floor: 4,
      },
    };

    await createApartement(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      status: "error",
      message: "All fields are required",
    });
  });

  it("should return status 400 if room is empty", async () => {
    const req = {
      body: {
        name: "Example Name",
        description: "Example Description",
        price: 300,
        city: "youssoufia",
        adress: "Youcode",
        room: "",
        floor: 4,
      },
    };

    await createApartement(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      status: "error",
      message: "All fields are required",
    });
  });

  it("should return status 400 if floor is empty", async () => {
    const req = {
      body: {
        name: "Example Name",
        description: "Example Description",
        price: 300,
        city: "youssoufia",
        adress: "Youcode",
        room: 3,
        floor: "",
      },
    };

    await createApartement(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      status: "error",
      message: "All fields are required",
    });
  });
  it("should return status 201 if all fields are provided", async () => {
    const req = {
      body: {
        name: "Example Name",
        description: "Example Description",
        price: 300,
        city: "youssoufia",
        adress: "Youcode",
        room: 3,
        floor: 4,
      },
    };

    await createApartement(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      status: "succes",
      message: "Apartment created",
    });
  });
});
