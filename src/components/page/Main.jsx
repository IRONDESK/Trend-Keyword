import { useState, useEffect } from "react";

function Main() {
    // Namu
    const [NamuRank, setNamuRank] = useState([]);
    const getNamu = async () => {
        const resp = await fetch("https://search.namu.wiki/api/ranking");
        const json = await resp.json();
        setNamuRank(json);
    }
    useEffect(() => { getNamu() }, []);

    // Nate
    const [NateRank, setNateRank] = useState([]);
    const getNate = async () => {
        const resp = await fetch("https://www.nate.com/js/data/jsonLiveKeywordDataV1.js");
        const json = await resp.json();
        setNateRank(json);
    }
    useEffect(() => { getNate() }, []);
    

    
    return (
        <div>
            <ul>
                {NamuRank.map((i) => <li>{i}</li>)}
            </ul>
            <ul>
                {NateRank.map((i) => <li>{i}</li>)}
            </ul>
        </div>
    );
}

export default Main;
