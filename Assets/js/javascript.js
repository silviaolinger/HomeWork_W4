
let timer= 10
let timerEL= document.getElementById ('countdown');
const StartBtn= document.getElementById('start-button');
//start the timer
StartBtn.addEventListener('click',function(){

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
    //stoptimer
    
    


//creating the question
const questions = [{
    question1: "Who invented the air conditioner?",
    Answer1:"Jose",
    Answer2:"Maria",
    Answer3:"Willis Carrier",
    Answer4:"Magnolia",
    CorrectAnswer:"Willis Carrier"},
    {
    question2:"Who was the first president of USA?",
    Answer1:"Jose",
    Answer2:"Maria",
    Answer3:"George Washington ",
    Answer4:"Magnolia",
    CorrectAnswer:"George Washington "},
     {
    question3: "What sport gets paid the most in America?",
    Answer1:"Fottball",
    Answer2:"Basketball",
    Answer3:"Boxing",
    Answer4:"Soccer",
    CorrectAnswer:"Basketball"},
    {
    question4: "When is Independecy Day Celebrated in America?",
    Answer1:"5th April",
    Answer2:"24th January",
    Answer3:"4th June",
    Answer4:"4th July",
    CorrectAnswer:"4th July"},

];
