let quizMeat = {
    currentQuestion: 0,
    correctAnswers: 0,
    questions: [
        {
            q: "Which of these are forms of Weight Training?",
            ans: ["Weightlifting", "Powerlifting", "Bodybuilding", "All of the above"],
            correct: 3,
            userAnswer: null
        },
        {
            q: "Which form of weight training is best for gaining mass?",
            ans: ["Weightlifting", "Powerlifting", "Bodybuilding", "Strongman"],
            correct: 2,
            userAnswer: null
        },
        {
            q: "Which style of weight training do olympic athletes use?",
            ans: ["Weightlifting", "Powerlifting", "Bodybuilding", "Strongman"],
            correct: 0,
            userAnswer: null
        },
        {
            q: "Though various workouts are shared in the different styles of weight training, which single workout a staple in EVERY form of weight training?",
            ans: ["Benchpress", "Squats", "Barbell curls", "Clean and jerk"],
            correct: 1,
            userAnswer: null
        },
        {
            q: "In powerlifting, what is a total?",
            ans: ["How much you weigh", "How big your muscles are", "Sum of 3 main lifts", "Sum of points in competition"],
            correct: 2,
            userAnswer: null
        },
        {
            q: "Which type of weight training includes an exercise where they lift massive round stones weighing hundreds of pounds?",
            ans: ["Weightlifting", "Powerlifting", "Bodybuilding", "Strongman"],
            correct: 3,
            userAnswer: null
        },
        {
            q: "What is the world record weight for the deadlift",
            ans: ["1301.6 lbs", "503.3 lbs", "1005 lbs", "1102.31 lbs"],
            correct: 3,
            userAnswer: null
        },
        {
            q: "Which form of weight training does performance enhancing drugs (steroids) run rampant in?",
            ans: ["Weightlifting", "Powerlifting", "Bodybuilding", "EVERY. SINGLE. ONE."],
            correct: 3,
            userAnswer: null
        },
        {
            q: "How much higher is the chance of dying as a professional bodybuilder?",
            ans: ["34%", "100%", "50%", "Not Applicable"],
            correct: 0,
            userAnswer: null
        },
        {
            q: "What is the best type of weight training?",
            ans: ["Weightlifting", "Powerlifting", "Bodybuilding", "Any that you like!"],
            correct: 3,
            userAnswer: null
        },
    ]
}

console.log(quizMeat);
//start page with a button to begin the quiz.
function startPage() {
    $('#questionPage').hide();
    let intro = 
    '<div id="introduction">' +
		'<p>Are you ready to test your might?!</p>' +
	'<button id="start" type="button">Start Quiz</button>' + 
    '<img src="bodybuilder image.jpg">' + '</div>';
    $('#startPage').append(intro);
    $('#start').on('click', function(){
        $('#startPage').hide();
        $('#questionPage').show();
        renderQuiz();
        submitted();
        nextQuestion();
    });
}
//takes the questions one at a time and presents them to the user.
function renderQuiz() {
    let currentQ = quizMeat.currentQuestion;
    $('#qNum').text(currentQ + 1);
    $('#question').text(quizMeat.questions[currentQ].q);
    $('.score').text(quizMeat.correctAnswers + " out of " + quizMeat.questions.length + " answered right! ");
    $('input[name=answer').prop('checked', false);
    quizMeat.questions[currentQ].ans.forEach(function 
    (current,index){
        $('label[for="ans' +index+ '"]').text(current);
    });
    $('#next-button').hide();
    console.log('working');
}


function storeUserAnswer(answer) {
    quizMeat.questions[quizMeat.currentQuestion].userAnswer = answer;
}
//checks users answers, responds with feedback if right or wrong.
function checkUserAnswer(){
    let currentQ = quizMeat.currentQuestion;
    if(quizMeat.questions[currentQ].userAnswer === quizMeat.questions[currentQ].correct) {
        $('#correction').text('Correct! Wow, you are pretty tough.');
        quizMeat.correctAnswers += 1;
        $('.score').text(quizMeat.correctAnswers + " out of " +
        quizMeat.questions.length + " correct");
    } else {
        $('#correction').text('Sorry, not tough enough! the right answer is ' + (quizMeat.questions[currentQ].correct + 1));
    }
}
// user selects question and hits button the submit to see if correct or incorrect.
function submitted() {
    $('#quizForm').submit(function(event){
        event.preventDefault();
        let userAns = Number($('input:radio:checked').val());
        storeUserAnswer(userAns);
        checkUserAnswer();
        $('#submit-button').hide();
        $('#next-button').show();
    });
}
//button to move on to the next question, after gone the length of the questions it displays the results of the quiz.
function nextQuestion(){
    $('#next-button').on('click',function(event) {
        event.preventDefault();
        if(quizMeat.currentQuestion < quizMeat.questions.length - 1){
        quizMeat.currentQuestion += 1;
        $('#correction').text('');
        renderQuiz();
        } else {
            results();
        }
        $('#submit-button').show();
        $('#next-button').hide();
    });
}
//Ending result of quiz, # out of 10 is displayed with a button to try again.
function results() {
    $('#questionPage').hide();
    $('.title').text("Score");
    let displayScore = 
		'<p id="score">' + quizMeat.correctAnswers + ' out of ' + quizMeat.questions.length + ' correct</p>' +
		'<img src="weights-clipart-1.png">' + '<button id="restart">Try Again</button>';
	$('#finalScore').append(displayScore);
	$('#restart').on('click', function(event){
		event.preventDefault();
        location.href = "";
        console.log(displayScore);
	});
}

$(function() {
    startPage();
});