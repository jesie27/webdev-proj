import React, {useState} from "react";
import {textSearch} from "./nyt-service";

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
            <input
                className="form-control w-50"
                type="text"
                value={search}
                onChange={(e)=> setSearch(e.target.value)}
            />
            <button onClick={searchNyt} className="btn btn-primary">Search</button>
            <div className="table-responsive">
                <table className="table">
                    <tbody>
                        <tr>
                            {results.results && results.results.map((results) => (
                            <td>
                                <h3>{results.id}</h3>
                            </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>


            <pre>
                {JSON.stringify(results, null, 2)}
            </pre>
        </div>
    )
}
export default NytSearchScreen;