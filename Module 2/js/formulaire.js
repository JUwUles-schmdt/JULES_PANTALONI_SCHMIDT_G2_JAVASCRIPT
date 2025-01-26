document.getElementById('submitButton').addEventListener('click', function () {
    const pseudo = document.getElementById('pseudo');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const question = document.querySelector('input[name="question"]:checked');
    const resultMessage = document.getElementById('result-message');
  
    let isValid = true;
  
    document.querySelectorAll('.error-message').forEach(span => (span.textContent = ''));
  
    // Vérification du pseudo
    if (pseudo.value.length < 6) {
      pseudo.classList.add('invalid');
      pseudo.classList.remove('valid');
      document.getElementById('pseudo-error').textContent = 'Le pseudo doit contenir au moins 6 caractères.';
      isValid = false;
    } else {
      pseudo.classList.add('valid');
      pseudo.classList.remove('invalid');
    }
  
    // Vérification de l'email
    if (!email.value.includes('@') || !email.value.includes('.')) {
      email.classList.add('invalid');
      email.classList.remove('valid');
      document.getElementById('email-error').textContent = 'Veuillez entrer une adresse email valide.';
      isValid = false;
    } else {
      email.classList.add('valid');
      email.classList.remove('invalid');
    }
  
    // Vérification du mot de passe
    if (password.value.length < 8) {
      password.classList.add('invalid');
      password.classList.remove('valid');
      document.getElementById('password-error').textContent = 'Le mot de passe doit contenir au moins 8 caractères.';
      isValid = false;
    } else {
      password.classList.add('valid');
      password.classList.remove('invalid');
    }
  
    // Vérification de la confirmation du mot de passe
    if (confirmPassword.value !== password.value || confirmPassword.value === '') {
      confirmPassword.classList.add('invalid');
      confirmPassword.classList.remove('valid');
      document.getElementById('confirm-password-error').textContent = 'Les mots de passe ne correspondent pas.';
      isValid = false;
    } else {
      confirmPassword.classList.add('valid');
      confirmPassword.classList.remove('invalid');
    }
  
    // Vérification de la question
    if (!question) {
      document.getElementById('question-error').textContent = 'Veuillez répondre à la question.';
      isValid = false;
    }
  
    // Affichage des résultats
    if (isValid) {
      resultMessage.textContent = 'Inscription réussie !';
      resultMessage.classList.add('success');
      resultMessage.classList.remove('error');
    } else {
      resultMessage.textContent = 'Veuillez corriger les erreurs dans le formulaire.';
      resultMessage.classList.add('error');
      resultMessage.classList.remove('success');
    }
  });
  