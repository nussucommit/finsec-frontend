import request from "./request";

// username = nusnet ID
export const login = (data: { username: string; password: string }) => {
  // <Token> is the return type of the { data } from the API call
  return request.post<Token>("/user/signin", data);
};

export const signup = (data: { username: string; password: string }) => {
  return request.post("/user/signup", data);
};

export const forgetPassword = (data: {email: string}) => {
  return request.post("/user/reset_password", data);
};

export const resetPassword = (data: {password: string,uid:string}) => {
  return request.post("/user/change_password/" + data.uid, data);
};

export const confirmEmail = (data:{uid:string}) => {
  return request.post("/user/verified_account_status/"+data.uid,data)
}


export const sendVerificationEmail = (data:{uid:string}) => {
  return request.post("/user/signup_confirmation_email/" + data.uid,data)
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