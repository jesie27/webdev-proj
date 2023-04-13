import React, {useState} from "react";

function NytSearchScreen() {
    const [search, setSearch] = useState("");
    return (
        <div>
            <h1>NYT Search Screen</h1>
            <input
                className="form-control w-50"
                type="text"
                value={search}
                onChange={(e)=> setSearch(e.target.value)}
            />
            <button className="btn btn-primary">Search</button>
        </div>
    )
}
export default NytSearchScreen;