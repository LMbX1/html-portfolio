const messages = {
  en: "I am Lucas Melo.",
  pt: "Eu sou Lucas Melo."
};
let currentLanguage = 'en';
let timeoutBuffer = []; 

function typeMyMessage() {
  const message = messages[currentLanguage];
  const element = document.querySelector("#typing-text");
  const typeSpeed = 150;
  
  timeoutBuffer.forEach(timeoutId => clearTimeout(timeoutId));
  timeoutBuffer = [];
  
  element.textContent = "";
  
  for (let i = 0; i < message.length; i++) {
    const newTimeout = setTimeout(() => {
      element.textContent += message[i];
    }, typeSpeed * i);
    timeoutBuffer.push(newTimeout);
  }
}

function switchLanguage(lang) {
  currentLanguage = lang;
  
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');
  document.getElementById('btn-pt').classList.toggle('active', lang === 'pt');
  
  const elements = document.querySelectorAll(`[data-${lang}]`);
  elements.forEach(element => {
    element.textContent = element.getAttribute(`data-${lang}`);
  });
  
  const emailInput = document.getElementById('email-input');
  const messageInput = document.getElementById('message-input');
  
  if (emailInput) {
    emailInput.placeholder = emailInput.getAttribute(`data-placeholder-${lang}`);
  }
  if (messageInput) {
    messageInput.placeholder = messageInput.getAttribute(`data-placeholder-${lang}`);
  }
  
  typeMyMessage();
  
  document.documentElement.lang = lang;
}

document.addEventListener("DOMContentLoaded", typeMyMessage);