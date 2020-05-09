//starting the game
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
//fetching the question and answer element

const questionElement =document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const resultContainer =document.getElementById('result')

//Shuffling the questions
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', StartGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
  })
 


function StartGame(){
    //Hiding the start button
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    //setting the shuffled question
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0 
    questionContainerElement.classList.remove('hide')
    //showing the question
    setNextQuestion()
}

//function for showing the next question
function setNextQuestion() {
    resetState ()
//shows the shuffled question
showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question
//looping through the answers
    question.answers.forEach(answer => {
        const button= document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        //checking for the  correct answer
        if (answer.correct){
            button.dataset.correct = answer.correct
        }        
        button.addEventListener('click',selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}
function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton= e.target
    const correct= selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide')
    } else {
      startButton.innerText = 'Result'
      startButton.classList.remove('hide')
    }
  }

  function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
      element.classList.add('correct')
    } else {
      element.classList.add('wrong')
    }
  }

  function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
  }
//Setting an array of  questions

const questions =[
    {
        question:'Who is chelsea manager?',
        answers: [
            {text: 'mikel obi', correct:false},
            {text: 'frank lampard', correct:true},
            {text: 'pep guardiola', correct:false}
        ]
    },
    {
        question:'Which number does azpilicueta wears?',
        answers: [
            {text: '10', correct:false},
            {text: '11', correct:false},
            {text: '28', correct: true },
            {text: '3', correct:false}
        ]
    },
    {
        question:'Which year did chelsea won the champions league?',
        answers: [
            {text: '2008', correct:false},
            {text: '2012', correct:true},
            {text: '2000', correct:false},
            {text: '2010', correct:false}
        ]
    },
    {
        question:'who coached chelsea to the champions league trophy?',
        answers:[
            {text: 'jose mourinho', correct:false},
            {text: 'Antonio conte', correct:false},
            {text: 'guss hidddink', correct:false},
            {text: 'di matteo', correct:true}
        ]
    },
    {
        question:'Who is chelsea current number 9?',
        answers:[
            {text: 'ross barkley', correct:false},
            {text: 'hudson odoi', correct:false},
            {text: 'pulisic', correct:false},
            {text: 'tammy abraham', correct:true}
        ]
    }
]