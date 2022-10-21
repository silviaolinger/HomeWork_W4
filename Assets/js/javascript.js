
let timer= 10
let timerEL= document.getElementById ('countdown');
const StartBtn= document.getElementById('start-button');

//loading the page with some conditions
function inicia(){
    
    document.getElementById("q-1").hidden=true;
    document.getElementById("q-2").hidden=true;  
}
window.addEventListener("load",inicia)
//start the timer 
StartBtn.addEventListener('click',function(){
    StartBtn.classList.toggle("hide");
    //const question1=document.getElementById('q-1');
     
    

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
     
 function GameOver () {
         clearInterval(timer);
        
        alert ('Game Over');}

        
//creating the questionbank
 
//fuctino display question

 //function DisplayQ (){


    //const q1= document.getElementById("q-1")
     //let q = q1.value;
     
     //if (q === q1)
 //}
const questionsbank = [{
    question1: "Who invented the air conditioner?",
    Option:["Jose","Maria", "Willis Carrier","Magnolia"],
    CorrectAnswer:"Willis Carrier"},

    {
    question2:"Who was the first president of USA?",
    Option:["Jose","Maria","George Washington ", "Magnolia"],
    CorrectAnswer:"George Washington "},
     {
    question3: "What sport gets paid the most in America?",
    Answer:["Fottball","Basketball","Boxing", "Soccer"],
    CorrectAnswer:"Basketball"},
    {
    question4: "When is Independecy Day Celebrated in America?",
    Option:["5th April","24th January","4th June", "4th July"],
    CorrectAnswer:"4th July"},

];
//getting the quiz  elements
 const question = document.getElementById('question');
 const quizcontainer = document.getElementById('container');
 const score= document.getElementById('score');
 const option0=document.getElementById('option0');
 const option1=document.getElementById('option1');
 const option2=document.getElementById('option2');
 const option3=document.getElementById('option3');
 const next= document.querySelector('.nextbutton');
 const span= document.querySelectorAll('span');

 let i=0;
 score=0;

 //display questions

 
 