import axios from "axios";
let baseURL;

process.env.NODE_ENV === "development"
    ? (baseURL = "https://e6di35qzm7.execute-api.us-west-2.amazonaws.com")
    : (baseURL = "you can put your url for local stage");

const api = axios.create({ withCredentials: false, baseURL });

export const OFFERS_URL = baseURL + "/latest/directory?epp=18";

export const ALL_FETCHER = async url => {
    const response = await fetch(url, {
        method: "GET",
        withCredentials: false,
    });
    return await response.json();
};

const MY_SERVICE = {
    OFFERS: async page => await api.get(`/latest/directory?epp=20&p=${page}`),
};

export default MY_SERVICE;
