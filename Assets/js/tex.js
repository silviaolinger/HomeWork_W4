let timer= 10
let timerEL= document.getElementById ('countdown');
let title = document.querySelector('h1')
let instructions = document.querySelector('#instructions')
let displayscore = document.getElementById('Score')
const StartBtn= document.getElementById('start-button')


let points = 0 
let ScoreBoard = 0 



// Question
let numQuestion = document.querySelector('#numQuestion')
let   question = document.querySelector('#question')

// Alternatives
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')

// class of container
let container = document.querySelector('.container')
// ol li com as alternativas
let alternatives = document.querySelector('#alternatives')

// check correct answer
let Check_Answer = document.getElementById("CheckAnswer")

const q0 = {
    numQuestion   : 0,
    question     : "Question",
    alternativeA : "Alternative A",
    alternativeB : "Alternative B",
    alternativeC : "Alternative C",
    correct      : "0",
}

const q1 = {
    numQuestion   : 1,
    question     : "How much is 1+1",
    alternativeA : "2",
    alternativeB : "4",
    alternativeC : "10",
    correct     : "2",
}

const q2 = {
    numQuestion   : 2,
    question     : "How much is 10+30",
    alternativeA : "10",
    alternativeB : "55",
    alternativeC : "40",
    correct    : "40",
}

const q3 = {
    numQuestion   : 3,
    question     : "How much is 3+15",
    AlternativeA : "10",
    alternativeB : "37",
    alternativeC : "18",
    correct     : "18",
}

const q4 = {
    numQuestion   : 4,
    question     : "How much is 4+12",
    alternativeA: "10",
    alternativeB : "16",
    alternativeC : "20",
    correct      : "16",
}

const q5 = {
    numQuestion   : 5,
    question     : "How much is -1-1?",
    alternativeA : "1",
    alternativeB : "2",
    alternativeC : "0",
    correct      : "0",
}

// const with question_array
const question_array = [q0, q1, q2, q3, q4, q5]

let number = document.querySelector('#numQuestion')
let total  = document.querySelector('#total')

number.textContent = q1.numQuestion

let Question_Total = (question_array.length)-1
console.log("Total of Quetions " + Question_Total)
total.textContent = Question_Total

// load the page
window.addEventListener("load",load);
//loading the page hidden the questions


StartBtn.classList.add('hide')
container.classList.add('hide')


// start button
StartBtn.addEventListener('click',function(){
    //StartBtn.classList.toggle('hide')=true;     
     
  setInterval (function(){
    timer--;
   if(timer >=0){
   timerEL.innerHTML=timer;
   }
   if(timer === 0){
     GameOver();
   }
  },1000)
  })

//  1a  question, to get  start
numQuestion.textContent = q1.numQuestion
question.textContent   = q1.question
a.textContent = q1.alternativeA
b.textContent = q1.alternativeB
c.textContent = q1.alternativeC

//giving incial value to 1a question
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')

// building the next question in the question_array
function nextQuestion(nQuestion) {
    number.textContent = nQuestion
    numQuestion.textContent = question_array[nQuestion].numQuestion
    question.textContent   = question_array[nQuestion].question
    a.textContent = question_array[nQuestion].alternativeA
    b.textContent = question_array[nQuestion].alternativeB
    c.textContent = question_array[nQuestion].alternativeC
    a.setAttribute('value', nQuestion+'A')
    b.setAttribute('value', nQuestion+'B')
    c.setAttribute('value', nQuestion+'C')
}
//hide alternatives
function hideAlternatives() {
    a.classList.add('hide')
    b.classList.add('hide')
    c.classList.add('hide')
}

function showAlternatives() {
    a.classList.remove('hide')
    b.classList.remove('hide')
    c.classList.remove('hide')
}

function checkanswer(nQuestion, answer) {

    let quesitonNumber = nQuestion.value
    console.log("Question " + quesitonNumber)

    let chosenAnswer = answer.textContent


    let correctAnswer = question_array[quesitonNumber].correct
    

    if(chosenAnswer == correctAnswer) {
        
        Check_Answer.textContent = "Correta 😊"
        points += 10 
    } else {
    
        Check_Answer.textContent = "Errada 😢"
    }

    // updating ScoreBoard
    ScoreBoard = points
    displayscore.textContent = "points " + ScoreBoard

    hideAlternatives()

    setTimeout(function() {
        Check_Answer.textContent = '...'
        next = quesitonNumber+1

        if(next > Question_Total) {

            GameOver()
        } else {
            nextQuestion(next)
        }
    }, 250)
    showAlternatives()
}

function GameOver() {
    clearInterval(timer);
    instructions.textContent = "Game Over!"
    container.classList.toggle('hide')= true;

   

    displayscore.textContent   = "Score " + points 

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')

    // hiding quetion_banck
    questionbank.style.display = 'none'

    setTimeout(function() {
        points = 0 // initilizing ScoreBoard
        location.reload();
    }, 2000)
}