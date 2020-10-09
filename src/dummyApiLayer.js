const request = require("request-promise");

const DUMMY_HOST = "http://dummy.restapiexample.com/api/v1";

class DummyEmpApi {
  constructor() {
    this.host = DUMMY_HOST;

    this.request = request.defaults({
      json: true,
      headers: {
        Accept: "application/json",
      },
    });
  }

//[POST] Create new employee 
  createEmp(empBody) {
      const path = '/create'

      return this.request.post({
        url: `${this.host}${path}`,
        body: empBody
    })
  }

  //[PUT] /update/{id}
  updateEmp(empId, body) {
    const path = `/update/${empId}`;

    return this.request.put({
      url: `${this.host}${path}`,
      body: body
    })
  }

//[GET] /employee/{id}  Unique employee
  getEmpById(empId) {
      const path = `/employee/${empId}`

      return this.request.get({
        url: `${this.host}${path}`,
    })
  }

  //[GET] /employee 
  getListOfEmp() {
      const path = '/employees'

      return this.request.get({
        url: `${this.host}${path}`,
    })
  }

// ]DELETE] /delete/{id}
deleteEmp(empId) {
    const path = `/delete/${empId}`;

    return this.request.delete({
      url: `${this.host}${path}`
    })
  }
}

module.exports = DummyEmpApi;
