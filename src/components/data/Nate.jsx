import { useState, useEffect } from "react";

function Nate() {
    const [NateRank, setNateRank] = useState([]);
    const getNate = async () => {
        const resp = await fetch("https://cors-anywhere.herokuapp.com/https://www.nate.com/js/data/jsonLiveKeywordDataV1.js?v=", {
            "Content-Type": "charset=utf-8",
        });
        const json = await resp.json();
        setNateRank(json);
    }
    useEffect(() => { getNate() }, []);

    return(
        <div className="rankcont">
            {NateRank.map((value, index) =>
            <li data-value={value}>
                <span data-value={value} className="rankNum">{index + 1}</span>
                <span data-value={value} className="rankKeyword">{value[1]}</span>
            </li>)}
        </div>
    );
}

export default Nate;