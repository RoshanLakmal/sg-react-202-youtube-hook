import axios from 'axios';

const KEY = 'AIzaSyBCVBL6daZC2iHSrer8Ukt3Ow1XsFoIyIo';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});