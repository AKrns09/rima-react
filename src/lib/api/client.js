import applyCaseMiddleware from "axios-case-converter";
import axios from "axios";

const options = {
  ignoreHeaders: true,
};

const client = applyCaseMiddleware(
  axios.create({
    //baseURL: "http://127.0.0.1:3000",
    baseURL: "http://ec2-63-34-162-120.eu-west-1.compute.amazonaws.com",
  }),
  options
);

export default client;