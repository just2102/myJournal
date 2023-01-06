import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001/",
  withCredentials: true,
  //headers: {}
});

export const writersAPI = {
  getTotalWriters() {
    return instance.get(`writers/`).then((response) => {
      return response.data.length;
    });
  },
  getWriters(writersOnPage, currentPage) {
    return instance
      .get(`writers?_page=${currentPage}&_limit=${writersOnPage}`)
      .then((response) => {
        return response.data;
      });
  },
};

export const articlesAPI = {
  getWriterArticles() {
    return instance.get("articles/");
  },
};
