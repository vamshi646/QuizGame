const questions=[
    {
     question: "Which one is the first search engine in internet?",
     answers: [
         {text: "Google", correct: false},
         {text: "Archie", correct: true},
         {text: "WAIS", correct: false},
         {text: "Altavista", correct: false}, 
     ]
    },
    {
     question: " First computer virus is known as?",
     answers: [
         {text: "Rabbit", correct: false},
         {text: "SCA Virus", correct: false},
         {text: "Creeper Virus", correct: true},
         {text: "Elk Cloner", correct: false}, 
     ]
    },
    {
     question: " Firewall in computer is used for?",
     answers: [
         {text: "Security", correct: true},
         {text: "Monitoring", correct: false},
         {text: "Authentication", correct: false},
         {text: "Data Transmission", correct: false}, 
     ]
    },
    {
     question: " Number of layers in the OSI (Open Systems Interconnection) Model",
     answers: [
         {text: "9", correct: false},
         {text: "6", correct: false},
         {text: "11", correct: false},
         {text: "7", correct: true}, 
     ]
    },
    {
     question: " Where is the headquater of MicroSoft office located?",
     answers: [
         {text: "Washington", correct: true},
         {text: "Texas", correct: false},
         {text: "NewYork", correct: false},
         {text: "California", correct: false}, 
     ]
    },
    {
     question: " Which protocol is used to receive e-mail?",
     answers: [
         {text: "SMTP", correct: false},
         {text: "POP3", correct: true},
         {text: "FTP", correct: false},
         {text: "HTTP", correct: false}, 
     ]
    },
    {
     question: " In computer world, Trojan refer to?",
     answers: [
         {text: "Virus", correct: false},
         {text: "Worm", correct: false},
         {text: "Malware", correct: true},
         {text: "Spyware", correct: false}, 
     ]
    },
    {
     question: " What is the maximum size of a word document created?",
     answers: [
         {text: "1 MB", correct: false},
         {text: "32 MB", correct: true},
         {text: "16 MB", correct: false},
         {text: "64 MB", correct: false}, 
     ]
    },
    {
     question: " What is the binary value of A?",
     answers: [
         {text: "01000100", correct: false},
         {text: "10000100", correct: false},
         {text: "01100001", correct: false},
         {text: "01000001", correct: true}, 
     ]
    },
    {
     question: " Total number of pins in a traditional parallel port is?",
     answers: [
         {text: "25", correct: true},
         {text: "26", correct: false},
         {text: "27", correct: false},
         {text: "28", correct: false}, 
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