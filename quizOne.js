// Array of questions in the quiz
let questions = [
    {
        prompt: `Who won the 1996 Ballon D'Or?`,
        options: ["<George Weah>", "<Ricardo Kaka>", "<Matthias Sammer>", "<Hirst Stoichov>"],
        answer: "<Matthias Sammer>",
    },
    {
        prompt: `Which of the following clubs have not won a Treble?`,
        options: ["Celtic", "PSV Eindhoven", "Atletico Madrid", "Ajax"],
        answer: "Atletico Madrid",
    },
    {
        prompt: `Which GoalKeeper has won the Ballon D'Or?`,
        options: ["Lev Yashin", "Oliver Kahn", "Van Der Sar", "Casillas"],
        answer: "Lev Yashin",
    },
    {
        prompt: `Which of these players has never won a Ballon D'Or?` ,
        options: ["Paolo Maldini", "Javier Zanetti", "Ricardo Kaka", "Ronaldo De Fenomeno"],
        answer: "Javier Zanetti",
     },
     {
        prompt: `Which of these trios didnt win the UCL?` ,
        options: ["Iniesta, Xavi, Busquets", "Maldini, Nesta, Costarcuta", "Del Pierro, Baggio, Ronaldinho", "Philip Lahm, Ribery, Robben"],
        answer: "Del Pierro, Baggio, Ronaldinho",
     },
     {
        prompt: `Which of these players didn't play for Manchester United?` ,
        options: ["Eric Cantona", "Roy Keane", "Ian Wright", "Gary Pallister"],
        answer: "Ian Wright",
     },
     {
        prompt: `Which of these players hasnt won a Ballon D'Or?` ,
        options: ["Fabio Cannavaro", "Michael Owen", "Pavel Nedved", "Gary Mallo"],
        answer: "Gary Mallo",
     },
     {
        prompt: `Which of these players has won the number 8 jersey?` ,
        options: ["Ronaldinho", "Gennaro Gattuso", "Denis Law", "Berbatov"],
        answer: "Gennaro Gattuso",
     },
     {
        prompt: `Which of these players didn't play for Barcelona?` ,
        options: ["Ronald Koeman", "Soler Miquel", "Carlos Busquets", "Lothar Mathaus"],
        answer: "Lothar Mathaus",
     },
     {
        prompt: `Which of these players has never played alongside Ronaldo and Messi?` ,
        options: ["Nani", "Dybala", "Di Maria"],
        answer: "Nani",
     },
     {
        prompt: `Which of these players didn't play for Manchester City?` ,
        options: ["Thiago Motta", "Adebayor", "Edin Dzeko", "James Milner"],
        answer: "Thiago Motta",
     },
     {
        prompt: `Who is Liverpool's all-time top goal-scorer` ,
        options: ["Mohammed Salah", "Ian Rush", "Fernando Torrres", "Steven Gerrard"],
        answer: "Ian Rush",
     },
    {
        prompt: `How many World Cups does Pele have?`,
        options: ["0", "1", "5", "3"],
        answer: "3",
    },
    {
        prompt: `Who was the manager that led Inter Milan to their Historic 2010 Treble success?`,
        options: ["Mauricio Pochettino", "Pep Guardiola", "Van Gaal", "Jose Mourinho"],
        answer: "Jose Mourinho",
    },
    {
        prompt:   `Which team hosted and won the 2018 World Cup?`,
        options:  ["Russia & France", "Italy & Argentina", "Brazil & England", "Denmark & Germany"],
        answer:   "Russia & France",
    },
    {
        prompt: `Which of these players didn't play for Ajax?` ,
        options: ["Rafa Marquez", "Steven Bergwijn", "Jurrien Timber", "Marco Van Basten"],
        answer: "Rafa Marquez",
     },
     {
        prompt: `Which of these players is not an Argentine?` ,
        options: ["Tevez", "Batistuta", "Marcelo Bielsa", "Gary Pallister"],
        answer: "Gary Pallister",
     },
    {
       prompt: `Which team won the 2014 World Cup?` ,
       options: ["Germany", "Argentina", "France", "Brazil"],
       answer: "Germany",
    },
    {
        prompt: `Who was Arsenal's iconic number 14 French man?` ,
        options: ["Denis Bergkamp", "Leandro Trossard", "Thierry Henry", "Carlos Alberto"],
        answer: "Thierry Henry",
     },
     {
        prompt: `Which team owns the Molineux stadium?` ,
        options: ["Luton", "Brentford", "Barnsley", "Wolves"],
        answer: "Wolves",
     },
     {
        prompt: `Which of these Barcelona Legends was from Netherlands?` ,
        options: ["Johan Cruyff", "Deco", "Victor Valdes", "Carles Puyol"],
        answer: "Johan Cruyff",
     },
     {
        prompt: `Which of these Barcelona Coaches started the Tiki-Taka style of football?` ,
        options: ["Van Gaal", "Luis Enrique", "Frank Rijkaard", "sylvinho", "Johan Cruyff"],
        answer: "Johan Cruyff",
     },
     {
        prompt: `Which of the following players never played as a RB during his footballing career?` ,
        options: ["Cafu", "Javier Zanetti", "Sergio Ramos", "Wesley Sneijder"],
        answer: "Wesley Sneijder",
     },
     {
        prompt: `In What year did Modrich win his Ballon D'Or?` ,
        options: ["2018", "2002", "2022", "2020"],
        answer: "2018",
     },
     {
        prompt: `What position did Dani Alves play while at Barcelona?` ,
        options: ["Right-Back", "Centre-Back", "Left-Midfielder", "Right-Winger"],
        answer: "Right-Back",
     },
     {
        prompt: `Which of the following players was not of Italian Nationality?` ,
        options: ["Marco Van Basten", "Fabio Cannavaro", "Nesta", "Francesco Totti"],
        answer: "Marco Van Basten",
     },
      {
        prompt: `Which of the following Managers led AC Milan to their 2021 League title?` ,
        options: ["Stefano Pioli", "Gary Neville", "Ruud Van Nistelrooy", "Antonio Conte"],
        answer: "Stefano Pioli",
     },
];

// Get DOM Elements
const questionsEl = document.querySelector("#questions");
const timerEl = document.querySelector("#timer");
const choicesEl = document.querySelector("#options");
const submitBtn = document.querySelector("#submit-score");
const startBtn = document.querySelector("#start");
const nameEl = document.querySelector("#name");
const feedbackEl = document.querySelector("#feedback");
const reStartBtn = document.querySelector("#restart");

// Quiz's initial state
let currentQuestionIndex = 0;
let time = questions.length * 2;
let timerId;

// Start quiz and hide frontpage
function quizStart() {
    // Initialize timer
    timerId = setInterval(clockTick, 1000);
    timerEl.textContent = time;
    
    // Hide the start screen
    document.getElementById("start-screen").classList.add("hide");

    // Show the questions section
    questionsEl.classList.remove("hide");

    // Load the first question
    getQuestion();
}

// Loop through array of questions and answers and create list with buttons
function getQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question-words").textContent = currentQuestion.prompt;
    choicesEl.innerHTML = "";

    // Create buttons for each answer choice
    currentQuestion.options.forEach((choice, i) => {
        const choiceBtn = document.createElement("button");
        choiceBtn.setAttribute("value", choice);
        choiceBtn.textContent = `${i + 1}. ${choice}`;
        choiceBtn.addEventListener("click", questionClick);
        choicesEl.appendChild(choiceBtn);
    });
}

// Check for right answers and deduct time for wrong answer, go to next question
function questionClick() {
    if (this.value !== questions[currentQuestionIndex].answer) {
        time = Math.max(time - 2, 0); // Deduct 2 seconds if the answer is wrong
        timerEl.textContent = time;
        feedbackEl.textContent = `Wrong! The correct answer was ${questions[currentQuestionIndex].answer}.`;
        feedbackEl.style.color = "red";
    } else {
        feedbackEl.textContent = "Correct!";
        feedbackEl.style.color = "green";
    }

    // Display feedback and hide it after 5 seconds
    feedbackEl.classList.remove("hide");
    setTimeout(() => feedbackEl.classList.add("hide"), 2000);

    // Move to the next question
    currentQuestionIndex++;
    
    // If all questions are done, end the quiz; otherwise, load the next question
    if (currentQuestionIndex === questions.length) {
        quizEnd();
    } else {
        getQuestion();
    }
}

// End quiz by hiding questions, stop timer and show final score
function quizEnd() {
    clearInterval(timerId); // Stop the timer

    // Show the end screen
    document.getElementById("quiz-end").classList.remove("hide");

    // Show the final score
    document.getElementById("score-final").textContent = time;

    // Hide the questions section
    questionsEl.classList.add("hide");
}

// Timer function that counts down
function clockTick() {
    time--;
    timerEl.textContent = time;
    
    // If time runs out, the quiz ends
    if (time <= 0) {
        quizEnd();
    }
}

// Save score in local storage along with user's name
function saveHighscore() {
    const name = nameEl.value.trim();
    if (name !== "") {
        let highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
        const newScore = { score: time, name: name };
        highscores.push(newScore);
        window.localStorage.setItem("highscores", JSON.stringify(highscores));
        alert("Your Score has been Submitted");
    }
}

// Save user's score after pressing Enter
function checkForEnter(event) {
    if (event.key === "Enter") {
        saveHighscore();
        alert("Your Score has been Submitted");
    }
}
nameEl.addEventListener("keyup", checkForEnter);

// Save user's score after clicking Submit
submitBtn.addEventListener("click", saveHighscore);

// Start quiz after clicking Start Quiz
startBtn.addEventListener("click", quizStart);
