const questions = [
    { q: "Which letter cluster will complete the given series? PORT, QPSU, SRUW, ____, ZYBD, EDGI", options: ["VUWZ", "TSWX", "VUXZ", "TTXZ"], correct: 2 },
    { q: "Select the related number: 12 : 144 :: 15 : ?", options: ["200", "225", "250", "255"], correct: 1 },
    { q: "Which is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], correct: 2 },
    // Add more questions here...
];

let currentIdx = 0;
let userAnswers = new Array(questions.length).fill(null);
let userName = "";
let timer;

// START EXAM
document.getElementById('start-btn').addEventListener('click', () => {
    userName = document.getElementById('user-name').value;
    if (!userName) return alert("Enter Name First");

    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('exam-interface').classList.remove('hidden');
    document.getElementById('candidate-display').innerText = "Candidate: " + userName;

    buildPalette();
    showQuestion(0);
    startTimer(3600); // 60 mins
});

function buildPalette() {
    const grid = document.getElementById('palette-grid');
    grid.innerHTML = "";
    questions.forEach((_, i) => {
        const btn = document.createElement('div');
        btn.className = 'p-circle';
        btn.innerText = i + 1;
        btn.onclick = () => showQuestion(i);
        grid.appendChild(btn);
    });
}

function showQuestion(index) {
    currentIdx = index;
    document.getElementById('q-number').innerText = index + 1;
    document.getElementById('question-text').innerText = questions[index].q;

    const optionsBox = document.getElementById('options-list');
    optionsBox.innerHTML = "";
    questions[index].options.forEach((opt, i) => {
        const isChecked = userAnswers[index] === i ? 'checked' : '';
        optionsBox.innerHTML += `
            <div>
                <input type="radio" name="answer" value="${i}" ${isChecked}> ${opt}
            </div>
        `;
    });
    updatePalette();
}

// SAVE & NEXT
document.getElementById('next-btn').addEventListener('click', () => {
    const selected = document.querySelector('input[name="answer"]:checked');
    if (selected) {
        userAnswers[currentIdx] = parseInt(selected.value);
    }
    
    if (currentIdx < questions.length - 1) {
        showQuestion(currentIdx + 1);
    }
});

function updatePalette() {
    const circles = document.querySelectorAll('.p-circle');
    circles.forEach((c, i) => {
        c.classList.remove('current', 'answered', 'skipped');
        if (i === currentIdx) c.classList.add('current');
        if (userAnswers[i] !== null) c.classList.add('answered');
        else if (i < currentIdx) c.classList.add('skipped');
    });
}

function startTimer(seconds) {
    timer = setInterval(() => {
        seconds--;
        let m = Math.floor(seconds / 60);
        let s = seconds % 60;
        document.getElementById('timer').innerText = `${m}:${s < 10 ? '0' : ''}${s}`;
        if (seconds <= 0) {
            clearInterval(timer);
            submitExam();
        }
    }, 1000);
}

document.getElementById('submit-btn').addEventListener('click', () => {
    if(confirm("Are you sure you want to submit?")) submitExam();
});

function submitExam() {
    clearInterval(timer);
    document.getElementById('exam-interface').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');

    let correct = 0, wrong = 0;
    userAnswers.forEach((ans, i) => {
        if (ans === questions[i].correct) correct++;
        else if (ans !== null) wrong++;
    });

    let score = (correct * 2) - (wrong * 0.5);
    document.getElementById('res-name').innerText = userName;
    document.getElementById('res-total').innerText = questions.length;
    document.getElementById('res-correct').innerText = correct;
    document.getElementById('res-wrong').innerText = wrong;
    document.getElementById('res-score').innerText = score.toFixed(2);
}
