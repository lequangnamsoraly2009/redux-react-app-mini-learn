import axiosClient from "./axiosClient";

const productApi = {
  getAll: (params) => {
    const url = "/products";
    return axiosClient.get(url, {
      params,
      // Muốn thay đổi đường dẫn baseURL có thể thay đổi cho từng api riếng
      // baseURL: 'https://doicaiconmemay.com',
      // Có thể add thêm headers
      // headers:{'saoroisao':'testthoilamgicang'} Same Same It
    });
  },

  get: (id) => {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
  // Thêm các CRUD zô đây lày :(
};

export default productApi;
