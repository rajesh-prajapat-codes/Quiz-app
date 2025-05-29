







// const questions = [{
//     'que': 'Which of the following is a markup language?',
//     'a': 'HTML',
//     'b': 'CSS',
//     'c': 'Javascript',
//     'd': 'PHP',
//     'correct': 'a'
// },
// {
//     'que': 'What year was javascript launched?',
//     'a': '1996',
//     'b': '1995',
//     'c': '1994',
//     'd': 'none of the above',
//     'correct': 'b'
// },
// {
//     'que': 'What does CSS stands for?',
//     'a': 'Hypertext Markup Languge',
//     'b': 'Cascading style Sheet',
//     'c': 'Jason object Notation',
//     'd': 'Helicpters TerminalMoterboats Lamborginis',
//     'correct': 'b'
// },
// {
//     "que": "What does HTML stand for?",
//     "a": "Hyper Trainer Marking Language",
//     "b": "Hyper Text Marketing Language",
//     "c": "Hyper Text Markup Language",
//     "d": "Hyperlink Text Mark Language",
//     "correct": "c"
// },
// {
//     "que": "Which language is used for styling web pages?",
//     "a": "HTML",
//     "b": "JQuery",
//     "c": "CSS",
//     "d": "XML",
//     "correct": "c"
// },
// {
//     "que": "Which is not a programming language?",
//     "a": "Python",
//     "b": "Java",
//     "c": "HTML",
//     "d": "C++",
//     "correct": "c"
// },
// {
//     "que": "What does JS stand for?",
//     "a": "JavaStyle",
//     "b": "JavaScript",
//     "c": "JustScript",
//     "d": "JollyState",
//     "correct": "b"
// },
// {
//     "que": "Which tag is used to link an external CSS file?",
//     "a": "<script>",
//     "b": "<style>",
//     "c": "<link>",
//     "d": "<css>",
//     "correct": "c"
// },
// {
//     "que": "Which property is used to change text color in CSS?",
//     "a": "font-color",
//     "b": "text-color",
//     "c": "color",
//     "d": "background-color",
//     "correct": "c"
// },
// {
//     "que": "Which HTML tag is used to display a large heading?",
//     "a": "<h6>",
//     "b": "<h1>",
//     "c": "<p>",
//     "d": "<head>",
//     "correct": "b"
// }]

// let index = 0;
// let total = questions.length;
// let right = 0,
//     wrong = 0;

// const quesBox = document.querySelector('#quesBox')
// const optionInputs = document.querySelectorAll('.option')
// const nextBtn = document.querySelector('#next')
// const prevBtn = document.querySelector('#prev')
// const submitBtn = document.querySelector('#submit')
// const progressBar = document.querySelector('#progress')

// const loadQuestion = () => {
//     reset();
//     const data = questions[index];
//     quesBox.innerText = `${index + 1}) ${data.que}`;
//     optionInputs[0].nextElementSibling.innerText = data.a;
//     optionInputs[1].nextElementSibling.innerText = data.b;
//     optionInputs[2].nextElementSibling.innerText = data.c;
//     optionInputs[3].nextElementSibling.innerText = data.d;
//     progressBar.style.width = `${((index + 1) / total) * 100}%`;

//     // Show previously selected answer if any
//     if (questions[index].userAnswer) {
//         optionInputs.forEach(input => {
//             if (input.value === questions[index].userAnswer) {
//                 input.checked = true;
//             }
//         });
//     }
// }

// nextBtn.addEventListener('click', () => {
//     const ans = getAnswer();
//     if (!ans) {
//         alert("Please select an answer!");
//         return;
//     }
//     questions[index].userAnswer = ans;
//     index++;
//     if (index >= total) {
//         return endQuiz();
//     }
//     loadQuestion();
// });

// prevBtn.addEventListener('click', () => {
//     if (index > 0) {
//         index--;
//         loadQuestion();
//     }
// })

// submitBtn.addEventListener('click', () => {
//     questions.forEach((q, i) => {
//         if (q.userAnswer === q.correct) {
//             right++;
//         } else {
//             wrong++;
//         }
//     });
//     endQuiz();
// });

// const getAnswer = () => {
//     let answer;
//     optionInputs.forEach((input) => {
//         if (input.checked) {
//             answer = input.value;
//         }
//     });
//     return answer;
// }

// const reset = () => {
//     optionInputs.forEach((input) => {
//         input.checked = false;
//     });
// }

// const endQuiz = () => {
//     document.getElementById("box").innerHTML = `
//         <div style="text-align: center">  
//             <h3>Thank you for playing the quiz</h3>
//             <h2>${right} / ${total} are correct</h2>
//             <h3>Score: ${(right / total * 100).toFixed(2)}%</h3>
//             <button onclick="window.location.reload()">Restart Quiz</button>
//         </div>`
// }



// loadQuestion();













const questions = [
 {
  que: "जनवरी 2025 में भारत ने किस देश के साथ नया व्यापार समझौता किया?",
  a: "अमेरिका",
  b: "चीन",
  c: "जापान",
  d: "रूस",
  correct: "a"
},
{
  que: "जनवरी 2025 में किस भारतीय राज्य ने नए IT हब का उद्घाटन किया?",
  a: "तेलंगाना",
  b: "कर्नाटक",
  c: "महाराष्ट्र",
  d: "तमिलनाडु",
  correct: "a"
},
{
  que: "जनवरी 2025 में भारत के किस क्रिकेटर ने नया अंतरराष्ट्रीय रिकॉर्ड बनाया?",
  a: "विराट कोहली",
  b: "रोहित शर्मा",
  c: "सचिन तेंदुलकर",
  d: "महेन्द्र सिंह धोनी",
  correct: "a"
},
{
  que: "जनवरी 2025 में भारत ने किस क्षेत्र में नई ऊर्जा नीति लागू की?",
  a: "सौर ऊर्जा",
  b: "पवन ऊर्जा",
  c: "जैव ईंधन",
  d: "परमाणु ऊर्जा",
  correct: "a"
},
{
  que: "जनवरी 2025 में भारत की GDP वृद्धि दर क्या रही?",
  a: "5.5%",
  b: "6.1%",
  c: "7.0%",
  d: "4.8%",
  correct: "c"
},
{
  que: "जनवरी 2025 में भारत की कौन सी फिल्म ने अंतरराष्ट्रीय पुरस्कार जीता?",
  a: "पठान",
  b: "दंगल",
  c: "रंग दे बसंती",
  d: "पृथ्वीराज",
  correct: "a"
},
{
  que: "जनवरी 2025 में भारत ने किस देश के साथ रक्षा सहयोग बढ़ाया?",
  a: "अमेरिका",
  b: "फ्रांस",
  c: "इजराइल",
  d: "रूस",
  correct: "a"
},
{
  que: "जनवरी 2025 में किस भारतीय वैज्ञानिक को अंतरराष्ट्रीय सम्मान मिला?",
  a: "डॉ. कल्पना चावला",
  b: "डॉ. मनमोहन सिंह",
  c: "डॉ. रवींद्र पाटिल",
  d: "डॉ. हर्षवर्धन",
  correct: "c"
},
{
  que: "जनवरी 2025 में भारत की किस नदी की सफाई अभियान शुरू हुई?",
  a: "गंगा",
  b: "यमुना",
  c: "सरस्वती",
  d: "सिंधु",
  correct: "a"
},
{
  que: "जनवरी 2025 में भारत ने किस क्षेत्र में नया मोबाइल ऐप लॉन्च किया?",
  a: "स्वास्थ्य",
  b: "कृषि",
  c: "शिक्षा",
  d: "पर्यटन",
  correct: "a"
},

{
  que: "फरवरी 2025 में भारत ने किस अंतरराष्ट्रीय सम्मेलन की मेजबानी की?",
  a: "कॉप 28",
  b: "G20 शिखर सम्मेलन",
  c: "BRICS सम्मेलन",
  d: "UN जनरल असेंबली",
  correct: "a"
},
{
  que: "फरवरी 2025 में भारत के किस राज्य ने नए स्मार्ट सिटी प्रोजेक्ट की शुरुआत की?",
  a: "गुजरात",
  b: "राजस्थान",
  c: "मध्य प्रदेश",
  d: "उत्तर प्रदेश",
  correct: "b"
},
{
  que: "फरवरी 2025 में किस भारतीय महिला एथलीट ने ओलंपिक क्वालिफाई किया?",
  a: "पी.वी. सिंधु",
  b: "मीराबाई चानू",
  c: "दुती चंद",
  d: "हरमनप्रीत कौर",
  correct: "b"
},
{
  que: "फरवरी 2025 में भारत ने किस नई तकनीक का विकास किया?",
  a: "5G नेटवर्क",
  b: "कृत्रिम बुद्धिमत्ता",
  c: "सौर ऊर्जा पैनल",
  d: "स्पेस सैटेलाइट",
  correct: "b"
},
{
  que: "फरवरी 2025 में भारत की अर्थव्यवस्था ने कितनी वृद्धि दिखाई?",
  a: "7.2%",
  b: "6.5%",
  c: "5.8%",
  d: "6.0%",
  correct: "a"
},
{
  que: "फरवरी 2025 में भारत ने किस देश के साथ नयी रक्षा संधि पर हस्ताक्षर किए?",
  a: "अमेरिका",
  b: "चीन",
  c: "रूस",
  d: "फ्रांस",
  correct: "a"
},
{
  que: "फरवरी 2025 में भारत की सबसे बड़ी हेल्थकेयर पहल कौन सी रही?",
  a: "आयुष्मान भारत",
  b: "जन औषधि योजना",
  c: "मिशन संजीवनी",
  d: "राष्ट्रीय टीकाकरण अभियान",
  correct: "c"
},
{
  que: "फरवरी 2025 में किस भारतीय शहर ने स्मार्ट सिटी अवार्ड जीता?",
  a: "बेंगलुरु",
  b: "भोपाल",
  c: "पुणे",
  d: "जयपुर",
  correct: "b"
},
{
  que: "फरवरी 2025 में भारत ने किस खेल में पदक जीता?",
  a: "बैडमिंटन",
  b: "टेनिस",
  c: "शूटिंग",
  d: "हॉकी",
  correct: "c"
},
{
  que: "फरवरी 2025 में भारत ने किस विदेशी कंपनी के साथ सहयोग बढ़ाया?",
  a: "टेस्ला",
  b: "गूगल",
  c: "माइक्रोसॉफ्ट",
  d: "अमेज़न",
  correct: "a"
},

{
  que: "मार्च 2025 में भारत ने किस क्षेत्र में नई सरकारी योजना शुरू की?",
  a: "कृषि सुधार",
  b: "डिजिटल शिक्षा",
  c: "स्वच्छता अभियान",
  d: "सौर ऊर्जा",
  correct: "b"
},
{
  que: "मार्च 2025 में भारत के किस नेता ने विदेशी दौरे पर जाने की घोषणा की?",
  a: "नरेंद्र मोदी",
  b: "अमित शाह",
  c: "राजनाथ सिंह",
  d: "राहुल गांधी",
  correct: "a"
},
{
  que: "मार्च 2025 में किस भारतीय खिलाड़ी ने अंतरराष्ट्रीय टेनिस टूर्नामेंट जीता?",
  a: "लेखेश राम",
  b: "सानिया मिर्जा",
  c: "राहुल बाबा",
  d: "सुमित नागल",
  correct: "b"
},
{
  que: "मार्च 2025 में भारत की GDP वृद्धि दर कितनी रही?",
  a: "6.7%",
  b: "7.0%",
  c: "6.0%",
  d: "5.8%",
  correct: "a"
},
{
  que: "मार्च 2025 में भारत ने किस क्षेत्र में नए सोलर प्लांट की शुरुआत की?",
  a: "राजस्थान",
  b: "गुजरात",
  c: "महाराष्ट्र",
  d: "तेलंगाना",
  correct: "b"
},
{
  que: "मार्च 2025 में भारत के किस विश्वविद्यालय को अंतरराष्ट्रीय मान्यता मिली?",
  a: "IIT दिल्ली",
  b: "IIT बॉम्बे",
  c: "जवाहरलाल नेहरू विश्वविद्यालय",
  d: "अलीगढ़ मुस्लिम विश्वविद्यालय",
  correct: "c"
},
{
  que: "मार्च 2025 में भारत ने किस खेल में गोल्ड मेडल जीता?",
  a: "बैडमिंटन",
  b: "हॉकी",
  c: "कुश्ती",
  d: "बैस्बॉल",
  correct: "b"
},
{
  que: "मार्च 2025 में भारत ने किस देश के साथ व्यापार समझौता किया?",
  a: "जापान",
  b: "सिंगापुर",
  c: "ऑस्ट्रेलिया",
  d: "अमेरिका",
  correct: "a"
},
{
  que: "मार्च 2025 में किस भारतीय लेखक को साहित्य पुरस्कार मिला?",
  a: "अमिताव घोष",
  b: "अरुंधति राय",
  c: "कृष्णा सोबती",
  d: "रजनीश कपूर",
  correct: "b"
},
{
  que: "मार्च 2025 में भारत की ऊर्जा खपत में कितनी वृद्धि हुई?",
  a: "4%",
  b: "5%",
  c: "6%",
  d: "7%",
  correct: "c"
},

{
    que: "अप्रैल 2025 में भारत ने किस नए डिजिटल भुगतान प्लेटफॉर्म की शुरुआत की?",
    a: "UPI 3.0",
    b: "RuPay Global",
    c: "DigiPay",
    d: "BharatPay",
    correct: "a"
  },
  {
    que: "अप्रैल 2025 में भारत ने किस राज्य में नया स्मार्ट सिटी प्रोजेक्ट लॉन्च किया?",
    a: "मध्य प्रदेश",
    b: "उत्तर प्रदेश",
    c: "गोवा",
    d: "राजस्थान",
    correct: "a"
  },
  {
    que: "अप्रैल 2025 में भारत सरकार ने किस क्षेत्र में बड़ी निवेश योजना की घोषणा की?",
    a: "कृषि",
    b: "ऊर्जा",
    c: "स्वास्थ्य सेवा",
    d: "पर्यटन",
    correct: "b"
  },
  {
    que: "अप्रैल 2025 में भारतीय रेलवे ने किस नई सेवा की शुरुआत की?",
    a: "सुपरफास्ट ट्रेन",
    b: "इलेक्ट्रिक लोकल ट्रेन",
    c: "मेट्रो एक्सप्रेस",
    d: "रेलवे फूड सर्विस",
    correct: "b"
  },
  {
    que: "अप्रैल 2025 में भारत ने किस देश के साथ व्यापार समझौता किया?",
    a: "चीन",
    b: "जापान",
    c: "ऑस्ट्रेलिया",
    d: "रूस",
    correct: "c"
  },
  {
    que: "अप्रैल 2025 में भारत सरकार ने किस योजना के तहत स्वच्छ ऊर्जा को बढ़ावा दिया?",
    a: "सौर ऊर्जा योजना",
    b: "हवा ऊर्जा योजना",
    c: "जल ऊर्जा योजना",
    d: "ग्रीन एनर्जी मिशन",
    correct: "d"
  },
  {
    que: "अप्रैल 2025 में किस भारतीय खिलाड़ी ने अंतरराष्ट्रीय स्तर पर नया रिकॉर्ड बनाया?",
    a: "विराट कोहली",
    b: "पीवी सिंधु",
    c: "नीरज चोपड़ा",
    d: "साकिब अल हसन",
    correct: "c"
  },
  {
    que: "अप्रैल 2025 में भारत ने किस नई तकनीक का सफल परीक्षण किया?",
    a: "5G नेटवर्क",
    b: "क्वांटम कंप्यूटिंग",
    c: "आर्टिफिशियल इंटेलिजेंस",
    d: "स्वचालित ड्रोन",
    correct: "d"
  },
  {
    que: "अप्रैल 2025 में भारत सरकार ने किस योजना के तहत गरीबों को मुफ्त शिक्षा देने का लक्ष्य रखा?",
    a: "सक्षम शिक्षा योजना",
    b: "आधार शिक्षा मिशन",
    c: "शिक्षा का अधिकार",
    d: "निःशुल्क शिक्षा योजना",
    correct: "d"
  },
  {
    que: "अप्रैल 2025 में भारत ने किस अंतरराष्ट्रीय सम्मेलन की मेजबानी की?",
    a: "जी-20",
    b: "क्लाइमेट चेंज कॉन्फ्रेंस",
    c: "डिजिटल इंडिया सम्मेलन",
    d: "एशिया-पैसिफिक समिट",
    correct: "b"
  },

   {
    que: "मई 2025 में भारत सरकार ने किस क्षेत्र में नया अनुसंधान केंद्र स्थापित किया?",
    a: "स्पेस टेक्नोलॉजी",
    b: "कृत्रिम बुद्धिमत्ता",
    c: "नैनो टेक्नोलॉजी",
    d: "जैव प्रौद्योगिकी",
    correct: "b"
  },
  {
    que: "मई 2025 में भारत ने किस देश के साथ रक्षा सहयोग समझौता किया?",
    a: "अमेरिका",
    b: "रूस",
    c: "फ्रांस",
    d: "चीन",
    correct: "c"
  },
  {
    que: "मई 2025 में भारत सरकार ने किस योजना के तहत किसानों को वित्तीय सहायता दी?",
    a: "प्रधानमंत्री किसान सम्मान निधि",
    b: "कृषि उपज बाजार योजना",
    c: "डिजिटल कृषि मिशन",
    d: "जल जीवन मिशन",
    correct: "a"
  },
  {
    que: "मई 2025 में भारत ने किस क्षेत्र में पहली बार स्वदेशी सोलर पावर प्लांट स्थापित किया?",
    a: "राजस्थान",
    b: "गुजरात",
    c: "महाराष्ट्र",
    d: "तमिलनाडु",
    correct: "a"
  },
  {
    que: "मई 2025 में भारत ने किस खेल में एशियाई खेलों के लिए क्वालीफाई किया?",
    a: "हॉकी",
    b: "बैडमिंटन",
    c: "कबड्डी",
    d: "टेनिस",
    correct: "c"
  },
  {
    que: "मई 2025 में भारत सरकार ने किस क्षेत्र में बड़ा डिजिटल अभियान शुरू किया?",
    a: "स्वास्थ्य",
    b: "शिक्षा",
    c: "कृषि",
    d: "पर्यटन",
    correct: "b"
  },
  {
    que: "मई 2025 में भारत ने किस नई अंतरिक्ष मिशन की घोषणा की?",
    a: "मंगलयान 2",
    b: "चंद्रयान 4",
    c: "सूर्ययान",
    d: "ज्योतिषयान",
    correct: "b"
  },
  {
    que: "मई 2025 में भारत ने किस आर्थिक क्षेत्र में सुधार के लिए नई नीति लागू की?",
    a: "बैंकिंग",
    b: "टैक्सेशन",
    c: "विदेशी निवेश",
    d: "औद्योगिक उत्पादन",
    correct: "c"
  },
  {
    que: "मई 2025 में किस भारतीय महिला खिलाड़ी ने ओलंपिक में स्वर्ण पदक जीता?",
    a: "पीवी सिंधु",
    b: "दीपा करमकार",
    c: "मीराबाई चानू",
    d: "साक्षी मलिक",
    correct: "c"
  },
  {
    que: "मई 2025 में भारत सरकार ने किस योजना के तहत गरीबों को मुफ्त शिक्षा देने का लक्ष्य रखा?",
    a: "सक्षम शिक्षा योजना",
    b: "आधार शिक्षा मिशन",
    c: "शिक्षा का अधिकार",
    d: "निःशुल्क शिक्षा योजना",
    correct: "d"
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
