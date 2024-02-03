const questions=[
    {
     question: "Epsom(England) is the place associated with?",
     answers: [
         {text: "Horse racing", correct: true},
         {text: "Polo", correct: false},
         {text: "Shooting", correct: false},
         {text: "Snooker", correct: false}, 
     ]
    },
    {
     question: "World Literacy Day is observed on?",
     answers: [
         {text: "Aug 8", correct: false},
         {text: "Aug 6", correct: false},
         {text: "Sep 6", correct: false},
         {text: "Sep 8", correct: true}, 
     ]
    },
    {
     question: " The famous Dilwara Temples are situated in?",
     answers: [
         {text: "Maharastra", correct: false},
         {text: "Shimla", correct: false},
         {text: "Rajasthan", correct: true},
         {text: "Karnataka", correct: false}, 
     ]
    },
    {
     question: " ''Dandia'' is popular dance of?",
     answers: [
         {text: "Maharastra", correct: false},
         {text: "Rajasthan", correct: false},
         {text: "Punjab", correct: false},
         {text: "Gujarat", correct: true}, 
     ]
    },
    {
     question: "The members of the Rajya Sabha are elected by?",
     answers: [
         {text: "elected members of the legislative assembly", correct: true},
         {text: "elected members of the legislative council", correct: false},
         {text: "the poeple", correct: false},
         {text: "Lok Sabha", correct: false}, 
     ]
    },
    {
     question: "Lala Lajpat Rai is the author of the book?",
     answers: [
         {text: "India Divided", correct: false},
         {text: "Unhappy India", correct: true},
         {text: "Mother India", correct: false},
         {text: "Hind Swaraj", correct: false}, 
     ]
    },
    {
     question: "Who invented GunPowder?",
     answers: [
         {text: "G. Ferdinand Von Zeppelin", correct: false},
         {text: "Sir Frank Whittle", correct: false},
         {text: "Roger Bacon", correct: true},
         {text: "Leo H Baekeland", correct: false}, 
     ]
    },
    {
     question: "Process of cell division can take place by?",
     answers: [
         {text: "heterosis", correct: false},
         {text: "mitosis", correct: true},
         {text: "fusion", correct: false},
         {text: "None of these", correct: false}, 
     ]
    },
    {
     question: "The trident-shaped symbol of Buddhism does not represent?",
     answers: [
         {text: "Dhamma", correct: false},
         {text: "Buddha", correct: false},
         {text: "Sangha", correct: false},
         {text: "Nirvana", correct: true}, 
     ]
    },
    {
     question: "The office of the UN General Assembly is in?",
     answers: [
         {text: "NewYork", correct: true},
         {text: "Paris", correct: false},
         {text: "Zurich", correct: false},
         {text: "Vienna", correct: false}, 
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