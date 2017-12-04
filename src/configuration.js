// CRA variable
// When you run npm start, it is always equal to 'development'
// When you run npm test it is always equal to 'test'
// When you run npm run build to make a production bundle, it is always equal to 'production'
const currentEnvironment = process.env.NODE_ENV;

// apiVersion is used to consume different apis according to the project version
const apiVersion = 1;

const environments = {
  development: "development",
  test: "test",
  demo: "production"
};

// Server URL
var apiUrl;

switch (currentEnvironment) {
  case environments.development:
    apiUrl = "http://localhost:8888/api/";
    break;
  case environments.testing:
    apiUrl = "http://testing.asapdevelopers.com/api/";
    break;
  case environments.production:
    apiUrl = "http://production.asapdevelopers.com/api/";
    break;
  default:
    apiUrl = "http://localhost:8888/api/";
}

// Api
export const api = {
  userauth: {
    authenticate: apiUrl + "userauth/authenticate/",
    register: apiUrl + "userauth/register/"
  },
  github: {
    list: "https://api.github.com/search/repositories?q=topic:react&sort=stars&order=desc"
  }
};

export const configuration = {
  api
};
