document.addEventListener('DOMContentLoaded', () => {

const questions = [
    { q: "The ratio of the areas of two squares, one having its diagonal double that of the other, is:", options: ["2 : 1", "3 : 1", "4 : 1", "8 : 1"], correct: 2 },
    { q: "If the radius of a cylinder is decreased by 20% and the height is increased by 20%, the change in volume is:", options: ["20% decrease", "23.2% decrease", "4% decrease", "No change"], correct: 2 },
    { q: "The area of a sector of a circle of radius 21 cm is 231 cm². The central angle of the sector is:", options: ["45°", "60°", "90°", "120°"], correct: 1 },
    { q: "A copper wire is bent in the form of an equilateral triangle and has an area of 121√3 cm². If the same wire is bent into the form of a circle, the area of the circle is (Take π = 22/7):", options: ["346.5 cm²", "314.5 cm²", "693 cm²", "154 cm²"], correct: 0 },
    { q: "The length, breadth, and height of a room are in the ratio 3 : 2 : 1. If the volume of the room is 1296 m³, find the breadth.", options: ["6 m", "12 m", "18 m", "24 m"], correct: 1 },
    { q: "The diagonal of a cuboid is 11√2 cm. If the length and breadth are 10 cm and 8 cm respectively, find the height.", options: ["6 cm", "7 cm", "8 cm", "9 cm"], correct: 0 },
    { q: "A hollow iron pipe is 21 cm long and its exterior diameter is 8 cm. If the thickness of the pipe is 1 cm and iron weighs 8 g/cm³, the weight of the pipe is:", options: ["3.6 kg", "3.696 kg", "3.12 kg", "4.2 kg"], correct: 1 },
    { q: "If the radius of a sphere is doubled, how many times will its volume become?", options: ["2 times", "4 times", "8 times", "16 times"], correct: 2 },
    { q: "The perimeter of a semi-circular area is 108 cm. Its diameter is:", options: ["36 cm", "42 cm", "44 cm", "56 cm"], correct: 1 },
    { q: "Two cones have their heights in the ratio 1 : 3 and radii in the ratio 3 : 1. What is the ratio of their volumes?", options: ["1 : 1", "2 : 3", "3 : 1", "9 : 1"], correct: 3 },
    { q: "The length of the longest rod that can be placed in a room 12 m long, 9 m wide, and 8 m high is:", options: ["15 m", "16 m", "17 m", "19 m"], correct: 2 },
    { q: "The base of a right prism is a triangle whose sides are 9 cm, 12 cm, and 15 cm. If the height of the prism is 5 cm, find its total surface area.", options: ["180 cm²", "288 cm²", "324 cm²", "412 cm²"], correct: 2 },
    { q: "Find the area of a regular hexagon with side 4 cm.", options: ["16√3 cm²", "24√3 cm²", "32√3 cm²", "48√3 cm²"], correct: 0 },
    { q: "The ratio of the outer and inner perimeters of a circular path is 23 : 22. If the path is 5 meters wide, the diameter of the inner circle is:", options: ["110 m", "220 m", "230 m", "440 m"], correct: 2 },
    { q: "A sphere and a cube have the same surface area. The ratio of the volume of the sphere to that of the cube is:", options: ["√6 : √π", "√π : √6", "6 : π", "π : 6"], correct: 2 },
    { q: "The base of a right pyramid is a square of side 10 cm. If its height is 12 cm, then its slant height is:", options: ["13 cm", "15 cm", "18 cm", "20 cm"], correct: 1 },
    { q: "If the area of a circle is 616 cm², then its circumference is:", options: ["44 cm", "66 cm", "88 cm", "92 cm"], correct: 2 },
    { q: "The volume of a right circular cone is 924 cm³ and its height is 18 cm. Find its base radius.", options: ["5 cm", "7 cm", "9 cm", "12 cm"], correct: 1 },
    { q: "The numerical values of the volume and the area of the lateral surface of a right circular cylinder are equal. If the height is 2 units, then the radius is:", options: ["1 unit", "2 units", "3 units", "4 units"], correct: 0 },
    { q: "Find the number of lead balls, each 1 cm in diameter, that can be made from a sphere of diameter 12 cm.", options: ["144", "1728", "512", "1024"], correct: 1 },
    { q: "The sides of a triangle are in the ratio 1/2 : 1/3 : 1/4. If the perimeter is 52 cm, the length of the shortest side is:", options: ["9 cm", "10 cm", "12 m", "24 cm"], correct: 0 },
    { q: "The base of a parallelogram is twice its height. If the area is 72 cm², then its height is:", options: ["6 cm", "12 cm", "18 cm", "9 cm"], correct: 0 },
    { q: "If the side of an equilateral triangle is increased by 2 units, its area increases by 3√3 square units. What is the side of the triangle?", options: ["1 unit", "2 units", "3 units", "4 units"], correct: 1 },
    { q: "A cylindrical tank of radius 7 m and height 10 m is full of water. How many spherical containers of radius 7 cm can be filled with this water?", options: ["10^5", "1.5 × 10^5", "1.5 × 10^6", "1.05 × 10^6"], correct: 2 },
    { q: "The lateral surface area of a cube is 256 m². Its volume is:", options: ["64 m³", "512 m³", "216 m³", "1024 m³"], correct: 1 },
    { q: "The radius of the base of a conical tent is 7 m and its height is 24 m. Find the length of cloth used to make the tent if the width of cloth is 5 m.", options: ["100 m", "110 m", "120 m", "130 m"], correct: 2 },
    { q: "The perimeter of a rhombus is 40 cm and one of its diagonals is 12 cm. Find its area.", options: ["96 cm²", "48 cm²", "120 cm²", "144 cm²"], correct: 0 },
    { q: "Water flows out of a pipe of cross-section 5 cm² at a speed of 30 cm/sec. How many liters of water will flow out in one minute?", options: ["0.9 L", "9 L", "1.8 L", "18 L"], correct: 2 },
    { q: "The edge of a cube is increased by 50%. What is the percentage increase in its total surface area?", options: ["50%", "100%", "125%", "150%"], correct: 3 },
    { q: "A metallic sphere of radius 10.5 cm is melted and recast into small cones, each of radius 3.5 cm and height 3 cm. The number of cones formed is:", options: ["112", "126", "144", "108"], correct: 1 }
];

let currentIdx = 0;
let userAnswers = new Array(questions.length).fill(null);
let userName = "";
let timerInterval;

const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const submitBtn = document.getElementById('submit-btn');

if (startBtn) {
    startBtn.onclick = () => {
        const nameField = document.getElementById('user-name');
        userName = nameField.value.trim();
        if(userName===""){ alert("Please enter your name."); return; }

        document.getElementById('start-screen').classList.add('hidden');
        document.getElementById('exam-interface').classList.remove('hidden');
        document.getElementById('candidate-display').innerText = "Candidate: "+userName;

        initPalette();
        showQuestion(0);
        startTimer(3600);
    };
}

function showQuestion(index){
    currentIdx=index;
    document.getElementById('q-number').innerText=index+1;
    document.getElementById('question-text').innerText=questions[index].q;

    const optionsBox=document.getElementById('options-list');
    optionsBox.innerHTML="";
    questions[index].options.forEach((opt,i)=>{
        const isChecked=userAnswers[index]===i?'checked':'';
        optionsBox.innerHTML+=`
        <div class="option-item">
            <input type="radio" name="answer" id="opt${i}" value="${i}" ${isChecked}>
            <label for="opt${i}">${opt}</label>
        </div>`;
    });
    updatePalette();
}

nextBtn.onclick=()=>{
    const selected=document.querySelector('input[name="answer"]:checked');
    if(selected) userAnswers[currentIdx]=parseInt(selected.value);
    if(currentIdx<questions.length-1) showQuestion(currentIdx+1);
};

prevBtn.onclick=()=>{
    if(currentIdx>0) showQuestion(currentIdx-1);
};

function initPalette(){
    const grid=document.getElementById('palette-grid');
    grid.innerHTML="";
    questions.forEach((_,i)=>{
        const btn=document.createElement('div');
        btn.className='p-circle';
        btn.innerText=i+1;
        btn.onclick=()=>showQuestion(i);
        grid.appendChild(btn);
    });
}

function updatePalette(){
    const circles=document.querySelectorAll('.p-circle');
    circles.forEach((c,i)=>{
        c.classList.remove('current','answered','skipped');
        if(i===currentIdx) c.classList.add('current');
        if(userAnswers[i]!==null) c.classList.add('answered');
        else if(i<currentIdx) c.classList.add('skipped');
    });
}

function startTimer(seconds){
    timerInterval=setInterval(()=>{
        seconds--;
        let m=Math.floor(seconds/60);
        let s=seconds%60;
        document.getElementById('timer').innerText=`${m}:${s<10?'0':''}${s}`;
        if(seconds<=0){ clearInterval(timerInterval); submitExam(); }
    },1000);
}

submitBtn.onclick=()=>{ if(confirm("Submit the exam?")) submitExam(); };

function submitExam(){
    clearInterval(timerInterval);
    document.getElementById('exam-interface').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');

    let correct=0,wrong=0;
    userAnswers.forEach((ans,i)=>{
        if(ans===questions[i].correct) correct++;
        else if(ans!==null) wrong++;
    });

    document.getElementById('res-name').innerText=userName;
    document.getElementById('res-total').innerText=questions.length;
    document.getElementById('res-correct').innerText=correct;
    document.getElementById('res-wrong').innerText=wrong;
    document.getElementById('res-score').innerText=((correct*2)-(wrong*0.5)).toFixed(2);
}
