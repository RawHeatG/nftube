import { API_URL } from "../utils";
import axios from "axios";

export const login = async (user) =>
  await axios.post(`${API_URL}/login`, { user });

export const signup = async (user) =>
  await axios.post(`${API_URL}/signup`, { user });
