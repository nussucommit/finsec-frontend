import useRequest, { Config } from "./swr";

export const useUser = (config?: Config<User>) =>
  useRequest<User>({ method: "GET", url: `user/me` }, config);


export const useVerifyUser = (config?: Config<VerifiedUser>) =>
  useRequest<VerifiedUser>({ method: "GET", url: `verify/me` }, config);