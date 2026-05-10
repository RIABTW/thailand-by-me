document.addEventListener("DOMContentLoaded", function() {
  const quizForm = document.getElementById("quizForm");

  quizForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Answer key
    const answers = {
      q1: "Bangkok",
      q2: "Songkran",
      q3: "Siam"
    };

    let score = 0;
    let total = Object.keys(answers).length;

    for (let key in answers) {
      const selected = document.querySelector(`input[name="${key}"]:checked`);
      if (selected && selected.value === answers[key]) {
        score++;
      }
    }

    alert("You scored " + score + " out of " + total);
  });
});

//contact form
document.addEventListener("DOMContentLoaded", function() {
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let valid = true;

    const name = document.getElementById("name").value;
    if (name.trim() === "") {
      document.getElementById("nameError").textContent = "Name is required.";
      valid = false;
    } else {
      document.getElementById("nameError").textContent = "";
    }

    const email = document.getElementById("email").value;
    if (email.trim() === "" || !email.includes("@")) {
      document.getElementById("emailError").textContent = "Valid email is required.";
      valid = false;
    } else {
      document.getElementById("emailError").textContent = "";
    }

    const message = document.getElementById("message").value;
    if (message.trim() === "") {
      document.getElementById("messageError").textContent = "Message cannot be empty.";
      valid = false;
    } else {
      document.getElementById("messageError").textContent = "";
    }

    if (valid) {
      alert("Thank you for contacting us! We'll help you schedule your Thailand plan.");
      contactForm.reset();
    }
  });
});

 //correcting quiz
 document.addEventListener("DOMContentLoaded", function() {
  const correctAnswer = "Southeast Asia";
  const feedback = document.getElementById("feedback");

  document.querySelectorAll('input[name="q1"]').forEach(input => {
    input.addEventListener("change", function() {
      if (this.value === correctAnswer) {
        feedback.textContent = " Correct! Thailand is in Southeast Asia.";
        feedback.className = "feedback correct";
      } else {
        feedback.textContent = "Incorrect. The correct answer is Southeast Asia.";
        feedback.className = "feedback incorrect";
      }
    });
  });
});

