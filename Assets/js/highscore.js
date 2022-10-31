const highscoreList = document.getElementById ("highscoreList");
const highScores = JSON.parse(localStorage.getItem("savedscore"))||[];
// to display the list in the screen
highscoreList.innerHTML = highScores

// map is taking array items and converting them in a list
.map(score => {
    return (`<li class='savedscore'>${score.name}- ${score.score}</li>`);
    
})
// getting a string with all li concept.
   .join("")


