const questions=[
   {
    question: "Which country hosted the first-ever Cricket World Cup in 1975?",
    answers: [
        {text: "Australia", correct: false},
        {text: "England", correct: true},
        {text: "India", correct: false},
        {text: "WestIndies", correct: false}, 
    ]
   },
   {
    question: " Who has taken the most number of One Day International (ODI) wickets?",
    answers: [
        {text: "Shane Warne", correct: false},
        {text: "Anil Kumble", correct: false},
        {text: "Wasim Akram", correct: false},
        {text: "Muttiah Muralitharan", correct: true}, 
    ]
   },
   {
    question: " Who holds the record for the fastest century in One Day Internationals?",
    answers: [
        {text: "Shahid Afridi", correct: true},
        {text: "AB de Villiers", correct: false},
        {text: "Virender Sehwag", correct: false},
        {text: "Chris Gayle", correct: false}, 
    ]
   },
   {
    question: " The term “silly point” is associated with which fielding position in cricket?",
    answers: [
        {text: "Behind the wicketkeeper", correct: false},
        {text: "Near the boundary line", correct: false},
        {text: "In the slips", correct: false},
        {text: "Close to the bowler", correct: true}, 
    ]
   },
   {
    question: " What does LBW stand for in cricket?",
    answers: [
        {text: "Leg Before Wicket", correct: true},
        {text: "Leg Boundary Wicket", correct: false},
        {text: " Leg Behind Wicket", correct: false},
        {text: "Leg Break Wicket", correct: false}, 
    ]
   },
   {
    question: " Which cricket stadium is known as the “Home of Cricket”?",
    answers: [
        {text: "The Gabba", correct: false},
        {text: "Wankhede Stadium", correct: false},
        {text: " Lord’s Cricket Ground", correct: true},
        {text: "Melbourne Cricket Ground", correct: false}, 
    ]
   },
   {
    question: " The term “Doosra” is commonly associated with which type of delivery in cricket?",
    answers: [
        {text: "Reverse Swing", correct: false},
        {text: "Leg-break", correct: false},
        {text: "Off-Break", correct: true},
        {text: "Off-Cutter", correct: false}, 
    ]
   },
   {
    question: " What is the highest team score in Test cricket history?",
    answers: [
        {text: "904/6", correct: false},
        {text: "914/4", correct: true},
        {text: "904/4", correct: false},
        {text: "914/6", correct: false}, 
    ]
   },
   {
    question: " Which cricketer has taken the most catches in Test cricket?",
    answers: [
        {text: "Ricky Pointing", correct: false},
        {text: "Mahela Jayawardene", correct: false},
        {text: "Jacques Kallis", correct: false},
        {text: "Rahul Dravid", correct: true}, 
    ]
   },
   {
    question: " Which cricketer is known as the “Sultan of Swing”?",
    answers: [
        {text: "James Anderson", correct: false},
        {text: "Wasim Akram", correct: true},
        {text: "Glenn McGrath", correct: false},
        {text: "Dale Steyn", correct: false}, 
    ]
   }
];
const questionEle =document.getElementById("question");
const answerEle=document.getElementById("answers-btn");
const nextBtn=document.getElementById("next-btn");  

let questionIndex=0;
let score=0;

function startQuiz(){
    questionIndex=0;
    score=0;
    nextBtn.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    reset();
    let currentQue=questions[questionIndex];
    let questionNo=questionIndex+1;
    questionEle.innerHTML=questionNo + "." +currentQue.question;

     currentQue.answers.forEach(answer =>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerEle.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",chooseAnswer);
     });
}

function reset(){
    nextBtn.style.display="none";
    while(answerEle.firstChild){
        answerEle.removeChild(answerEle.firstChild)
    }
}
function chooseAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
     Array.from(answerEle.children).forEach(button =>{
        if(button.dataset.correct ==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
     }); 
     nextBtn.style.display="block";
}
function showScore(){
    reset();
    questionEle.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextBtn.innerHTML="Play  Again";
    nextBtn.style.display="block";
}
function startNextButton(){
    questionIndex++;
    if(questionIndex< questions.length ){
        showQuestion();
    }else{
        showScore();
    }
}
nextBtn.addEventListener("click",()=>{
   if(questionIndex <questions.length){
       startNextButton();
   }
   else{
    startQuiz();
   }
});
startQuiz();