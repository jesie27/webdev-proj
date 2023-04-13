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
        </div>
    )
}
export default NytSearchScreen;