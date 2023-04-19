import React, {useEffect, useState} from "react";
import {searchMostViewed} from "../../nyt/nyt-service.js";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
const HomeComponent = () => {
    const {currentUser} = useSelector((state) => state.users)
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
            <div>
                {currentUser && (
                    <div>
                        <h3>Welcome {currentUser.firstName} {currentUser.lastName}!</h3>
                    </div>
                )}
            </div>
            <ul className="list-group mt-3">
            {results.results && results.results.map((results) => (
                <li className="list-group-item"  key={results.id}>
                    <div className="mt-2">{results.published_date}</div>
                    <Link to={results.url}><h3>{results.title}</h3></Link>
                    <div>{results.byline}</div>
                        <div className="mb-2">{results.abstract}</div>
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