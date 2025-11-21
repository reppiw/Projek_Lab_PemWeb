async function loadHighscores() {
    const res = await fetch("http://localhost:3000/highscores");
    const scores = await res.json();

    const list = document.getElementById("highscoreList");
    list.innerHTML = "";

    scores.forEach((s, i) => {
        const li = document.createElement("li");
        li.textContent = `${i + 1}. ${s.name} — ${s.score}`;
        list.appendChild(li);
    });
}

async function saveScore() {
    const name = document.getElementById("playerName").value.trim();
    const score = currentScore;

    if (!name) {
        alert("enter your name!");
        return;
    }

    await fetch("http://localhost:3000/highscores", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, score })
    });

    loadHighscores();
}

async function resetHighscores() {
    await fetch("http://localhost:3000/highscores", { method: "DELETE" });
    loadHighscores();
}
