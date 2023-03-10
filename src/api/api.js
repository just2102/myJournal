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
  follow(writerId) {
    return instance.patch(`writers/${writerId}`, { followed: true });
  },
  unfollow(writerId) {
    return instance.patch(`writers/${writerId}`, { followed: false });
  },
};

export const articlesAPI = {
  getWriter(writerId) {
    return instance.get(`writers/${writerId}`);
  },
  getWriterArticles(authorId) {
    return instance.get(`articles?authorId=${authorId}`);
  },
  getAllArticles() {
    return instance.get(`articles`)
  },
  postArticle(article) {
    return instance.post(`articles`, article)
  },
  deleteArticle(id) {
    return instance.delete(`articles/${id}`)
  }
};

export const authAPI = {
  register(username, email, password) {
    let data = {
      username,
      email,
      password,
      followed: false,
    };
    return instance
      .post(`register`, data)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.error(error);
      });
  },
  login(email, password) {
    let data = {
      email,
      password,
    };
    return instance
      .post(`login`, data)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.error(error);
      });
  },
  whoAmI(token) {
    return instance.get(`tokens?token=${token}`).then((response) => {
      return response;
    });
  },
};
