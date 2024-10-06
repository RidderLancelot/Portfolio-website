let analytical_thinking = document.getElementById('skill1');
let more_analytical_thinking = document.getElementsByClassName('analytical-thinking');
let research = document.getElementById("skill2");
let more_research = document.getElementsByClassName("research");
let problem_solving = document.getElementById("skill3");
let more_problem_solving = document.getElementsByClassName("problem-solving");
let memory = document.getElementById("skill4")
let more_memory = document.getElementsByClassName("memory");

let boesagerskolen = document.getElementById("study1");
let more_boesagerskolen = document.getElementsByClassName("boesagerskolen");
let egedal_gymnasium = document.getElementById("study2");
let more_egedal_gymnasium = document.getElementsByClassName("egedal-gymnasium");
let unge_talenter = document.getElementById("study3");
let more_unge_talenter = document.getElementsByClassName("unge-talenter");
let cyber_career = document.getElementById("study4");
let more_cyber_career = document.getElementsByClassName("cyber-career");
let codecademy = document.getElementById("study5");
let more_codecademy = document.getElementsByClassName("codecademy");

// Write your code here:
function showInfo(block1, caller) {
  if (block1.style.display !== "list-item") {
    block1.style.display = "list-item";
    caller.style.listStyleType = "square";

  } else {
    block1.style.display = "none";
    caller.style.listStyleType = "disc";
  }
  
}

analytical_thinking.addEventListener("click", function() {showInfo(more_analytical_thinking[0], analytical_thinking)});
research.addEventListener("click", function() {showInfo(more_research[0], research)});
problem_solving.addEventListener("click", function() {showInfo(more_problem_solving[0], problem_solving)});
memory.addEventListener("click", function() {showInfo(more_memory[0], memory)});
boesagerskolen.addEventListener("click", function() {showInfo(more_boesagerskolen[0], boesagerskolen)});
egedal_gymnasium.addEventListener("click", function() {showInfo(more_egedal_gymnasium[0], egedal_gymnasium)});
unge_talenter.addEventListener("click", function() {showInfo(more_unge_talenter[0], unge_talenter)});
cyber_career.addEventListener("click", function() {showInfo(more_cyber_career[0], cyber_career)});
codecademy.addEventListener("click", function() {showInfo(more_codecademy[0], codecademy)});