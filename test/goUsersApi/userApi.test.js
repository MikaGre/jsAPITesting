const GoRestApi = require('../../src/goRestUsersApiLayer')
const randomName = require('../../src/utils/randomName')
const { expect } = require('chai')

describe("GoRest Users API", async () => {
    let api;
  
    before(async () => {
      api = new GoRestApi();
    })
  
    describe("GoRest Create Users (POST /public-api/users)", async () => {
      it("Can create a new user", async () => {
   
        const userToBeCreated = {
          name: randomName(),
          gender: "Male",
          email: `${Math.random().toString(36).slice(2)}@example.com`,
          status: "Active"
        }
        const createdUserResponse = await api.createUser(userToBeCreated);
        const userID = createdUserResponse.data.id;
        console.log(createdUserResponse)

        expect(createdUserResponse).to.have.property('code', 201)
        expect(createdUserResponse.data).to.have.property('id',userID).to.be.a('number')
        expect(createdUserResponse.data).to.have.property('name',userToBeCreated.name)
        expect(createdUserResponse.data).to.have.property('email',userToBeCreated.email)
        expect(createdUserResponse.data).to.have.property('status',userToBeCreated.status)
      });
    })   


    describe('GoRest Update Employee ', () => {
        it("Can update a user", async () => {
            const userToBeCreated = {
              name: randomName(),
              gender: "Male",
              email: `${Math.random().toString(36).slice(2)}@example.com`,
              status: "Active"
            }
            const createdUserResponse = await api.createUser(userToBeCreated);
            const userID = createdUserResponse.data.id;
            
            // const userToBeUpdated = {
            //   name: "Test name",
            //   gender: "Female",
            //   email: `${Math.random().toString(36).slice(2)}@example.com`,
            //   status: "Inactive"
            // }
      
            //const updatedUserResponse = await api.updateUser(userCreateResponse.data.id, userToBeUpdated)
      
            // Few ways to log deeply nested JS objects in console using JSON.stringify().
            // The first one adds color to the message.
            console.log('\x1b[36m%s\x1b[0m', JSON.stringify(userCreateResponse, null, 2));
            console.log(JSON.stringify(updatedUserResponse, null, 2));
      
            // TODO: Add assertions here
          })
    });
})

     