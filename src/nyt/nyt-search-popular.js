import React, {useState} from "react";
import {searchMostShared, searchMostSharedPics} from "./nyt-service";
import {Link} from "react-router-dom";

function NytSearchPopularScreen() {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    const [pics, setPics] = useState([]);
    const searchNyt = async() => {
        const response = await searchMostShared(search);
        setResults(response);
        console.log(response);
;
    }
    console.log(results)


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
            <li className="list-group-item"  key={results.id}>
                <div className="mt-2">{results.published_date}</div>
                <Link to={results.url}><h3>{results.title}</h3></Link>
                <div>{results.byline}</div>
                <Link to={`/nyt/popular-article/${results.id}`}>
                    <div className="mb-2">{results.abstract}</div>
                </Link>
                    <img src="{results.media['media-metadata'][0].url}"/>

        </li>))}
            </ul>


            <pre>{JSON.stringify(results, null, 2)}
            </pre>
        </div>
    )

}
export default NytSearchPopularScreen;
//{results.media.["media-metadata"][0].url}