import http from "..";

export const getUserInfo = () => http.get("/user");
