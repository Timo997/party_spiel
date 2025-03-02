let lobbyCode = "";
let players = [];

// Funktion zum Erstellen einer Lobby
document.getElementById("create-lobby").addEventListener("click", function() {
    lobbyCode = generateLobbyCode();
    document.getElementById("lobby-code").textContent = lobbyCode;
    document.getElementById("lobby-code-display").style.display = "block";
    document.getElementById("start-game").style.display = "none";  // Zeigt erst "Starten", wenn Spieler da sind
});

// Funktion zum Beitreten einer Lobby
document.getElementById("join-lobby").addEventListener("click", function() {
    let code = document.getElementById("join-code").value;
    if (code === lobbyCode) {
        players.push(prompt("Deinen Namen eingeben:"));
        alert("Du bist der Lobby beigetreten!");
        document.getElementById("lobby-code-display").style.display = "none";
        document.getElementById("start-game").style.display = "block";
    } else {
        alert("Falscher Code, versuch's nochmal.");
    }
});

// Spiel starten
document.getElementById("start-game").addEventListener("click", function() {
    document.getElementById("game-container").style.display = "block";
    document.getElementById("lobby-container").style.display = "none";
    startQuiz();
});

// Zufallscode generieren für Lobby
function generateLobbyCode() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "";
    for (let i = 0; i < 6; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
}

// Quiz starten
function startQuiz() {
    const questionData = {
        question: "Was ist die Hauptstadt von Frankreich?",
        answers: ["Paris", "Berlin", "Madrid", "Rom"],
        correctAnswer: "Paris"
    };

    document.getElementById("question").textContent = questionData.question;

    let answersHTML = "";
    questionData.answers.forEach((answer, index) => {
        answersHTML += `<button onclick="checkAnswer('${answer}')">${answer}</button>`;
    });
    document.getElementById("answers").innerHTML = answersHTML;
}

// Antwort überprüfen
function checkAnswer(selectedAnswer) {
    const correctAnswer = "Paris";
    if (selectedAnswer === correctAnswer) {
        alert("Richtig!");
    } else {
        alert("Falsch, die richtige Antwort ist: " + correctAnswer);
    }
    // Für nächste Runde vorbereiten oder Spiel beenden
}
