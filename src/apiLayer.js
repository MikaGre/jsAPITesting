const request = require('request-promise');

// URL: https://api.github.com/

const HOST = "https://api.github.com/";
//const APITOKEN = "dfb5799f84078511584cdcaecae52ce964153b5a";
const gitUserName = "MikaGre" 

class Api {
  constructor(host = HOST, apiToken = APITOKEN) {
    this.host = host;
    this.apiToken = apiToken;

    this.request = request.defaults({
      json: true,
      headers: {
        "Content-Type": 'application/json'
      },
      rejectUnauthorized: false
    });
  }

  getUserInformation() {
    const path = `users/${gitUserName}`

    return this.request.get({
      url: `${this.host}${path}`
    })
  }
}


module.exports = gitHubApi;

