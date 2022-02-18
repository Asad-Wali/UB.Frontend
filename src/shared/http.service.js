import axios from 'axios';
const API_URL = 'http://localhost:3040/';
const TOKEN = "access_token";

//export default useFetch;
class HttpService {
  async login(url, email, password) {
    var qs = require('qs');
    var data = qs.stringify({
      'email': email,
      'password': password
    });
    var config = {
      method: 'post',
      url: API_URL + url,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: data
    };
    console.log(data);

    return await axios(config)
      .then(function (response) {
        localStorage.setItem("user-info", JSON.stringify(response.data));
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });
  }



  async signup(url, email, password, Name, role) {
    var qs = require('qs');
    var data = qs.stringify({
      'email': email,
      'password': password,
      'Name': Name,
      'role': role
    });
    var config = {
      method: 'post',
      url: API_URL + url,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  async verifyToken(route) {
    return await axios.get(API_URL + route);
  }

  async getAll(route) {
    const res = await axios.get(API_URL + route);
    return res;
  }

  async get(route) {
    if (!TOKEN) {
      return;
    }
    const res = await axios.get(API_URL + route, { headers: { Authorization: 'Bearer ' + TOKEN.accessToken } });
    return res;
  }

  async getwithoutTokken(route) {
    const res = await axios.get(API_URL + route);
    return res;
  }

  post(route, data) {

    return axios.post(API_URL + route, data, { headers: "application/x-www-form-urlencoded" });
  }

  put(route, data) {
    if (!TOKEN) {
      return;
    }
    return axios.put(API_URL + route, data, { headers: { Authorization: 'Bearer ' + TOKEN.accessToken } });
  }

  delete(route) {
    if (!TOKEN) {
      return;
    }
    return axios.delete(API_URL + route, { headers: { Authorization: 'Bearer ' + TOKEN.accessToken } });
  }

  getCurrentUser() {
    if (!TOKEN) {
      return;
    }
    return JSON.parse(localStorage.getItem('user-info'));
  }
  getCurrentUserId() {
    if (!TOKEN) {
      return;
    }
    return JSON.parse(localStorage.getItem('user-info')).Id;
  }
}

export default new HttpService();