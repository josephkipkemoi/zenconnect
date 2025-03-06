import Axios from "axios";

const axios = Axios.create({
    baseURL: `${ (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? 
              process.env.REACT_APP_BACKEND_URL_DEVELOPMENT : 
              process.env.REACT_APP_BACKEND_URL}`,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    }
})
export default axios