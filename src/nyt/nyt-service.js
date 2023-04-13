import axios from "axios";
const NYT_API = "https://api.nytimes.com/svc/mostpopular/v2/viewed/{period}.json\n";
const NYT_KEY = process.env.REACT_APP_NYT_KEY;

export const textSearch = async (query)=> {
    //const response = await axios.get(`${NYT_API}/shared/${query}.json&apikey=${NYT_KEY}`);
    console.log(NYT_KEY);
    const response = await axios.get(`https://api.nytimes.com/svc/mostpopular/v2/shared/${query}.json?&api-key=${NYT_KEY}`);

        return response.data;
}