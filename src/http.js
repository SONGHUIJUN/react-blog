import axios from "axios";
import qs from "qs";
import store from "./store";
import {showLoading, hideLoading} from "./actions/loading-actions";

const httpServer = axios.create({
  baseURL: "",
  header: {
    "Content-Type": "application/json"
  },
  timeout: 3000
});

httpServer.interceptors.request.use((config) => {
  config.paramsSerializer = function (params) {
    return qs.stringify(params, {arrayFormat: "repeat"})
  }
  // store.dispatch(showLoading());
  config.headers.common['Authorization'] = "songhuijun";
  return config;
}, (error) => {
  return Promise.reject(error);
})

httpServer.interceptors.response.use((res) => {
  // store.dispatch(hideLoading())
  return res.data;
}, (error) => {
  console.log("请求出错：", error);
})

export default httpServer;

export function get(url = "", params = {}, data = {}) {
  return httpServer({
    method: "get",
    url,
    params,
    data
  })
}
