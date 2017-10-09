const environments = {
    development: 0,
    testing: 1,
    demo: 2,
    production: 3
};

const currentEnvironment = environments[0];
//const apiVersion = 1

// Server URL
var apiURL;
switch (currentEnvironment) {
    case environments.development:
        apiURL = "http://localhost:8000/api/";
        break;
    case environments.testing:
        apiURL = "http://localhost:8000/api/";
        break;
    case environments.demo:
        apiURL = "http://localhost:8000/api/";
        break;
    case environments.production:
        apiURL = "http://localhost:8000/api/";
        break;
    default:
        apiURL = "http://localhost:8000/api/";
}

// Api
export const api = {
    userauth: {
        authenticate: apiURL + "userauth/authenticate/",
        register: apiURL + "userauth/register/"
    },
    photos:{
        list: "http://jsonplaceholder.typicode.com/albums/1/photos"
    }
}