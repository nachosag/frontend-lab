// 1. Seleccionar los elementos del DOM que vamos a usar
const birthDateInput = document.getElementById('birth-date');
const calculateButton = document.getElementById('calculate-btn');
const resultElement = document.getElementById('result');

// A partir de aquí, puedes usar estas variables para interactuar con los elementos.
// Por ejemplo, para obtener el valor del input, usarías: birthDateInput.value


calculateButton.addEventListener('click', () => {
  const birthDate = birthDateInput.value;
  
  if (!birthDate) {
    resultElement.textContent = 'Please, enter your birth date.';
    return;
  }

  const birthDateObj = new Date(birthDate);
  const today = new Date();

  const age = today.getFullYear() - birthDateObj.getFullYear();
  const monthDifference = today.getMonth() - birthDateObj.getMonth();
  const dayDifference = today.getDate() - birthDateObj.getDate();

  // Ajustar la edad si el cumpleaños aún no ha pasado este año
  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age--;
  }

  resultElement.textContent = `You are ${age} years old.`;

})