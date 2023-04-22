import React, {useState, useEffect} from "react";
import {generalSearch} from "./nyt-service.js";
import {Link, useNavigate, useParams} from "react-router-dom";

function NytGeneralScreen() {
    const {searchTerm} = useParams();
    const [search, setSearch] = useState(searchTerm);
    const navigate  = useNavigate();
    const [results, setResults] = useState({});
    const searchNyt = async() => {
        const response = await generalSearch(search);
        setResults(response);
        navigate(`/news/general-search/${search}`)
        console.log(response);
    }
    useEffect(() => {
        if(searchTerm) {
            searchNyt();
        }
        }, [searchTerm]
    );
    return (
        <div>
            <h1>General NYT Article Search</h1>
            <div>Search for NYT articles using keywords</div>

            <input
                className="form-control w-50"
                type="text"
                value={search}
                onChange={(e)=> setSearch(e.target.value)}
            />
            <button onClick={searchNyt} className="btn btn-primary">Search</button>
            <ul className="list-group mt-3">
                {results.docs && results.docs.map((docs) => (
                    <li className="list-group-item">
                        <div>{docs.pub_date}</div>

                        <Link to={docs.web_url}><h3>{docs.headline.main}</h3>
                        </Link>

                        <div>{docs.byline.original}</div>
                        {/*<Link to={`/news/general-article/${docs.headline.main}`}>*/}
                        {/*    <div className="mb-2">{docs.abstract}</div>*/}
                        {/*</Link>*/}
                        <Link to={`/news/general-article/${docs.headline.main}`}>
                            <div className="mb-2">{docs.abstract}</div>
                        </Link>
                        <div><img src="${docs.multimedia[0].url}"/></div>
                    </li>))}

            </ul>

            <pre>{JSON.stringify(results, null, 2)}
            </pre>
        </div>
    )
}
export default NytGeneralScreen;
