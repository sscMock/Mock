const questions = [
    // --- SECTION 1: GENERAL INTELLIGENCE & REASONING (1-25) ---
    { q: "Giant : Dwarf :: Genius : ?", options: ["Wicked", "Gentle", "Idiot", "Tiny"], correct: 2 },
    { q: "Find the odd one out:", options: ["Square", "Triangle", "Rectangle", "Circle"], correct: 3 },
    { q: "Series: 7, 10, 14, 19, 25, ?", options: ["32", "33", "30", "31"], correct: 0 },
    { q: "If 'PEAK' is coded as '3512' and 'DINE' as '6895', what is 'KIND'?", options: ["2896", "2986", "2356", "2716"], correct: 0 },
    { q: "A is B's sister. C is B's mother. D is C's father. How is A related to D?", options: ["Grandmother", "Granddaughter", "Daughter", "Mother"], correct: 1 },
    { q: "Arrange in logical order: 1. Gold, 2. Iron, 3. Sand, 4. Platinum, 5. Diamond", options: ["3,2,1,5,4", "2,4,3,5,1", "3,1,2,5,4", "1,2,3,4,5"], correct: 0 },
    { q: "If '+' means 'x', '-' means '+', 'x' means '/' and '/' means '-', then 15+3x2/5-7 = ?", options: ["24.5", "15", "12.5", "20"], correct: 0 },
    { q: "Select the related number: 18 : 30 :: 36 : ?", options: ["64", "66", "54", "62"], correct: 1 },
    { q: "Point: Line :: Line : ?", options: ["Surface", "Square", "Sphere", "Length"], correct: 0 },
    { q: "Find the missing number: 4, 9, 20, 43, 90, ?", options: ["180", "185", "190", "187"], correct: 1 },
    // (Questions 11-25 follow similar logic: Analogies, Venn Diagrams, Syllogism, Paper Folding)

    // --- SECTION 2: GENERAL AWARENESS (26-50) ---
    { q: "Which Article of the Constitution deals with the Right to Equality?", options: ["Art 14", "Art 19", "Art 21", "Art 32"], correct: 0 },
    { q: "Who was the founder of the Slave Dynasty?", options: ["Iltutmish", "Balban", "Qutb-ud-din Aibak", "Razia Sultan"], correct: 2 },
    { q: "The Battle of Plassey was fought in which year?", options: ["1757", "1764", "1526", "1857"], correct: 0 },
    { q: "Which planet is known as the 'Red Planet'?", options: ["Venus", "Mars", "Saturn", "Jupiter"], correct: 1 },
    { q: "Who wrote 'Discovery of India'?", options: ["Mahatma Gandhi", "Jawaharlal Nehru", "B.R. Ambedkar", "S. Radhakrishnan"], correct: 1 },
    { q: "Which gland in the human body is called the 'Master Gland'?", options: ["Thyroid", "Adrenal", "Pituitary", "Pancreas"], correct: 2 },
    { q: "What is the SI unit of Pressure?", options: ["Joule", "Pascal", "Watt", "Newton"], correct: 1 },
    { q: "In which year was the GST implemented in India?", options: ["2015", "2016", "2017", "2018"], correct: 2 },
    { q: "Kaziranga National Park is famous for:", options: ["Lions", "Tigers", "One-horned Rhino", "Elephants"], correct: 2 },
    { q: "Who was the first woman Governor of an Indian State?", options: ["Sarojini Naidu", "Sucheta Kripalani", "Indira Gandhi", "Vijaya Lakshmi Pandit"], correct: 0 },
    // (Questions 36-50 follow similar topics: Current Affairs, Biology, Chemistry, Ancient History)

    // --- SECTION 3: QUANTITATIVE APTITUDE (51-75) ---
    { q: "If x + 1/x = 5, find x^2 + 1/x^2:", options: ["23", "25", "27", "21"], correct: 0 },
    { q: "The average of first 50 natural numbers is:", options: ["25.5", "25", "26", "24.5"], correct: 0 },
    { q: "By selling a watch for Rs. 144, a man loses 10%. At what price should he sell it to gain 10%?", options: ["176", "180", "165", "170"], correct: 0 },
    { q: "A can do a work in 10 days, B in 15 days. How many days if they work together?", options: ["5", "6", "8", "4"], correct: 1 },
    { q: "If the radius of a circle is doubled, its area becomes:", options: ["2 times", "3 times", "4 times", "Same"], correct: 2 },
    { q: "Find the HCF of 24, 36 and 40:", options: ["4", "6", "8", "2"], correct: 0 },
    { q: "A sum of money doubles itself in 5 years at SI. In how many years will it become 4 times?", options: ["10", "15", "12", "20"], correct: 1 },
    { q: "Tan 45° + Cot 45° = ?", options: ["0", "1", "2", "Undefined"], correct: 2 },
    { q: "Find the value of (999^2 - 1):", options: ["998000", "998001", "999000", "997000"], correct: 0 },
    { q: "The ratio of two numbers is 3:4 and their LCM is 120. The sum of numbers is:", options: ["60", "70", "80", "100"], correct: 1 },
    // (Questions 61-75 follow: Geometry, Data Interpretation, Mensuration, Trigonometry)

    // --- SECTION 4: ENGLISH COMPREHENSION (76-100) ---
    { q: "Synonym of 'ABANDON':", options: ["Keep", "Forsake", "Cherish", "Adopt"], correct: 1 },
    { q: "Antonym of 'ARTIFICIAL':", options: ["Natural", "Red", "Solid", "Truthful"], correct: 0 },
    { q: "Choose the correctly spelled word:", options: ["Committee", "Comittee", "Commitee", "Comitee"], correct: 0 },
    { q: "One word for 'A person who hates mankind':", options: ["Optimist", "Misanthrope", "Philanthropist", "Theist"], correct: 1 },
    { q: "Idiom 'To turn over a new leaf' means:", options: ["To change for the better", "To read a book", "To plant a tree", "To be lazy"], correct: 0 },
    { q: "Fill in the blank: Neither he nor I ___ going.", options: ["is", "am", "are", "were"], correct: 1 },
    { q: "Change to Passive: 'The boy kicked the ball.'", options: ["The ball was kicked by the boy", "The ball is kicked by the boy", "The ball had kicked by the boy", "The ball was being kicked"], correct: 0 },
    { q: "Synonym of 'FRAGILE':", options: ["Strong", "Tough", "Brittle", "Heavy"], correct: 2 },
    { q: "Antonym of 'ENORMOUS':", options: ["Huge", "Tiny", "Large", "Wide"], correct: 1 },
    { q: "Choose the error: 'He is (A) / more taller (B) / than (C) / his brother (D).'", options: ["A", "B", "C", "D"], correct: 1 }
    // (Questions 86-100 follow: Reading comprehension, Cloze test, Active/Passive, Narration)
];
 
