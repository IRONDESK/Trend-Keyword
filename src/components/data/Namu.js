const GetNamu = async () => {
    const resp = await fetch("https://search.namu.wiki/api/ranking");
    const json = await resp.json();
    return json;
}
GetNamu();