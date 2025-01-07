function checkAnswers() {

    let score = 0;

    let totalQuestions = 3;  

    let marksPerQuestion = 10;

 

   

    if (document.querySelector('input[name="q1"]:checked')?.value === 'a') score += marksPerQuestion;  // 10 marks for correct answer

    if (document.querySelector('input[name="q2"]:checked')?.value === 'a') score += marksPerQuestion;  // 10 marks for correct answer

    if (document.querySelector('input[name="q3"]:checked')?.value === 'c') score += marksPerQuestion;  // 10 marks for correct answer

 

    // Calculate the percentage of correct answers

    let percentage = (score / (totalQuestions * marksPerQuestion)) * 100;

 

    // Update the progress bar and percentage display

    let progressBar = document.getElementById("progressBar");

    progressBar.style.width = percentage + "%";

    progressBar.innerHTML = percentage.toFixed(2) + "%";

 

    // Display the result text

    let resultText = document.getElementById("resultText");

    resultText.innerHTML = `Your score is ${score} out of ${totalQuestions * marksPerQuestion}`;

 

    // Display the result section after submit button is clicked

    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });

   

}