firebase.initializeApp({
  apiKey: 'AIzaSyBoBcy9fEMAG3WZnHmZ4ocO59pcYlUQdeI',
  authDomain: 'day-of-code-20a1f.firebaseapp.com',
  projectId: 'day-of-code-20a1f'
});

// Initialize Cloud Firestore through Firebase
const db = firebase.firestore();
console.log('db');


(function () {
  const askBtn = document.querySelector('#faq-ask-btn');

  // To Do: Make this a global function
  function submitQuestion() {
    tempHideButtons();

    db.collection("questions")
    .add(getQuestionFormData())
    .then(docRef => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(error => {
        console.error("Error adding document: ", error);
    });
  }

  function tempHideButtons() {
    askBtn.style.display = 'none';
    setTimeout(function () {askBtn.style.display = 'inline';}, 10000)
  }

  function getQuestionFormData() {
    const text = document.querySelector('#question').value;
    const name = document.querySelector('#name').value;
    return {
        name,
        text,
        answers: []
    };
  }

  console.log('no snapshot')

  db.collection("questions").get().then((querySnapshot) => {
    const list = document.querySelector('#question-list');

    querySnapshot.forEach((doc) => {
      const q = doc.data();
      console.log(q);

      const div = document.createElement('div');
      div.classList.add('question-container');

      const a = document.createElement('a');
      a.setAttribute('id', doc.id);
      a.setAttribute('href', '#')
      a.style.display = 'block';
      a.innerHTML = q.text;
      div.appendChild(a);

      if (q.answers) {
        q.answers.forEach(answer => {
          const answerDiv = document.createElement('div');
          answerDiv.classList.add('answer-container');
          answerDiv.innerHTML = `
            <span>${ answer.name }</span>
            <p>${ answer.text }</p>
          `;
          div.appendChild(answerDiv);
        });
      }



      list.appendChild(div);
      console.log(`${doc.id} => ${doc.data()}`);
    });
  });
})();
