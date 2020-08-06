const questions = [
  ['How many planets are in the Solar System?', '8'],
  ['How many continents are there?', '7'],
  ['How many legs does an insect have?', '6'],
  ['What year was JavaScript created?', '1995'] 
];

// This stores the correct questions
const correct = [];
const inncorrect = [];

let correctAnswers = 0;

for (let i = 0; i < questions.length; i++) {
  let question = questions[i][0];
  let answer = questions[i][1];
  let response = prompt(question);

  if (response === answer) {
    correctAnswers += 1;
    correct.push(question);
  } else {
    inncorrect.push(question);
  };
};

function createListItems(arr) {
  let items = '';
  for (let i = 0; i < arr.length; i++) {
    items += `<li>${arr[i]}</li>`;
  }
  return items;
}
// Shows correct answers to end user

let html = `
  <h1>Your correct answers: ${correctAnswers} out of a possible ${questions.length}</h1>
  <h2>You got these questions right:</h2>
  <ol>${createListItems(correct)}</ol>

  <h2>You got these questions wrong:</h2>
  <ol>${createListItems(inncorrect)}</ol>
`;

document.querySelector('main').innerHTML = html;