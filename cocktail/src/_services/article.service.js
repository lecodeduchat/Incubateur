import Axios from "./caller.service";

let getAllArticles = () => {
  return Axios.get("/articles");
};

let getArticle = (uid) => {
  return Axios.get(`/articles/${uid}`);
};

let addArticle = (user) => {
  return Axios.post("/articles", user);
};

let updateArticle = (user) => {
  return Axios.put(`/articles/${user.id}`, user);
};

let deleteArticle = (uid) => {
  return Axios.delete(`/articles/${uid}`);
};

export const articleService = {
  getAllArticles,
  getArticle,
  addArticle,
  updateArticle,
  deleteArticle,
};
