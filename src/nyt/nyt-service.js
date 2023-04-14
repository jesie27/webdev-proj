import axios from "axios";
const NYT_API = "https://api.nytimes.com/svc/mostpopular/v2/viewed/{period}.json\n";
const NYT_KEY = process.env.REACT_APP_NYT_KEY;

export const searchMostShared = async (query)=> {
    const response = await axios.get(`https://api.nytimes.com/svc/mostpopular/v2/shared/${query}.json?&api-key=${NYT_KEY}`);
    console.log(response);
    return response.data;
}

export const generalSearch = async (query)=> {
    //const response = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch${query}.json?&api-key=${NYT_KEY}`);
    const response = await axios.get(`https://api.nytimes.com/svc/search/v2//articlesearch.json?q=${query}&fq=source:("The New York Times")
&api-key=${NYT_KEY}`);

    console.log(response);
    return response.data.response;
}