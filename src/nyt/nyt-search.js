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
            <h1>NYT Search Screen</h1>
            <div>Search for the most popular NYT articles for a specified period of time. Only select 1, 7, or 30 days</div>

            <input
                className="form-control w-50"
                type="text"
                value={search}
                onChange={(e)=> setSearch(e.target.value)}
            />
            <button onClick={searchNyt} className="btn btn-primary">Search</button>
            <div className="table-responsive">
                <table className="table border-3">
                    <tbody>
                        <tc>
                            {results.results && results.results.map((results) => (

                            <td>
                                <div>{results.published_date}</div>

                                <Link to={results.url}><h3>{results.title}</h3></Link>
                                {results.abstract}
                            </td>

                            ))}
                        </tc>
                    </tbody>
                </table>
            </div>


            <pre>{JSON.stringify(results, null, 2)}
            </pre>
        </div>
    )
}
export default NytSearchScreen;