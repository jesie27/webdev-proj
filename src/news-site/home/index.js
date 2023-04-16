import React, {useEffect, useState} from "react";
import {searchMostViewed} from "../../nyt/nyt-service";
import {Link} from "react-router-dom";
const HomeComponent = () => {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    const searchNyt = async() => {
        const response = await searchMostViewed(1);
        setResults(response);
        console.log(response);
        ;
    }
    const homeResults = searchNyt();

    return (
        <div>
            <h1>Home</h1>
            <ul className="list-group mt-3">
            {results.results && results.results.map((results) => (
                <li className="list-group-item"  key={results.id}>
                    <div className="mt-2">{results.published_date}</div>
                    <Link to={results.url}><h3>{results.title}</h3></Link>
                    <div>{results.byline}</div>
                    <Link to={`/nyt/popular-article/${results.id}`}>
                        <div className="mb-2">{results.abstract}</div>
                    </Link>
                    <img src=""/>
                </li>))}
        </ul>


            <h2></h2>
            <pre>{JSON.stringify(results, null, 2)}</pre>
            <h2>{}</h2>
        </div>
    );
}
export default HomeComponent;