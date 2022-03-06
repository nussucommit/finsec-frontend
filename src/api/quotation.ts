import request from "./request";

export const createForm = (data: Quotation) => {
    return request.post("/createform", data);
}