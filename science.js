const questions=[
    {
     question: "The average salinity of sea water?",
     answers: [
         {text: "3.5%", correct: true},
         {text: "3.0%", correct: false},
         {text: "2.5%", correct: false},
         {text: "2.0%", correct: false}, 
     ]
    },
    {
     question: " Non stick cooking utensils are coated with?",
     answers: [
         {text: "PVC", correct: false},
         {text: "Polystyrene", correct: false},
         {text: "Teflon", correct: true},
         {text: "Black Paint", correct: false}, 
     ]
    },
    {
     question: " The most important ore of Alluminium?",
     answers: [
         {text: "gelena", correct: false},
         {text: "calamine", correct: false},
         {text: "bauxite", correct: true},
         {text: "calcite", correct: false}, 
     ]
    },
    {
     question: "From which mineral is radium obtained?",
     answers: [
         {text: "Rutile", correct: false},
         {text: "Heamatite", correct: false},
         {text: "Limestone", correct: false},
         {text: "Pitchblende", correct: true}, 
     ]
    },
    {
     question: " Which of the following are the ingredients of gun metal?",
     answers: [
         {text: "Copper,Tin", correct: true},
         {text: "Iron,Tin", correct: false},
         {text: "Iron,Zinc,Tiatanium", correct: false},
         {text: "Iron,Brass,Tin", correct: false}, 
     ]
    },
    {
     question: " Which organ is affected by the disease known as ‘kala-azar”?",
     answers: [
         {text: "Heart", correct: false},
         {text: "Liver", correct: true},
         {text: "Lungs", correct: false},
         {text: "Intestine", correct: false}, 
     ]
    },
    {
     question: " Name the vitamin that is known as phytomenadione or phylloquinone?",
     answers: [
         {text: "Vitamin C", correct: false},
         {text: "Vitamin D", correct: false},
         {text: "Vitamin K", correct: true},
         {text: "Vitamin E", correct: false}, 
     ]
    },
    {
     question: " Which country has developed the world-first floating nuclear plant?",
     answers: [
         {text: "India", correct: false},
         {text: "Russia", correct: true},
         {text: "USA", correct: false},
         {text: "China", correct: false}, 
     ]
    },
    {
     question: " Which of the following anti-satellite missile is tested by India on 27 March, 2019?",
     answers: [
         {text: "Mission Antriksh", correct: false},
         {text: "Mission Gagan", correct: false},
         {text: "Mission Destruction", correct: false},
         {text: "Mission Shakti", correct: true}, 
     ]
    },
    {
     question: "Zika virus was named after the Zika Forest of which country?",
     answers: [
         {text: "Uganda", correct: true},
         {text: "Angola", correct: false},
         {text: "Nigeria", correct: false},
         {text: "Nicaragua", correct: false}, 
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