const voteKey = "hasVoted";

const voteCounts = {
    call: Number(localStorage.getItem("callVotes")) || 0,
    storage: Number(localStorage.getItem("storageVotes")) || 0
}

function preventRepeatVoting() {
    if(sessionStorage.getItem(voteKey) || document.cookie.includes("hasVoted==true")) {
        alert("You have already voted");
        return true;
    }
    return false;
}

function updateVote(option) {
    if(preventRepeatVoting()) return;

    voteCounts[option]++;
    localStorage.setItem(`${option}Votes`, voteCounts[option]);
    sessionStorage.setItem(voteKey, true);
    document.cookie = "hasVoted=true; max-age=3600; path='/";
    displayResult.call(null, voteCounts)
}

function displayResult(results) {
    const resDiv = document.getElementById("results");
    resDiv.innerHTML = `
    .call() votes: ${results.call}<br>
    localStorageVotes: ${results.storage}
    `;
}

if(typeof(voteCounts.call) === "undefined" || voteCounts.call === null) {
    voteCounts.call = 0
}

if(typeof(voteCounts.storage) === "undefined" || voteCounts.storage === null) {
    voteCounts.storage = 0
}

document.getElementById("voteCall").addEventListener("click", () => updateVote("call"));
document.getElementById("voteStorage").addEventListener("click", ()=> updateVote("storage"));

displayResult.call(null, voteCounts)