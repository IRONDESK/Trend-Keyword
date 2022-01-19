import { useState, useEffect } from "react";

import Namu from '../data/Namu';
import Nate from '../data/Nate';

function Main() {
    
    function onClick () {
        const Cont = document.querySelector(".cont");
        const SearchInput = document.getElementById("SearchInput");
        Cont.addEventListener('click', (e) => {
            const here = e.target.dataset.value;
            if (here == undefined) {
                return
            }
            SearchInput.value = here;
        })
    }

    return (
        <main>
            <article className="input-cont">
                <form action="https://search.naver.com/search.naver" id="SearchForm">
                    <input type="text" name="query" id="SearchInput" placeholder="Search in NAVER"/>
                    <button type="submit" id="SearchBtn"></button>
                </form>
            </article>
            <article className="cont" onClick={onClick}>
                <Namu />
                <Nate />
            </article>
        </main>
    );
}

export default Main;
