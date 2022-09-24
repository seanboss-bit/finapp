import axios from "axios";

const BASE_URL = "https://safe-payy.herokuapp.com";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
  headers: { "x-access-token": "fidelity_idl-8Xrd9PAYsafX_e5CfFmq137w5" },
});
