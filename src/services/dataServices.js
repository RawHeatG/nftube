import { API_URL } from "../utils";
import axios from "axios";

export const getAllVideos = async () => await axios(`${API_URL}/video`);

export const getPlaylistData = async (userId, playlistId) =>
  await axios(`${API_URL}/playlist/${userId}/${playlistId}`);

export const getAllPlaylist = async (userId) =>
  await axios(`${API_URL}/playlist/${userId}`);

export const updatePlaylist = async (userId, playlistId, videoId) =>
  await axios.post(`${API_URL}/playlist/${userId}/${playlistId}`, {
    _id: videoId,
  });
