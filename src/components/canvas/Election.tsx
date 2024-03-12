import React from "react";

let hash = new Map([
    ["upclick","&#9650;"],
    ["downclick","&#9660;"]
]);

export function Preferences() {
    return ( 
        <div id="select">
            <select id="inds" defaultValue="county">
                <option value="county">County</option>
                <option value="state">State</option>
                <option value="race">Race</option>
                <option value="gender">Sex</option>
                <option value="age">Age</option>
                <option value="education">Education</option>
            </select>
        </div>
    )
}

export function Search() {
    return (
        <div id="formholder" >
            <span id="searchform">
                <input type="text" id="myVal" size="30" placeholder="NY, WI, Los Angeles County" />
                <input id="search" name="Submit" type="button" value="Search" onclick={handleClick} />
                <input type="button" value="X" onclick={reset} />
            </span>
            <form id="areaform">
                Weight:
                <input type="radio" name="area" value="vote"  checked />Vote
                <input type="radio" name="area" value="electoral" /> Electoral
                <input type="radio" name="area" value="vpi" />VPI<br />
            </form>
        </div>
    )
}

export function Buttons(handle) {
    const key = handle;
    return (
        <button className="incrbtn" id={key}>{hash.get(key)}</button>
    )
}


