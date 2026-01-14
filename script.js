document.addEventListener('DOMContentLoaded', () => {
    // 1. 100 Questions Data (Sample shown, add your full list here)
    const questions = [
        { q: "Giant : Dwarf :: Genius : ?", options: ["Wicked", "Gentle", "Idiot", "Tiny"], correct: 2 },
        { q: "Which Article deals with Right to Equality?", options: ["Art 14", "Art 19", "Art 21", "Art 32"], correct: 0 },
        { q: "If x + 1/x = 5, find x^2 + 1/x^2:", options: ["23", "25", "27", "21"], correct: 0 },
        { q: "Synonym of 'ABANDON':", options: ["Keep", "Forsake", "Cherish", "Adopt"], correct: 1 }
        // ... paste the rest of the 100 questions here
    ];

    let currentIdx = 0;
    let userAnswers = new Array(questions.length).fill(null);
    let userName = "";
    let timerInterval;

    const startBtn = document.getElementById('start-btn');
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');
    const submitBtn = document.getElementById('submit-btn');

    // START BUTTON
    if (startBtn) {
        startBtn.onclick = () => {
            const nameField = document.getElementById('user-name');
            userName = nameField.value.trim();

            if (userName === "") {
                alert("Please enter your name.");
                return;
            }

            document.getElementById('start-screen').classList.add('hidden');
            document.getElementById('exam-interface').classList.remove('hidden');
            document.getElementById('candidate-display').innerText = "Candidate: " + userName;

            initPalette();
            showQuestion(0);
            startTimer(3600); 
        };
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
                <div class="option-item" style="margin: 10px 0; padding: 10px; background: #f9f9f9; border-radius: 5px;">
                    <input type="radio" name="answer" id="opt${i}" value="${i}" ${isChecked}>
                    <label for="opt${i}" style="cursor:pointer; margin-left: 10px;">${opt}</label>
                </div>
            `;
        });
        updatePalette();
    }

    // NEXT & PREVIOUS
    nextBtn.onclick = () => {
        const selected = document.querySelector('input[name="answer"]:checked');
        if (selected) {
            userAnswers[currentIdx] = parseInt(selected.value);
        }
        if (currentIdx < questions.length - 1) {
            showQuestion(currentIdx + 1);
        }
    };

    prevBtn.onclick = () => {
        if (currentIdx > 0) {
            showQuestion(currentIdx - 1);
        }
    };

    function initPalette() {
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
        timerInterval = setInterval(() => {
            seconds--;
            let m = Math.floor(seconds / 60);
            let s = seconds % 60;
            document.getElementById('timer').innerText = `${m}:${s < 10 ? '0' : ''}${s}`;
            if (seconds <= 0) {
                clearInterval(timerInterval);
                submitExam();
            }
        }, 1000);
    }

    submitBtn.onclick = () => {
        if (confirm("Submit the exam?")) submitExam();
    };

    function submitExam() {
        clearInterval(timerInterval);
        document.getElementById('exam-interface').classList.add('hidden');
        document.getElementById('result-screen').classList.remove('hidden');

        let correct = 0, wrong = 0;
        userAnswers.forEach((ans, i) => {
            if (ans === questions[i].correct) correct++;
            else if (ans !== null) wrong++;
        });

        document.getElementById('res-name').innerText = userName;
        document.getElementById('res-total').innerText = questions.length;
        document.getElementById('res-correct').innerText = correct;
        document.getElementById('res-wrong').innerText = wrong;
        document.getElementById('res-score').innerText = ((correct * 2) - (wrong * 0.5)).toFixed(2);
    }
});
