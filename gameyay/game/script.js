async function saveHighScore(score) {
    await fetch("http://localhost:3000/score", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            score: score
        })
    });
}
