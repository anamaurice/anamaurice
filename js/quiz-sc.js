var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');

var cont1 = 0;
var cont2 = 0;
var cont3 = 0;

function loadQuestion (questionIndex){
    var q = questions[questionIndex];
    questionEl.textContent = [questionIndex +1] + '. ' + q.question;
    opt1.textContent = q.opcao1;
    opt2.textContent = q.opcao2;
    opt3.textContent = q.opcao3;
}

function loadNextQuestion () {
    var selectOption = document.querySelector('input[type=radio]:checked');
    if(!selectOption){
        alert('Por favor selecione sua resposta!');
        return;
    }
    var answer = selectOption.value;
    if(questions[currentQuestion].answer == answer){
        score += 10;
    }
    selectOption.cheked = false;
    currentQuestion++;
    if(currentQuestion == totQuestions -1){
        nextButton.textContent = 'Fim';
    }
    if(currentQuestion == totQuestions){
        container.style.display =  'none';
        resultCont.style.display = '';
        resultCont.textContent = 'Seu placar: ' + score;
        return;
    }
    loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);


function Results (){
    if(questions[currentQuestion].opcao1 = opt1){
        cont1++;
    }
    if(questions[currentQuestion].opcao2 = opt2){
        cont2++;
    }
    if(questions[currentQuestion].opcao3 = opt3){
        cont3++;
    }
    alert('Seu placar: ' + cont1 + cont2 + cont3);
    return;
}
