const quizData = [
    {
        question: 'Президент России',
        a: 'Дональд Трамп',
        b: 'Владимир Путин',
        c: 'Ангела Меркель',
        d: 'Филлип Киркоров',
        correct: 'b'
    },{
        question: 'Кто проживает на дне океана?',
        a: 'Спанч Боб',
        b: 'Бульвинкль',
        c: 'Бэтмен',
        d: 'Айзек Кларк',
        correct: 'a'
    },{
        question: 'Сколько рук у человека?',
        a: '1',
        b: '3',
        c: '5',
        d: '2',
        correct: 'd'
    },{
        question: 'Сколько колес у велосипеда?',
        a: '8',
        b: '16',
        c: '2',
        d: '32',
        correct: 'c'
    },{
        question: 'Что тяжелее: 1кг пуха или 1кг железа?',
        a: '1кг пуха',
        b: '1кг железа',
        c: 'Одинакого',
        d: '1кг стали',
        correct: 'c'
    }
]

const questionEl = document.getElementById('question')

a_text = document.getElementById('a_text')
b_text = document.getElementById('b_text')
c_text = document.getElementById('c_text')
d_text = document.getElementById('d_text')

let currentQuiz = 0

loadQuiz ();

function loadQuiz() {
    const currentQuizData = quizData[currentQuestion]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

    currentQuestion++
}