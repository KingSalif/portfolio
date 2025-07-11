const questions = [
    { question: "C'est quoi mon nom ?", reponses: ["Maazou", "Mourtala", "Salifou", "Madi"], correct:2 },
    { question: "Salifou Ayouba est etudiant en ?", reponses: ["Medecine", "Informatique", "Droit", "Mathematique"], correct: 1 },
    { question: "Quel est le plus grand pays du monde par superficie ?", reponses: ["Canada", "Chine", "Russie", "Etats-Unis"], correct:2 },
    { question: "Je suis etudiant à L'Université ?", reponses: ["Abdou Moumouni", "Islamique",  "ESCEP", "ADU"], correct: 0 },
    { question: "Combien de dents a un adulte en général ?", reponses: ["28", "30", "36", "32"], correct:3 },
    { question: "Le langage du Web ?", reponses: ["Python", "Java", "C++", "HTML"], correct: 3 },
    { question: "Quel est l'élément chimique dont le symbole est O ?", reponses: ["Or", "Oxygène", "Osmium", "Ozone"], correct:1 },
    { question: "Qui a créé Facebook ?", reponses: ["Elon Musk", "Mark Zuckerberg", "Bill Gates", "Jeff Bezos"], correct: 1 },
    { question: "Quel est le mot le plus utiliser au monde ?", reponses: ["Merci", "Bonjour", "OK", "Argent"], correct:2 },
    { question: "Qui est le plus riche du monde ?", reponses: ["MArk Zukerberg", "Bill Gates", "Dan Goté", "Elon Musk"], correct:3 }
    ];
    let shuffledQuestions = [];
    let questionIndex = 0;
    let score = 0;
    let timer;
    let timeLeft = 20;
    function melangerQuestions() {
    shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
    }
    function demarrerMinuteur() {
    timeLeft = 20;
    document.getElementById("timer").innerText = `Temps restant : ${timeLeft}s`;
    clearInterval(timer);
    timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").innerText = `Temps restant : ${timeLeft}s`;
    if (timeLeft <= 0) {
    clearInterval(timer);
    alert("Temps écoulé !");
    passerQuestion();
    }
    }, 1000);
    }
    function afficherQuestion() {
    if (questionIndex >= shuffledQuestions.length) {
    afficherResultat();
    return;
    }
    demarrerMinuteur();
    let q = shuffledQuestions[questionIndex];
    document.getElementById("question").innerText = q.question;
    let buttonsDiv = document.getElementById("buttons");
    buttonsDiv.innerHTML = "";
    q.reponses.forEach((reponse, index) => {
    let btn = document.createElement("button");
    btn.innerText = (index + 1) + ". " + reponse;
    btn.onclick = () => verifierReponse(index);
    buttonsDiv.appendChild(btn);
    });
    }
    function verifierReponse(indexChoisi) {
    clearInterval(timer);
    let bonneReponse = shuffledQuestions[questionIndex].correct;
    if (indexChoisi === bonneReponse) {
    score += 2;
    alert("Bonne réponse !");
    } else {
    alert(`Mauvaise réponse ! La bonne réponse était :
    ${shuffledQuestions[questionIndex].reponses[bonneReponse]}`);
    }
    passerQuestion();
    }
    function passerQuestion() {
    questionIndex++;
    afficherQuestion();
    }
    function afficherResultat() {
        a=prompt("Entrez votre nom pour voir ta note:")
    document.getElementById("quiz").style.display = "none";
    let note = ` Félicitation ${a} Votre note est : ${score} / 20`;
    let pourcentage = `Soit : ${(score / 20) * 100}%`;
    document.getElementById("resultat").style.display = "block";
    document.getElementById("resultat").innerHTML = `${note}<br>${pourcentage}`;
    }
    melangerQuestions();
    afficherQuestion();