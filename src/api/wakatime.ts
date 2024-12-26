import axios from "axios";

const URL = import.meta.env.VITE_WAKATIME_URL;

export const getHowManyHoursCodedThisWeek = async () => {
    const response = await axios.get(URL);
    return response.data;
};
