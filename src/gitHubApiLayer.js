const request = require('request-promise');

// URL: https://api.github.com/
const HOST = "https://api.github.com";

//const APITOKEN = "dfb5799f84078511584cdcaecae52ce964153b5a";

class GitHubApi {
  constructor(host = HOST) {
    this.host = host;

    this.request = request.defaults({
      json: true,
      headers: {
        "Content-Type": 'application/json',
        "User-Agent": 'Awesome-Octocat-App'
      },
      rejectUnauthorized: false
    });
  }

  getUserInformation(gitUserName) {
    const path = `/users/${gitUserName}`

    return this.request.get({
      url: `${this.host}${path}`
    })
  }
}


module.exports = GitHubApi;

