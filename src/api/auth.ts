import request from "./request";

// username = nusnet ID
export const login = (data: { username: string; password: string }) => {
  // <Token> is the return type of the { data } from the API call
  return request.post<Token>("/login", data);
};

export const signup = (data: { username: string; password: string }) => {
  return request.post("/signup", data);
};

export const forgetPassword = (data: {email: string}) => {
  return request.post("/forgetpassword", data);
};

export const confirmEmail = (data:{uid:string}) => {
  return request.post("/confirmEmail",data)
}


export const verificationEmail = (data:{uid:string}) => {
  return request.post("/verifyEmail",data)
}
/*
boiler plate from evoucher front end may use in the future
export const logout = (data: { refresh_token: string }) =>
  request.post("/logout", data);

export const verifyOrganization = (data: { username: string }) =>
  request.post("/verifyorganization", data);

export const register = (data: {
  username: string;
  password: string;
  name: string;
  year: number;
  faculty1: string;
  faculty2?: string;
}) => {
  return request.post("/register", data);
};

export const changePassword = (data: {
  old_password: string;
  new_password: string;
}) => {
  return request.patch("/changepassword", data);
};
*/