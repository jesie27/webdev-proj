import React, {useEffect, useState} from "react";
import {searchMostViewed} from "../../nyt/nyt-service";
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
            <h2></h2>
            <pre>{JSON.stringify(results, null, 2)}</pre>
            <h2>{}</h2>
        </div>
    );
}
export default HomeComponent;