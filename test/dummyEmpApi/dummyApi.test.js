const DummyApi = require("../../src/dummyApiLayer");
const randomName = require("../../src/utils/randomName");
const { expect } = require("chai");

describe.only("Dummy Employee(s) API", async () => {
  let api;

  before(async () => {
    api = new DummyApi();
  });

  describe("Dummy Api Create Employees (POST /create)",async () => {
    it("Can create a new employee", async () => {
      const empToCreate = {
        name: randomName(),
        salary: "123",
        age: "23",
      };
      const createdEmp = await api.createEmp(empToCreate);
      const createdEmpId = await createdEmp.data.id
      
      expect(createdEmp.data).to.have.property("id",createdEmpId);
      expect(createdEmp.data).to.have.property("name",empToCreate.name);
      expect(createdEmp.data).to.have.property("salary",empToCreate.salary);
      expect(createdEmp.data).to.have.property("age",empToCreate.age);
    });
  });

  describe("Dummy Api List Employees (GET /employees)",async () => {
    it("Can view list of employees", async () => {
      const listOfEmp = await api.getListOfEmp();  
      expect(listOfEmp.data).length.to.be.greaterThan(5) 
    });
  });

  describe("Dummy Api Get a single employee data (GET /employee/{id})", async() => {
    it("Can Get a single employee data", async () => {
      const empToCreate = {
        name: randomName(),
        salary: "123",
        age: "23",
      };
      const createdEmp = await api.createEmp(empToCreate);
      const empID = await createdEmp.data.id;

      const singleEmpData = await api.getEmpById(empID);
      expect(singleEmpData).to.have.property("status", "success");
      expect(singleEmpData).to.have.property(
        "message",
        "Successfully! Record has been fetched."
      );
    });
  });

  describe.skip("Dummy Api Update single employee data (PUT /update{id})", async() => {
    
    it("Can Update a single employee's data", async () => {
      const empToCreate = {
        name: randomName(),
        salary: "123",
        age: "23",
      };
      const createdEmp = await api.createEmp(empToCreate);
      const empId = await createdEmp.data.id;
      const empName = await createdEmp.data.name;

      const updateToEmp = {
        name: "test",  
        salary: "100",
        age: "56",
      }

      const updatedEmp = await updateEmp(empId,updateToEmp)

      expect(updatedEmp.data).to.have.property("id",empId);
      expect(updatedEmp.data).to.have.property("name","test");
    });
  });

  describe("Dummy Api Delete a single employee data (DELETE /delete/{id})", async() => {
    it("Can Delete a single employee's data", async () => {
      const empToCreate = {
        name: randomName(),
        salary: "123",
        age: "23",
      };
      const createdEmp = await api.createEmp(empToCreate);
      const empID = await createdEmp.data.id;

      const deletedEmpResponse = await api.deleteEmp(empID);
      
      expect(deletedEmpResponse).to.have.property("status","success");
      expect(deletedEmpResponse).to.have.property("message","Successfully! Record has been deleted");
    });
  });

});
