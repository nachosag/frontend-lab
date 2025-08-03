document.addEventListener('DOMContentLoaded', function () {
  const loginButton = document.querySelector('.login');
  const feedbackMessage = document.querySelector('.feedback-message');

  loginButton.addEventListener('click', function () {
    const username = document.querySelector('.username').value;
    const password = document.querySelector('.password').value;

    // Verificación de credenciales
    if (username === 'nachosag' && password === '1234') {
      // Credenciales correctas
      showFeedback('¡Successful login! Redirecting...', 'success');

      // Simular redirección después de 2 segundos
    } else {
      // Credenciales incorrectas
      showFeedback('Username or password incorrect', 'error');
    }
  });

  function showFeedback(message, type) {
    feedbackMessage.textContent = message;
    feedbackMessage.className = 'feedback-message'; // Reset classes
    feedbackMessage.classList.add(type);

    // Ocultar mensaje después de 5 segundos (solo para errores)
    if (type === 'error') {
      setTimeout(() => {
        feedbackMessage.textContent = '';
        feedbackMessage.className = 'feedback-message';
      }, 5000);
    }
  }
});