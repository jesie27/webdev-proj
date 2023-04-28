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
            <div className="mb-2"><img className="rounded-circle" height={140} width={700}
                 src={require('./nyt.jpg')}/></div>
            <div className="mb-2">Search for NYT articles using keywords</div>

            <input
                className="form-control w-80"
                type="text"
                value={search}
                onChange={(e)=> setSearch(e.target.value)}
            />
            <div className="mt-3"><button onClick={searchNyt} className="btn btn-primary">Search</button></div>
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
                    </li>))}

            </ul>

            {/*<pre>{JSON.stringify(results, null, 2)}*/}
            {/*</pre>*/}
        </div>
    )
}
export default NytGeneralScreen;
