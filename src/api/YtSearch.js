import axios from 'axios';

const KEY = 'AIzaSyDxGxecQCMsYB1Uo_7MXjMQwRVbJWEzjSs';


export const baseParams = {
    part: "snippet",
    maxResults: 4,
    key: KEY
};

export default axios.create(
    {
        baseURL: "https://www.googleapis.com/youtube/v3"
    }
);