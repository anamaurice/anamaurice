const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex;

let respostaA = document.getElementById('A');
let respostaB = document.getElementById('B');
let respostaC = document.getElementById('C');


startButton.addEventListener('click', function(){
   setNextQuestion();
});

respostaB.addEventListener('click', function(){
   setNextQuestion();
});

respostaC.addEventListener('click', function(){
   setNextQuestion();
});


startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
   currentQuestionIndex++;
   setNextQuestion();
 });

function startGame() {
  startButton.classList.add('hide');
  shuffledQuestions = questions.sort(() => Math.random() - .5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove('hide');
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  
}

function resetState() {
//   nextButton.classList.add('hide');
//   while (answerButtonsElement.firstChild) {
//     answerButtonsElement.removeChild(answerButtonsElement.firstChild);
//   }
}

// function selectAnswer(e) {
//   const selectedButton = e.target;
//   const correct = selectedButton.dataset.correct;
//   setStatusClass(document.body, correct);
//   Array.from(answerButtonsElement.children).forEach(button => {
//     setStatusClass(button, button.dataset.correct);
//   })
//   if (shuffledQuestions.length > currentQuestionIndex + 1) {
//     nextButton.classList.remove('hide');
//   } else {
//     startButton.innerText = 'Restart';
//     startButton.classList.remove('hide');
//   }
// }

// function setStatusClass(element, correct) {
//   clearStatusClass(element);
//   if (correct) {
//     element.classList.add('correct');
//   } else {
//     element.classList.add('wrong');
//   }
// }

// function clearStatusClass(element) {
//   element.classList.remove('correct');
//   element.classList.remove('wrong');
// }

const questions = [
  {
    question: 'What is 2 + 2?',
    // answers: [
    //     { text: 'Frequentemente', value: 'a'},
    //     { text: 'As vezes', value: 'b'},
    //     { text: 'Raramente', value: 'c'}    
    // ]
  },
  {
    question: 'Who is the best YouTuber?',
    // answers: [
    //     { text: 'Frequentemente', value: 'a'},
    //     { text: 'As vezes', value: 'b'},
    //     { text: 'Raramente', value: 'c'}

    // ]
  },
  {
    question: 'Is web development fun?',
    // answers: [
    //     { text: 'Frequentemente', value: 'a'},
    //     { text: 'As vezes', value: 'b'},
    //     { text: 'Raramente', value: 'c'}
    // ]
  },
  {
    question: 'What is 4 * 2?',
    // answers: [
    //     { text: 'Frequentemente', value: 'a'},
    //     { text: 'As vezes', value: 'b'},
    //     { text: 'Raramente', value: 'c'}
    // ]
  }
]