import axios from 'axios';


// const token = "eyJhbGciOiJIUzUxMiJ9.eyJpZCI6MjAsImV4cCI6MTYyMzQwMDc0NX0.-pHeg9ID5ytytm-3jQaM7QLqCjWC26QDWCHrL3LdqVQL8icKgN6TClvYGfx6fqi3-S4K9OdF8_R6oHooEoclJA"
const token = localStorage.getItem("token");
const URL_BASE = 'http://localhost:3000/api';

const getEndPoint = (url) =>{
    return URL_BASE+url;
}

const getHeader = () => {
    return {headers:{Authorization: `Token token=${token}`}};

}

// const getHeader = () => {
//     return {headers: {Authorization: `Token token=${token}`}};
//   }

const responseData = (res) => res.data;

export const get = (url) =>{
    const endPoint = getEndPoint(url);
    const header = getHeader();
    return axios.get(endPoint,header).then(responseData);
}

export const put = (url,data) =>{
    const endPoint = getEndPoint(url);
    const header = getHeader();
    return axios.put(endPoint,data,header).then(responseData);
}

export const post = (url,data) =>{
    const endPoint = getEndPoint(url);
    const header = getHeader();
    return axios.post(endPoint,data,header).then(responseData);
}

export const destroy = (url) =>{
    //const endPoint = getEndPoint(url);
    const header = getHeader();
    return axios.delete(`/api/${url}`,header).then(responseData);
}
