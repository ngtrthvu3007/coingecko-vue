// api.js
import axios from "axios";

const BASE_URL = "https://api.coingecko.com/api/v3";

export const fetchTrendingCoins = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/search/trending`);
    return response.data.coins;
  } catch (error) {
    console.error("Error fetching trending coins:", error);
  }
};

export const fetch100Coins = async (params) => {
  try {
    const response = await axios.get(`${BASE_URL}/coins/markets`, { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching 100 coins:", error);
  }
};
export const fetchCoinDetail = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/coins/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
