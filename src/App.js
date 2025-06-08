import React, { useState, useEffect, useRef } from 'react';

const sampleQuestions = [
  {
    id: 1,
    question: 'Arrange the planets in order from closest to farthest from the Sun.',
    choices: ['Mars', 'Earth', 'Mercury', 'Venus'],
    correctOrder: ['Mercury', 'Venus', 'Earth', 'Mars'],
  },
  {
    id: 2,
    question: 'Arrange these events in chronological order.',
    choices: ['French Revolution', 'American Revolution', 'World War I', 'World War II'],
    correctOrder: [
      'American Revolution',
      'French Revolution',
      'World War I',
      'World War II',
    ],
  },
  {
    id: 3,
    question: 'Arrange these programming languages by release date.',
    choices: ['Java', 'Python', 'C', 'JavaScript'],
    correctOrder: ['C', 'Python', 'Java', 'JavaScript'],
  },
  {
    id: 1,
    question: 'Starting with the earliest, arrange these leaders in the order in which they became President of India',
    choices: ['Pranab Mukherjee', 'Pratibha Patil', 'A. P. J. Abdul Kalam', 'K. R. Narayanan'],
    correctOrder: [
      'K. R. Narayanan',
      'A. P. J. Abdul Kalam',
      'Pratibha Patil',
      'Pranab Mukherjee',
    ],
  },
  {
    id: 2,
    question: 'Arrange these words in correct order to make a Hindi Proverb',
    choices: ['Ungli', 'Daanton', 'Tale', 'Dabanna'],
    correctOrder: [
      'Daanton',
      'Tale',
      'Ungli',
      'Dabanna',
    ],
  },
  {
    id: 3,
    question: 'Starting with the earliest, arrange these landmark events in the order in which they took place in Mughal History',
    choices: ['Akbars birth', 'Baburs attack on India', 'Construction of the Taj Mahal', 'Aurangzebs death'],
    correctOrder: [
      'Baburs attack on India',
      'Akbars birth',
      'Construction of the Taj Mahal',
      'Aurangzebs death',
    ],
  },
  {
    id: 4,
    question: 'Arrange the following powers or dynasties in the order in which they first ruled in India from Delhi',
    choices: ['The British', 'Mughals', 'Chauhans', 'Lodies'],
    correctOrder: [
      'Chauhans',
      'Lodies',
      'Mughals',
      'The British',
    ],
  },
  {
    id: 5,
    question: 'Starting from the least, arrange these famous personalities in increasing order of the number of children they have',
    choices: ['H. C. Mary Kom', 'Farah Khan', 'Aishwaraya Rai Bachchan', 'Rabri Devi'],
    correctOrder: [
      'Aishwaraya Rai Bachchan',
      'H. C. Mary Kom',
      'Farah Khan',
      'Rabri Devi',
    ],
  },
  {
    id: 6,
    question: 'Arrange these words in the correct order to form a famous line from Hindi film 3 Idiots',
    choices: ['Tussi', 'Ho', 'Jahanpanah', 'Great'],
    correctOrder: [
      'Jahanpanah',
      'Tussi',
      'Great',
      'Ho',
    ],
  },
  {
    id: 7,
    question: 'Starting from the top and moving down, arrange these items according to the body parts they are applied on',
    choices: ['Surma', 'Alta', 'Sindoor', 'Bindiya'],
    correctOrder: [
      'Sindoor',
      'Bindiya',
      'Surma',
      'Alta',
    ],
  },
  {
    id: 8,
    question: 'Arrange these words of a Hindi saying in the correct order',
    choices: ['Sona', 'Bech', 'Kar', 'Ghode'],
    correctOrder: [
      'Ghode',
      'Bech',
      'Kar',
      'Sona',
    ],
  },
  {
    id: 9,
    question: 'Arrange the following festivals in the order in which they were held or will be held in the year 2012',
    choices: ['Janmashtami', 'Rakshabandhan', 'Dussehra', 'Diwali'],
    correctOrder: [
      'Rakshabandhan',
      'Janmashtami',
      'Dussehra',
      'Diwali',
    ],
  },
  {
    id: 10,
    question: 'Starting from the most, arrange the following geometrical figures in descending order of the number of corners they have',
    choices: ['Triangle', 'Square', 'Hexagon', 'Pentagon'],
    correctOrder: [
      'Hexagon',
      'Pentagon',
      'Square',
      'Triangle',
    ],
  },
  {
    id: 11,
    question: 'Starting from the heaviest, arrange these units of weight in descending order',
    choices: ['Paav', 'Tola', 'Man', 'Ser'],
    correctOrder: [
      'Man',
      'Ser',
      'Paav',
      'Tola',
    ],
  },
  {
    id: 12,
    question: 'Starting with the oldest, arrange these characters from the Mahabharata in decreasing order of their seniority',
    choices: ['Parikshit', 'Bhishma', 'Yudhisthira', 'Shantanu'],
    correctOrder: [
      'Shantanu',
      'Bhishma',
      'Yudhisthira',
      'Parikshit',
    ],
  },
  {
    id: 13,
    question: 'Starting with the least, arrange these parts of a normal human body according to their number in increasing order',
    choices: ['Hair', 'Neck', 'Ears', 'Nails'],
    correctOrder: [
      'Neck',
      'Ears',
      'Nails',
      'Hair',
    ],
  },
  {
    id: 14,
    question: 'Arrange the rituals in the order in which they occur in a Hindu wedding',
    choices: ['Kundali Milan', 'Vidaai', 'Sagaai', 'Saat Phere'],
    correctOrder: [
      'Kundali Milan',
      'Sagaai',
      'Saat Phere',
      'Vidaai',
    ],
  },
  {
    id: 15,
    question: 'Arrange these leaders in order according to their home states from east to west',
    choices: ['Mamata Banerjee', 'P. A. Sangma', 'Sharad Pawar', 'Navin Patnaik'],
    correctOrder: [
      'P. A. Sangma',
      'Mamata Banerjee',
      'Navin Patnaik',
      'Sharad Pawar',
    ],
  },
  {
    id: 16,
    question: 'Starting from the westernmost, arrange these national parks from west to east',
    choices: ['Gir', 'Kaziranga', 'Sundarban', 'Kanha'],
    correctOrder: [
      'Gir',
      'Kanha',
      'Sundarban',
      'Kaziranga',
    ],
  },
  {
    id: 17,
    question: 'Starting with the earliest, arrange these films featuring Vidya Balan chronologically in order of their release',
    choices: ['The Dirty Picture', 'Parineeta', 'Paa', 'Bhool Bhulaiyaa'],
    correctOrder: [
      'Parineeta',
      'Bhool Bhulaiyaa',
      'Paa',
      'The Dirty Picture',
    ],
  },
  {
    id: 18,
    question: 'Arrange these words in increasing order of the numbers that appear in them',
    choices: ['Ekanki', 'Panchang', 'Trigun', 'Navami'],
    correctOrder: [
      'Ekanki',
      'Trigun',
      'Panchang',
      'Navami',
    ],
  },
  {
    id: 19,
    question: 'Starting from the earliest, arrange these landmark events of Indian history in chronological order',
    choices: ['Birth of Chandragupta Maurya', 'Formation of Azad Hind Fauj', 'Construction of the Qutub Minar', 'Battle of Haldighati'],
    correctOrder: [
      'Birth of Chandragupta Maurya',
      'Construction of the Qutub Minar',
      'Battle of Haldighati',
      'Formation of Azad Hind Fauj',
    ],
  },
  {
    id: 20,
    question: 'Arrange these lines of a lullaby in the correct order',
    choices: ['Lalla Lalla Lori', 'Munni Kare Tamasha', 'Doodh Ki Katori', 'Doodh Mein Batasha'],
    correctOrder: [
      'Lalla Lalla Lori',
      'Doodh Ki Katori',
      'Doodh Mein Batasha',
      'Munni Kare Tamasha',
    ],
  },
  {
    id: 21,
    question: 'Arrange these Olympic athletic events in increasing order of their distance',
    choices: ['Marathon', '4 x 100 Relay', '4 x 400 Relay', '20 Km walk'],
    correctOrder: [
      '4 x 100 Relay',
      '4 x 400 Relay',
      '20 Km walk',
      'Marathon',
    ],
  },
  {
    id: 22,
    question: 'Arrange these words in the order in which they appear in a popular Hindi saying',
    choices: ['Baap', 'Beta', 'Jaisa', 'Waisa'],
    correctOrder: [
      'Jaisa',
      'Baap',
      'Waisa',
      'Beta',
    ],
  },
  {
    id: 23,
    question: 'Arrange these chief ministers according to the capitals of their states from North to south',
    choices: ['Prem Kumar Dhumal', 'Shivraj Singh Chauchan', 'Prithiviraj Chavan', 'Bhupinder Singh Hooda'],
    correctOrder: [
      'Prem Kumar Dhumal',
      'Bhupinder Singh Hooda',
      'Shivraj Singh Chauchan',
      'Prithiviraj Chavan',
    ],
  },
  {
    id: 24,
    question: 'Starting from the least, arrange these sporting events in increasing order of the number of players in the playing area during a game',
    choices: ['Hockey', 'Boxing', 'Basketball', 'Tennis Doubles'],
    correctOrder: [
      'Boxing',
      'Tennis Doubles',
      'Basketball',
      'Hockey',
    ],
  },
  {
    id: 25,
    question: 'Starting from the earliest, arrange these films in the order of their release in 2012',
    choices: ['Kahaani', 'Rowdy Rathore', 'Barfi', 'Vicky Donor'],
    correctOrder: [
      'Kahaani',
      'Vicky Donor',
      'Rowdy Rathore',
      'Barfi',
    ],
  },
  {
    id: 26,
    question: 'Starting from the seniormost, arrange these women characters from the Mahabharata in order of their seniority',
    choices: ['Ganga', 'Gandhari', 'Draupadi', 'Kunti'],
    correctOrder: [
      'Ganga',
      'Gandhari',
      'Kunti',
      'Draupadi',
    ],
  },
  {
    id: 27,
    question: 'Starting with the earliest, arrange these films directed by Yash Chopra in order of their release',
    choices: ['Veer-Zaara', 'Chandni', 'Dil To Pagal Hai', 'Silsila'],
    correctOrder: [
      'Silsila',
      'Chandni',
      'Dil To Pagal Hai',
      'Veer-Zaara',
    ],
  },
  {
    id: 28,
    question: 'Starting from the easternmost, arrange these neighbouring countries of India from east to west',
    choices: ['Bhutan', 'Nepal', 'Myanmar', 'Pakistan'],
    correctOrder: [
      'Myanmar',
      'Bhutan',
      'Nepal',
      'Pakistan',
    ],
  },
  {
    id: 29,
    question: 'Starting from Phalguna, arrange these Hindu festivals in the order they occur in a calendar year',
    choices: ['Raksha Bandhan', 'Makar Sankranti', 'Holi', 'Vijaydashami'],
    correctOrder: [
      'Holi',
      'Raksha Bandhan',
      'Vijaydashami',
      'Makar Sankranti',
    ],
  },
  {
    id: 30,
    question: 'Starting from the smallest, arrange these spices according to their average size',
    choices: ['Mustard Seeds', 'Cloves', 'Black Pepper', 'Bay Leaf'],
    correctOrder: [
      'Mustard Seeds',
      'Black Pepper',
      'Cloves',
      'Bay Leaf',
    ],
  },
  {
    id: 31,
    question: 'Arrange these words in the order in which they appear in a popular Hindi saying',
    choices: ['Andhera', 'Tale', 'Chirag', 'Hona'],
    correctOrder: [
      'Chirag',
      'Tale',
      'Andhera',
      'Hona',
    ],
  },
  {
    id: 32,
    question: 'Arrange these sites included in the UNESCO World Heritage list from North to South',
    choices: ['Khajuraho Temple', 'Agra Fort', 'Mahabalipuram', 'Humayuns Tomb'],
    correctOrder: [
      'Humayuns Tomb',
      'Agra Fort',
      'Khajuraho Temple',
      'Mahabalipuram',
    ],
  },
  {
    id: 33,
    question: 'Arrange these family roles of a man in the order in which they occur in his life for the first time',
    choices: ['Son', 'Father', 'Grandfather', 'Father-in-law'],
    correctOrder: [
      'Son',
      'Father',
      'Father-in-law',
      'Grandfather',
    ],
  },
  {
    id: 34,
    question: 'Starting from the earliest, arrange these sportsmen in the order in which they first won a medal for India at the Olympics',
    choices: ['Rajyavardhan Singh Rathore', 'Leander Paes', 'Sushil Kumar', 'Dhyan Chand'],
    correctOrder: [
      'Dhyan Chand',
      'Leander Paes',
      'Rajyavardhan Singh Rathore',
      'Sushil Kumar',
    ],
  },
  {
    id: 35,
    question: 'Starting with the earliest, arrange these scientific or mathematical discoveries in chronological order',
    choices: ['Concept of Zero', 'Newtons Laws of Motion', 'Einsteins Theory of Relativity', 'Higgs boson particle'],
    correctOrder: [
      'Concept of Zero',
      'Higgs boson particle',
      'Newtons Laws of Motion',
      'Einsteins Theory of Relativity',
    ],
  },
  {
    id: 36,
    question: 'Starting with the biggest, arrange these astronomical bodies of the Solar System in decreasing order of their size',
    choices: ['Earth', 'Jupiter', 'Sun', 'Moon'],
    correctOrder: [
      'Sun',
      'Jupiter',
      'Earth',
      'Moon',
    ],
  },
  {
    id: 37,
    question: 'Starting from the smallest, arrange these birds in increasing order of their average size and height',
    choices: ['Ostrich', 'Peacock', 'Sparrow', 'Pigeon'],
    correctOrder: [
      'Sparrow',
      'Pigeon',
      'Peacock',
      'Ostrich',
    ],
  },
  {
    id: 38,
    question: 'Starting with the northernmost, arrange these places of India from north to south',
    choices: ['Gurgaon', 'Indore', 'Mysore', 'Kargil'],
    correctOrder: [
      'Kargil',
      'Gurgaon',
      'Indore',
      'Mysore',
    ],
  },
  {
    id: 39,
    question: 'Starting from the first, arrange these celebrity pairs in chronological order of their marriage',
    choices: ['Saif-Kareena', 'Abhishek- Aishwarya', 'Ajay-Kajol', 'Mahesh-Lara'],
    correctOrder: [
      'Ajay-Kajol',
      'Abhishek- Aishwarya',
      'Mahesh-Lara',
      'Saif-Kareena',
    ],
  },
  {
    id: 40,
    question: 'Starting from the earliest, arrange these historical events associated with India in chronological order',
    choices: ['Quit India movement', 'End of British Rule', 'Revolt of 1857', 'Arrival of East India Company'],
    correctOrder: [
      'Arrival of East India Company',
      'Revolt of 1857',
      'Quit India movement',
      'End of British Rule',
    ],
  },
  {
    id: 41,
    question: 'Arrange these Hindi phrases in increasing order of the numbers that appear in them',
    choices: ['Chattees Ka Ankra', 'Solah Aane Sach', 'Tees Maar Khan', 'Char Chand Lagana'],
    correctOrder: [
      'Char Chand Lagana',
      'Solah Aane Sach',
      'Tees Maar Khan',
      'Chattees Ka Ankra',
    ],
  },
  {
    id: 42,
    question: 'Starting with the least expensive, arrange these common consumer products sold in India in the increasing order of their prices',
    choices: ['Domestic LPG Cylinder', 'Litre of kerosene', 'Litre of Petrol', 'Unit of electricity'],
    correctOrder: [
      'Unit of electricity',
      'Litre of kerosene',
      'Litre of Petrol',
      'Domestic LPG Cylinder',
    ],
  },
  {
    id: 43,
    question: 'Starting with the closest, arrange these planets of our Solar system in increasing order of their distance from the sun',
    choices: ['Mercury', 'Neptune', 'Mars', 'Saturn'],
    correctOrder: [
      'Mercury',
      'Mars',
      'Saturn',
      'Neptune',
    ],
  },
  {
    id: 49,
    question: 'Starting with the topmost, arrange these bones from top to bottom in the order in which they appear in a human body',
    choices: ['Femur', 'Rib', 'Skull', 'Pelvis'],
    correctOrder: [
      'Skull',
      'Rib',
      'Pelvis',
      'Femur',
    ],
  },
  {
    id: 50,
    question: 'Arrange the following geometrical figures in increasing order of the number of sides they have',
    choices: ['Decagon', 'Heptagon', 'Quadrilateral', 'Octagon'],
    correctOrder: [
      'Quadrilateral',
      'Heptagon',
      'Octagon',
      'Decagon',
    ],
  },
];

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [current, setCurrent] = useState(null);
  const [shuffledChoices, setShuffledChoices] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState([]);
  const [showChoices, setShowChoices] = useState(false);
  const [status, setStatus] = useState(null);
  const [timeTaken, setTimeTaken] = useState(0);
  const [score, setScore] = useState(0);
  const [questionStats, setQuestionStats] = useState([]);
  const [showSummary, setShowSummary] = useState(false);
  const [countdown, setCountdown] = useState(10);
  const countdownRef = useRef(null);
  const startTimeRef = useRef(null);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

  useEffect(() => {
    const shuffledQuestions = [...sampleQuestions].sort(() => 0.5 - Math.random());
    setQuestions(shuffledQuestions);
    setCurrentIndex(0);
  }, []);

  useEffect(() => {
    if (current && showChoices) {
      setTimeTaken(0);
      startTimeRef.current = performance.now();
      setCountdown(10);
      countdownRef.current = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(countdownRef.current);
            submitAnswer();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(countdownRef.current);
  }, [current, showChoices]);

  const playNotes = async () => {
    const context = new (window.AudioContext || window.webkitAudioContext)();
    for (let i = 0; i < 3; i++) {
      const osc = context.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440 + i * 100, context.currentTime);
      osc.connect(context.destination);
      osc.start();
      osc.stop(context.currentTime + 0.2);
      await new Promise((res) => setTimeout(res, 300));
    }
  };

  const startRound = async () => {
    setStatus(null);
    setShowCorrectAnswer(false);
    const next = questions[currentIndex];
    setCurrent(next);
    setSelectedOrder([]);
    setShowChoices(false);
    await playNotes();
    setShuffledChoices([...next.choices].sort(() => 0.5 - Math.random()));
    setShowChoices(true);
  };

  const nextQuestion = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
      setCurrent(null);
      setStatus(null);
      setSelectedOrder([]);
      setShowChoices(false);
      setShowSummary(false);
      setShowCorrectAnswer(false);
    } else {
      alert(`Game Over! Your final score is ${score}/${questions.length}`);
      setShowSummary(true);
    }
  };

  const recordStats = (result, preciseTime) => {
    const stats = {
      question: current.question,
      result,
      time: preciseTime.toFixed(3),
    };
    setQuestionStats((prev) => [...prev, stats]);
  };

  const submitAnswer = () => {
    if (status) return;
    clearInterval(countdownRef.current);
    const endTime = performance.now();
    const preciseTime = (endTime - startTimeRef.current) / 1000;
    setTimeTaken(preciseTime);
    const correct =
      JSON.stringify(selectedOrder) === JSON.stringify(current.correctOrder);
    const resultText = correct ? '✅ Correct!' : '❌ Incorrect!';
    setStatus(resultText);
    if (!correct) setShowCorrectAnswer(true);
    if (correct) setScore(score + 1);
    recordStats(resultText, preciseTime);
  };

  const resetAnswer = () => {
    setSelectedOrder([]);
  };

  const toggleChoice = (choice) => {
    if (selectedOrder.includes(choice)) return;
    setSelectedOrder([...selectedOrder, choice]);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>🎮 Fastest Finger First</h1>
      <h3>Score: {score}</h3>
      {questions.length > 0 && current && (
        <h4>
          Question {currentIndex + 1} of {questions.length}
        </h4>
      )}
      {!current && <button onClick={startRound}>Start Question</button>}

      {current && (
        <div style={{ marginTop: '1rem', border: '1px solid #ccc', padding: '1rem' }}>
          <h2>{current.question}</h2>
          {showChoices && (
            <>
              <h4>⏳ Time left: {countdown}s</h4>
              {shuffledChoices.map((choice) => (
                <button
                  key={choice}
                  disabled={selectedOrder.includes(choice)}
                  onClick={() => toggleChoice(choice)}
                  style={{ display: 'block', margin: '0.5rem 0', width: '100%' }}
                >
                  {choice}
                </button>
              ))}

              <div style={{ marginTop: '1rem' }}>
                <strong>Your Order:</strong>
                <ol>
                  {selectedOrder.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ol>
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <button
                  onClick={submitAnswer}
                  disabled={selectedOrder.length < 4 || status}
                >
                  Submit Answer
                </button>
                <button
                  onClick={resetAnswer}
                  disabled={selectedOrder.length === 0 || status}
                >
                  Reset Answer
                </button>
              </div>
            </>
          )}

          {status && (
            <div style={{ marginTop: '1rem', fontWeight: 'bold' }}>
              {status} (⏱ {timeTaken.toFixed(3)}s)
              {showCorrectAnswer && (
                <div style={{ marginTop: '1rem' }}>
                  <strong>✅ Correct Order:</strong>
                  <ol>
                    {current.correctOrder.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ol>
                </div>
              )}
              <div style={{ marginTop: '1rem' }}>
                <button onClick={nextQuestion}>Next Question</button>
              </div>
            </div>
          )}
        </div>
      )}

      {showSummary && questionStats.length > 0 && (
        <div style={{ marginTop: '2rem' }}>
          <h3>📝 Question Summary</h3>
          <ul>
            {questionStats.map((stat, index) => (
              <li key={index} style={{ marginBottom: '0.5rem' }}>
                <strong>Q{index + 1}:</strong> {stat.result} in {stat.time}s
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
