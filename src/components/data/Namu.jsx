import { useState, useEffect } from "react";

function Namu() {
    const [NamuRank, setNamuRank] = useState([]);
    const getNamu = async () => {
        const resp = await fetch("https://search.namu.wiki/api/ranking");
        const json = await resp.json();
        setNamuRank(json);
    }
    useEffect(() => { getNamu() }, []);

    return(
        <div className="rankcont">
            {NamuRank.map((value, index) =>
            <li data-value={value}>
                <span data-value={value} className="rankNum">{index + 1}</span>
                <span data-value={value} className="rankKeyword">{value}</span>
            </li>)}
        </div>
    );
}

export default Namu;