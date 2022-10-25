

let timer= 40
let timerEL= document.getElementById ('countdown');
const StartBtn= document.getElementById('start-button');
const nextbtn= document.querySelector("#nextbutton");
//selecting the question elements
let questionbank = document.querySelectorAll('#questionbank');
let NumQuestion= document.querySelector('#Question_Number');
let question = document.querySelector('#question');
//score
let points = 0;
let ScoreBoard=0;
//selecting the alternatives elements
let alternatives = document.querySelector('#alternatives')
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')

//questions_back

const q0= {
  number:0,
  question_text:'Question',
  alter_a:'alter_a', alter_b:'alter_b', alter_c:'alter_c', 
  correct_answer:'alter_b',
  
  } 
const q1= {
number:1,
question_text:'How much is 2+2?',
alter_a:'7', alter_b:'4', alter_c:'10', 
correct_answer:'4',

}  

const q2= {
  number:2,
  question_text:'How much is 3+3?',
  alter_a:'7', alter_b:'4', alter_c:'6', 
  correct_answer:'6',
}

const q3= {
  number:3,
  question_text:'How much is 4+4?',
  alter_a:'8', alter_b:'4', alter_c:'10', 
  correct_answer:'4',
}
  // const of objet arrays will all questions
const questions=[q0,q1,q2,q3]

// build the structure of questions 

window.addEventListener("load",load);
//loading the page hidden the questions





function load(){
      
    for (let i=1; i<5; i++){
      document.getElementById("q"+ i).hidden=true;

    }
   //document.getElementById('start-button').hidden=true;
   document.getElementById('nextbutton').hidden=true;
   document.getElementById('checkanswer').hidden=true;
   document.getElementById('HighScore-button').hidden=true;
}


//start the timer 

StartBtn.addEventListener('click',function(){
    StartBtn.classList.toggle("hide");
    nextbtn.classList.toggle("show");
     document.getElementById('q1').hidden=false;
    
    //const question1=document.getElementById('q-1');
    
// setInterval (function(){
  //  timer--;
  //if(timer >=0){
  //timerEL.innerHTML=timer;
  //}
  //if(timer === 0){
    //GameOver();
  //}
//},1000)
})
     
 //function GameOver () {
         //clearInterval(timer);
        
        //alert ('Game Over');}
       
         nextbtn.addEventListener('click',next);
        function next (){
          load ();
          let i=2;
          let question1;
          if (i<5){
            question1= document.getElementById("q"+i).hidden=false;

          }
        }
      //function next(){
        //load()
        //let question1;
        
         //for (x=1; x<5;x++){
         
        //question1= document.getElementById("q"+x).hidden=false;
         //(function(index){  
          //nextbtn.addEventListener("click", function() {
          
           
          //})
        //})(x)
      //}
    //}
        
        //  function result (){
          //let score = 0;


          //if(document.getElementById('Correct-1').checked);
          //{
            //score++;
          //}
          //if(document.getElementById('Correct-2').checked)
          //{
            //score++;
          //}
          
          //if(document.getElementById('Correct-3').checked)
          //{
            //score++;
          //}
          //if(document.getElementById('Correct-4').checked)
          //{
            //score++;
          //}
           
          //return score;
           
      
    

            
          

            

          
                     
            
      
          
          



            

           // for (let i=1; i<5; i++){
             
           //question= document.getElementById("q"+i).hidden=true;
            
          //}


          //const q2 = document.getElementById("q2");
          // q2=hidden

      


          
           
    
  
    
  
//fuctino display question

 //function DisplayQ (){


    //const q1= document.getElementById("q-1")
     //let q = q1.value;
     
     //if (q === q1)
 //}

    
    


//getting the quiz  elements
 

 //display questions

 
 