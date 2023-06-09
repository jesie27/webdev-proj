import axios from "axios";
const NYT_API = "https://api.nytimes.com/svc/mostpopular/v2/viewed/{period}.json\n";
const NYT_KEY = process.env.REACT_APP_NYT_KEY;

export const searchMostShared = async (query)=> {
    const response = await axios.get(`https://api.nytimes.com/svc/mostpopular/v2/shared/${query}.json?&api-key=${NYT_KEY}`);
    console.log(response);
    return response.data;
}

export const searchMostViewed = async (query)=> {
    const response = await axios.get(`https://api.nytimes.com/svc/mostpopular/v2/viewed/${query}.json?&api-key=${NYT_KEY}`);
    console.log(response);
    return response.data;
}

export const generalSearch = async (query)=> {
    const response = await axios.get(`https://api.nytimes.com/svc/search/v2//articlesearch.json?q=${query}&fq=source:("The New York Times")
&api-key=${NYT_KEY}`);

    console.log(response);

    return response.data.response;
}

// export const getArticle = async(articleID) => {
//     const response = await axios.get(`https://api.nytimes.com/svc/mostpopular/v2/shared/${articleID}.json?&api-key=${NYT_KEY}`);
// return response.data.id;
// }

export const getArticle = async(headline) => {
  //  const response = await axios.get(`https://api.nytimes.com/svc/search/v2//articlesearch.json?&fq=headline:(${headline})
//&api-key=${NYT_KEY}`);
    const response = await axios.get(`https://api.nytimes.com/svc/search/v2//articlesearch.json?&q=${headline})
&api-key=${NYT_KEY}`);
  //const response = fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${NYT_KEY}&fq=headline.main:(${headline})`)
//const response = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?&fq=headline.main:(${headline})&api-key=${NYT_KEY}`);
return response.data.response.docs[0];
}
