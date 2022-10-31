let timer= 20
let timerEL= document.getElementById ('countdown');
let title = document.querySelector('h1')
let instructions = document.querySelector('#instructions')
let displayscore = document.getElementById('Score')
const StartBtn= document.getElementById('start-button')
const gameover = document.getElementById('Gameover')
const form = document.querySelector('form')
const submit = document.getElementById('submit')
let username= document.getElementById('username')
let showuserandscore= document.getElementById('User_Score');
const btnhighscore=document.getElementById('HighScore');




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
let container = document.querySelector('#container')
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
let total  = document.getElementById('total')

number.textContent = q1.numQuestion 

let Question_Total = (question_array.length)-1
console.log("Total of Quetions " + Question_Total)
total.textContent = 'Total: '+ Question_Total

// load the page
window.addEventListener("load",load);

function load (){ 
    container.hidden = true;
    instructions.hidden = true;
    form.hidden=true;
    showuserandscore.hidden = true;   
    btnhighscore.hidden=false;
    total.hidden=true;
    Check_Answer.hidden=false;
    
}

// start button
StartBtn.addEventListener('click',function(){
    StartBtn.hidden=true;
    container.hidden=false;
    instructions.hidden = false;
    total.hidden=false;
    btnhighscore.hidden=true;
  setInterval (function(){
    timer--;
    if(timer >=0){
   timerEL.textContent= "Time: " + timer;
   }
   if(timer === 0){
    GameOver();
   }
  },1000)
  })

//  1a  question, to get  start
numQuestion.textContent =  q1.numQuestion + '.  '
question.textContent   = q1.question
a.textContent = q1.alternativeA
b.textContent = q1.alternativeB
c.textContent = q1.alternativeC

//giving incial value to 1a question
a.setAttribute('value', '1')
b.setAttribute('value', '1')
c.setAttribute('value', '1')

// building the next question in the question_array
function nextQuestion(nQuestion) {
    number.textContent = nQuestion
    numQuestion.textContent = question_array[nQuestion].numQuestion +'. '
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
        
        Check_Answer.textContent = "Correct 😊"
        points += 10 
    } else {
    
        Check_Answer.textContent = "Wrong 😢"
        timer = timer-1;
        timerEL.textContent= "Time: " + timer;
    }

    // updating ScoreBoard
    ScoreBoard = points
    displayscore.textContent = "Score: " + ScoreBoard

    hideAlternatives()

    setTimeout(function() {
        next = quesitonNumber+1

        if(next > Question_Total) {
            localStorage.setItem("mostRecentScore",ScoreBoard)

            GameOver()
        } else {
            nextQuestion(next)
        }
    }, 250)
    showAlternatives()
    
}

function GameOver() {
    clearInterval(timer);
    gameover.textContent = "Game Over!"
    container.hidden=true;
    instructions.hidden=true;
    showuserandscore.hidden=true;
    Check_Answer.hidden=true;
    displayscore.hidden=false;
    btnhighscore.hidden=true;
    displayscore.textContent   = "Score: " + ScoreBoard;
    a.textContent = ""
    b.textContent = ""
    c.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')
       
      form.hidden = false; 
      submit.disabled=true;
      total.hidden=true;
      
      SavedScore()
    
}
     function SavedScore (){
        clearInterval(timer);
        form.hidden = false;
        Check_Answer.hidden=true;
      

      const mostRecentScore =  localStorage.getItem('mostRecentScore')
       
      const savedscore= JSON.parse(localStorage.getItem('savedscore')) || [];
      const MAX_HIGH_SCORES = 5;
      displayscore.innerText = mostRecentScore;
       
      username.addEventListener("keyup", ()=>{  
      submit.disabled = !username.value; });
         
        submit.addEventListener('click', function(){
            
            const score ={
                score: mostRecentScore,
                name: username.value };
                setTimeout(function() {
                if (username.value != ''){
                    showuserandscore.textContent = 'Player: ' + username.value + 'Score: ' + ScoreBoard; 
                   }
                }, 250)
            // saving in the local storge
            savedscore.push(score);
            // returning a own sortation from higher c to lowest score
            savedscore.sort( (a, b) => {
                return b.score - a.score;
            })
            // display the quantity of items in the array
            savedscore.splice(MAX_HIGH_SCORES);
            localStorage.setItem('savedscore',JSON.stringify(savedscore));
                        
            
           
            load();
        });
     }
    
    
    

        
     