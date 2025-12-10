const startBtn = document.getElementById("startBtn");
// gets lets go button from html //

const personalityInput = document.getElementById("personalityInput");
//MBTI input //

const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const endScreen = document.getElementById("end-screen");
// set's up starter screen, game screen, the results screen bit //

const catText = document.getElementById("catText");
// cats dialogue //

const choiceA = document.getElementById("choiceA");
const choiceB = document.getElementById("choiceB");
// two choice buttons //

let personality = "";
// keeps track of players personality type //

let questionIndex = 0;
// keeps track of question //

let peaceScore = 50;
// the starting peace score, neutral //

const questions = [
{
issue: "A glowing light drifts into your path at dusk. What do you do?",
A: "Follow it cautiously.",
B: "Swat it away and keep walking."
},
{
issue: "A potion on your shelf suddenly bubbles over. How do you react?",
A: "Check the ingredients and fix it calmly.",
B: "Throw the whole cauldron outside before it explodes."
},
{
issue: "A ghost cat curls up on your bed. What do you do?",
A: "Gently pet it and ask why it’s here.",
B: "Tell it to leave unless it pays rent."
},
{
issue: "A witch’s market appears overnight in your garden.",
A: "Explore every stall with curiosity.",
B: "Demand they relocate because this is private property."
},
{
issue: "A spellbook whispers your name.",
A: "Open it slowly and listen.",
B: "Tell it to stop being creepy."
},
{
issue: "Your teapot starts floating in circles.",
A: "Observe the magic and take notes.",
B: "Grab a broom and knock it down."
},
{
issue: "A mischievous fairy replaces all your socks with mushrooms.",
A: "Have a polite chat about boundaries.",
B: "Launch a counter prank with haste."
},
{
issue: "A talking crow brings you a cryptic message.",
A: "Decode it carefully.",
B: "Take a photo of the crow and move on."
},
{
issue: "A frog hops up to you, offering you a kiss.",
A: "Chuck it back into the water.",
B: "Kiss it."
},
{
issue: "A cursed mirror shows you a different version of yourself.",
A: "Ask it questions.",
B: "Cover it with a blanket and move on."
},
{
issue: "A herbalist offers you a potion labelled ‘Do Not Drink.’",
A: "Study it to understand the warning.",
B: "Drink it. Obviously."
},
{
issue: "A magical storm starts swirling above your house.",
A: "Barricade and prepare calmly.",
B: "Run outside dramatically to challenge it."
},
{
issue: "A spell accidentally sets a bit of hair on fire.",
A: "Try to reverse it with another spell.",
B: "Embrace the new look."
},
{
issue: "The local witch council invites you to a meeting.",
A: "Arrive early with notes.",
B: "Show up late with snacks."
},
{
issue: "Your shadow begins acting independently.",
A: "Talk to it and negotiate peace.",
B: "Chase it around the room."
},
{
issue: "A crystal ball starts showing you random strangers.",
A: "Try to understand the pattern.",
B: "Use it like magical television."
},
{
issue: "Your neighbour’s broom goes missing and they accuse you.",
A: "Help them investigate.",
B: "Summon your lawyer friend."
},
{
issue: "A baby dragon is left on your doorstep.",
A: "Adopt it responsibly and with care.",
B: "Name it instantly and teach it chaos."
},
{
issue: "A witch duel breaks out in the street.",
A: "Try to mediate.",
B: "Place bets."
},
{
issue: "The forest calls your name with whispering voices.",
A: "Walk towards it slowly.",
B: "Walk in the other direction quickly."
}
];
// decider magical scenarios, the issue is a state in which the player fimds themselves in, a and b are the choices //

startBtn.addEventListener("click", () => {
personality = personalityInput.value.toUpperCase().trim();
// takes the players input, make it upperacase and takes away spaces //

if (personality.length !== 4) {
alert("Please enter a valid 4-letter personality type!");
return;
}
// checks the length of the personality type being entered, then lets game start //

startGame();
});
// click event that starts the game when the button gets pressed //

function startGame() {
startScreen.classList.add("hidden");
// hides the first screen shown //

gameScreen.classList.remove("hidden");
// shows game screen //

showQuestion();
}
// loads the question //

function showQuestion() {
const q = questions[questionIndex];
// gets the current question //

catText.textContent = "Cat God: " + q.issue;
// shows scenario //

choiceA.textContent = q.A;
choiceB.textContent = q.B;
// updates the choice buttons //

choiceA.onclick = () => makeChoice("A");
choiceB.onclick = () => makeChoice("B");
}
//gives the click actions for each choice //

function makeChoice(choice) {

if (choice === "A") peaceScore += 5;
else peaceScore -= 3;
// choosing a increases peaceScore, B decreases it //

questionIndex++;
// goes to next question //

if (questionIndex >= questions.length) {
endGame();
// no more upcoming questions finishes the game //

} else {
showQuestion();
}
}
// alternative, shows next question //

function endGame() {
gameScreen.classList.add("hidden");
// then hides the question screen //
endScreen.classList.remove("hidden");
// to show the end //

document.getElementById("finalSummary").textContent =
`Your world has been shaped by the choices of a ${personality} soul.`;
// shows the players personality type at the end with a classic boring (same for every type) message//

document.getElementById("peaceScore").textContent =
`World Peace Score: ${peaceScore}%`;
}
// shows final score //



