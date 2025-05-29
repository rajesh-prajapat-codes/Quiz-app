
const questions = [
  {
         'que': 'Which of the following is a markup language?',
         'a': 'HTML',
         'b': 'CSS',
         'c': 'Javascript',
         'd': 'PHP',
         'correct': 'a'
     },
     {
         'que': 'What year was javascript launched?',
         'a': '1996',
         'b': '1995',
         'c': '1994',
         'd': 'none of the above',
         'correct': 'b'
     },
     {
         'que': 'What does CSS stands for?',
         'a': 'Hypertext Markup Languge',
         'b': 'Cascading style Sheet',
         'c': 'Jason object Notation',
         'd': 'Helicpters TerminalMoterboats Lamborginis',
         'correct': 'b'
     },
     {
         "que": "What does HTML stand for?",
         "a": "Hyper Trainer Marking Language",
         "b": "Hyper Text Marketing Language",
         "c": "Hyper Text Markup Language",
         "d": "Hyperlink Text Mark Language",
         "correct": "c"
     },
     {
         "que": "Which language is used for styling web pages?",
         "a": "HTML",
         "b": "JQuery",
         "c": "CSS",
         "d": "XML",
         "correct": "c"
     },
     {
         "que": "Which is not a programming language?",
         "a": "Python",
         "b": "Java",
         "c": "HTML",
         "d": "C++",
         "correct": "c"
     },
     {
         "que": "What does JS stand for?",
         "a": "JavaStyle",
         "b": "JavaScript",
         "c": "JustScript",
         "d": "JollyState",
         "correct": "b"
     },
     {
         "que": "Which tag is used to link an external CSS file?",
         "a": "<script>",
         "b": "<style>",
         "c": "<link>",
         "d": "<css>",
         "correct": "c"
     },
     {
         "que": "Which property is used to change text color in CSS?",
         "a": "font-color",
         "b": "text-color",
         "c": "color",
         "d": "background-color",
         "correct": "c"
     },
     {
         "que": "Which HTML tag is used to display a large heading?",
         "a": "<h6>",
         "b": "<h1>",
         "c": "<p>",
         "d": "<head>",
         "correct": "b"
  }
];
  

let index = 0;
let total = questions.length;
let right = 0,
    wrong = 0;

const quesBox = document.querySelector('#quesBox')
const optionInputs = document.querySelectorAll('.option')
const nextBtn = document.querySelector('#next')
const prevBtn = document.querySelector('#prev')
const submitBtn = document.querySelector('#submit')
const progressBar = document.querySelector('#progress')

const loadQuestion = () => {
    reset();
    const data = questions[index];
    quesBox.innerText = `${index + 1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
    progressBar.style.width = `${((index + 1) / total) * 100}%`;

    // Show previously selected answer if any
    if (questions[index].userAnswer) {
        optionInputs.forEach(input => {
            if (input.value === questions[index].userAnswer) {
                input.checked = true;
            }
        });
    }

    // Disable Next button if it's the last question and already answered
    if (index === total - 1 && questions[index].userAnswer) {
        nextBtn.disabled = true;
    } else {
        nextBtn.disabled = false;
    }
}

nextBtn.addEventListener('click', () => {
    const ans = getAnswer();
    if (!ans) {
        alert("Please select an answer!");
        return;
    }
    questions[index].userAnswer = ans;
    index++;
    if (index >= total) {
        return endQuiz();
    }
    loadQuestion();
});

prevBtn.addEventListener('click', () => {
    if (index > 0) {
        index--;
        loadQuestion();
    }
})

submitBtn.addEventListener('click', () => {
    questions.forEach((q, i) => {
        if (q.userAnswer === q.correct) {
            right++;
        } else {
            wrong++;
        }
    });
    endQuiz();
});

optionInputs.forEach(input => {
    input.addEventListener('change', () => {
        const selected = getAnswer();
        questions[index].userAnswer = selected;
        if (index === total - 1) {
            nextBtn.disabled = true;
            
        } else {
            nextBtn.disabled = false;
        }
    });
});

const getAnswer = () => {
    let answer;
    optionInputs.forEach((input) => {
        if (input.checked) {
            answer = input.value;
        }
    });
    return answer;
}

const reset = () => {
    optionInputs.forEach((input) => {
        input.checked = false;
    });
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
        <div style="text-align: center">  
            <h3>Thank you for playing the quiz</h3>
            <h2>${right} / ${total} are correct</h2>
            <h3>Score: ${(right / total * 100).toFixed(2)}%</h3>
            <button onclick="window.location.reload()" style="
                background-color: blue;
                color: white;
                padding: 10px 20px;
                border: none;
                border-radius: 5px;
                font-size: 16px;
                cursor: pointer;
                margin-top: 20px;
            ">Restart Quiz</button>
        </div>`;
}
loadQuestion();
