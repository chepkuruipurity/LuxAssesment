let quiz= document.getElementById('quiz');
let results= document.getElementById('results');
let submit= document.getElementById('submit');

let questions= [ {
    question: "Who invented JavaScript?",
    choices: {
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich"
    },
    answer: "c"
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    choices: {
      a: "Node.js",
      b: "TypeScript",
      c: "npm"
    },
    answer: "c"
  },
  {
    question: "Which tool can you use to ensure code quality?",
    choices: {
      a: "Angular",
      b: "jQuery",
      c: "RequireJS",
      d: "ESLint"
    },
    answer: "d"
  }
];
function showQuestions(){
let results=[];
for (let i=0; i<questions.length;i++){
  let choices=[];
  for(let choice in questions[i].choices){
    choices.push(
      '<label>'
      + '<input type="radio" name="question'+i+'" value="'+choice+'">'
					+ choice + ': '
					+ questions[i].choices[choice]
      + '</label>'

    );
  }
  results.push(
    '<div class="questions">'+ questions[i].question + '</div>'+
    '<div class="choices" >'+ choices.join('')+ '</div>'
  );
}
quiz.innerHTML= results.join('');
};
function getResults(){
let answers= quiz.querySelectorAll('.choices');
console.log(answers)
let chosenAnswer= '';
let correctNum=0;

for(let i =0; i<questions.length;i++){
  chosenAnswer= (answers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
  if(chosenAnswer === questions[i].answer){
    correctNum++;
    answers[i].style.color="light-green"
  } else{
    answers[i].style.color="red"
  }
}
results.innerHTML= correctNum + 'out of ' + questions.length;
};

showQuestions();

submit.addEventListener('click',getResults)