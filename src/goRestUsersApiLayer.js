const request = require('request-promise');
//API-TOKEN 83176620f88a6a900a2be1ad0860718b503460bbfeddb3a3139125b2ed0abe07
const GOREST_HOST = 'https://gorest.co.in';
const GOREST_APIKEY = '83176620f88a6a900a2be1ad0860718b503460bbfeddb3a3139125b2ed0abe07'

class UsersApi {
    constructor() {
        this.host = GOREST_HOST;

        this.request = request.defaults({
            json:true,
            headers : {
                 "Accept":'application/json',
                 "Content-Type":'application/json', 
                 "Authorization": `Bearer ${GOREST_APIKEY}`
            }
        })
    }

    createUser(userBody) {
        const path = '/public-api/users'

        return this.request.post({
            url: `${this.host}${path}`,
            body: userBody
        })
    }


 // GET /public-api/users/123
 // if parm is left empty should return ALL users
 getUser(userId = "") {
    const path = `/public-api/users/${userId}`;

    return this.request.get({
      url: `${this.host}${path}`
    })
  }

  // PUT /public-api/users/123
  updateUser(userId, body) {
    const path = `/public-api/users/${userId}`;

    return this.request.put({
      url: `${this.host}${path}`,
      body: body
    })
  }

  // DELETE /public-api/users/123
  deleteUser(userId) {
    const path = `/public-api/users/${userId}`;

    return this.request.delete({
      url: `${this.host}${path}`
    })
  }

}
module.exports = UsersApi;