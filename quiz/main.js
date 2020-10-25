let quiz = document.getElementById("quiz");
let choices = document.getElementById("choices");
let results = document.getElementById("results");
let result = document.querySelector(".result");
let submit = document.getElementById("submit");
let container = document.querySelector(".container");
let next = document.getElementById("next");
let start = document.querySelector(".start");
let startBtn = document.getElementById("start");
let total = document.querySelector(".total");
let restart = document.getElementById("restart");

let quizNum = 1;
let quizCount = 0;
let score = 0;
let questions = [
  {
    no: 1,
    question: "Who invented JavaScript?",
    choices: [
      "Douglas Crockford",
      "Sheryl Sandberg",
      "Brendan Eich",
      "Marc Cherry",
    ],
    answer: "Brendan Eich",
  },
  {
    no: 2,
    question: "Which one of these is a JavaScript package manager?",
    choices: ["Node.js", "TypeScript", "npm", "React"],

    answer: "npm",
  },
  {
    no: 3,
    question: "Which tool can you use to ensure code quality?",
    choices: ["Angular", "jQuery", "RequireJS", "ESLint"],

    answer: "ESLint",
  },
  {
    no: 4,
    question: "What does SQL stand for?",

    choices: [
      "Stylish Question Language",
      "Stylesheet Query Language",
      "Statement Question Language",
      "Structured Query Language",
    ],
    answer: "Structured Query Language",
  },
  {
    no: 5,
    question: "What does XML stand for?",

    choices: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language",
    ],
    answer: "eXtensible Markup Language",
  },
];
startBtn.onclick = () => {
  container.classList.add("active");
  start.classList.add("inactive");
  showQuestions(0);
  quizCounter(1);
  next.classList.add("hide");
};
next.onclick = () => {
  if (quizCount < questions.length - 1) {
    quizCount++;
    quizNum++;
    showQuestions(quizCount);
    quizCounter(quizNum);
    next.classList.add("hide");
  } else {
    showResults();
  }
};
restart.onclick = () => {
  location.reload();
  false;
};
function quizCounter(index) {
  let totalQuiz =
    "<span>" + index + " of " + questions.length + " Questions</span>";
  total.innerHTML = totalQuiz;
}
function showQuestions(index) {
  let quizTag =
    "<span>" +
    questions[index].no +
    ". " +
    questions[index].question +
    "</span>";
  let options =
    '<div class="option"><span>' +
    questions[index].choices[0] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].choices[1] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].choices[2] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].choices[3] +
    "</span></div>";
  quiz.innerHTML = quizTag;
  choices.innerHTML = options;

  let option = choices.querySelectorAll(".option");
  for (let i of option) {
    i.setAttribute("onClick", "getResults(this)");
  }
}
function getResults(option) {
  let choice = option.textContent;
  let answer = questions[quizCount].answer;
  let allChoices = choices.children.length;

  if (choice == answer) {
    score += 1;
    option.classList.add("correct");
  } else {
    option.classList.add("incorrect");

    for (let i = 0; i < allChoices.length; i++) {
      if (choices.children[i].textContent == answer) {
        choices.children[i].setAttribute("class", "option correct");
      }
    }
  }
  for (let i = 0; i < allChoices; i++) {
    choices.children[i].classList.add("disabled");
  }
  next.classList.add("show");
}
function showResults() {
  container.classList.add("inactive");
  result.classList.add("active");
  if (score > 3) {
    let scoreTag =
      "<span>and congrats! 🎉, You got <p>" +
      score +
      "</p> out of <p>" +
      questions.length +
      "</p></span>";
    results.innerHTML = scoreTag;
  } else if (score > 1) {
    
    let scoreTag =
      "<span>and nice 😎, You got <p>" +
      score +
      "</p> out of <p>" +
      questions.length +
      "</p></span>";
    results.innerHTML = scoreTag;
  } else {
    
    let scoreTag =
      "<span>and sorry 😐, You got only <p>" +
      score +
      "</p> out of <p>" +
      questions.length +
      "</p></span>";
    results.innerHTML = scoreTag;
  }
}
