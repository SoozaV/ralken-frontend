import { type NextApiRequest, type NextApiResponse } from "next";
import axios from "axios";

const api = axios.create({
  headers: {
    "accept-encoding": null,
  },
  baseURL: process.env.BASE_URL as string,
});

export const getUser = async (id: string) => {
  const initTime = new Date();
  const user = await api.get(`/users/${id}`);
  const endTime = new Date().getTime() - initTime.getTime();

  const log = {
    method: user.request.method,
    route: user.config.url,
    status: user.status,
    responseTime: endTime,
  };

  axios.post("/api/logs", log, {
    baseURL: process.env.HOST_URL,
    headers: {
      "Content-Type": "application/json",
    },
    validateStatus: function (status) {
      return status < 600;
    },
  });
  return user.data;
};

export const getUserPosts = async (id: string) => {
  const initTime = new Date();
  const posts = await api.get(`/users/${id}/posts`);
  const endTime = new Date().getTime() - initTime.getTime();

  const log = {
    method: posts.request.method,
    route: posts.config.url,
    status: posts.status,
    responseTime: endTime,
  };

  axios.post("/api/logs", log, {
    baseURL: process.env.HOST_URL,
    headers: {
      "Content-Type": "application/json",
    },
    validateStatus: function (status) {
      return status < 600;
    },
  });

  return posts.data;
};

export const getUserPhotos = async (id: string) => {
  const initTime = new Date();
  const photos = await api.get(`/users/${id}/photos?_limit=24`);
  const endTime = new Date().getTime() - initTime.getTime();

  const log = {
    method: photos.request.method,
    route: photos.config.url,
    status: photos.status,
    responseTime: endTime,
  };

  axios.post("/api/logs", log, {
    baseURL: process.env.HOST_URL,
    headers: {
      "Content-Type": "application/json",
    },
    validateStatus: function (status) {
      return status < 600;
    },
  });

  return photos.data;
};

export const getUsers = async () => {
  const initTime = new Date();
  const users = await api.get("/users");
  const endTime = new Date().getTime() - initTime.getTime();

  const log = {
    method: users.request.method,
    route: users.config.url,
    status: users.status,
    responseTime: endTime,
  };

  axios.post("/api/logs", log, {
    baseURL: process.env.HOST_URL,
    headers: {
      "Content-Type": "application/json",
    },
    validateStatus: function (status) {
      return status < 600;
    },
  });

  return users.data;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = await getUsers();
  return res.status(200).json(data);
};

export default handler;
