import React, {useState} from "react";
import {textSearch} from "./nyt-service";
import {Link} from "react-router-dom";

function NytSearchScreen() {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    const searchNyt = async() => {
        const response = await textSearch(search);
        setResults(response);
        console.log(response);

;
    }
    return (
        <div>
            <h1>Most Popular NYT Articles</h1>
            <div>Search for the most popular NYT articles for a specified period of time. Only select 1, 7, or 30 days.</div>

            <input
                className="form-control w-50"
                type="text"
                value={search}
                onChange={(e)=> setSearch(e.target.value)}
            />
            <button onClick={searchNyt} className="btn btn-primary">Search</button>

            <ul className="list-group mt-3">
                {results.results && results.results.map((results) => (
            <li className="list-group-item">
                <div className="mt-2">{results.published_date}</div>
                <Link to={results.url}><h3>{results.title}</h3></Link>
                <div>{results.byline}</div>
                <Link to={`/nyt/article/${results.id}`}>
                    <div className="mb-2">{results.abstract}</div>
                </Link>
            </li>))}
            </ul>


            <pre>{JSON.stringify(results, null, 2)}
            </pre>
        </div>
    )
}
export default NytSearchScreen;
//{results.media.["media-metadata"][0].url}