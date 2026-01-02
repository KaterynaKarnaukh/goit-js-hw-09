const formData = {
  email: "",
  message: ""
};
const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageTextarea = form.elements.message;
const STORAGE_KEY = "feedback-form-state";

// Функція для завантаження даних з локального сховища
function loadFormData() {
  try {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      formData.email = parsedData.email || "";
        formData.message = parsedData.message || "";
        

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
        }
        
// Заповнення полів форми збереженими даними
      emailInput.value = formData.email;
      messageTextarea.value = formData.message;
    }
  } catch (error) {
    console.error("Error loading form data:", error);
  }
}

// Функція для збереження даних у локальне сховище
function saveFormData() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  } catch (error) {
    console.error("Error saving form data:", error);
  }
}

// Обробник події input
form.addEventListener('input', (event) => {
  const fieldName = event.target.name;
  const fieldValue = event.target.value;
  
  if (fieldName === 'email' || fieldName === 'message') {
    formData[fieldName] = fieldValue;
    saveFormData();
  }
});

// Обробник відправлення форми
form.addEventListener('submit', (event) => {
    event.preventDefault();

// Поля заповнені
  if (formData.email.trim() === "" || formData.message.trim() === "") {
    alert("Fill please all fields");
    return;
    }
    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
    formData.email = "";
  formData.message = "";
  form.reset();
});
loadFormData();