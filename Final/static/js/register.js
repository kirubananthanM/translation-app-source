// Screen navigation
const welcomeScreen = document.getElementById('welcome-screen');
const deviceScreen = document.getElementById('device-screen');
const budsScreen = document.getElementById('buds-screen');
const translationScreen = document.getElementById('translation-screen');
const settingsScreen = document.getElementById('settings-screen');
const menuScreen = document.getElementById('menu-screen');
const profileScreen = document.getElementById('profile-screen');
const historyScreen = document.getElementById('history-screen');
const helpScreen = document.getElementById('help-screen');

// Form inputs
const nameInput = document.getElementById('name-input');
const dobInput = document.getElementById('dob-input');
const continueButton = document.querySelector('.continue-button');

// Continue button logic
const languageSelect = document.getElementById('language-select');

continueButton.addEventListener('click', () => {
  if (nameInput.value && dobInput.value) {
    const selectedLanguage = languageSelect.value; // Get selected language
    console.log(`Selected Language: ${selectedLanguage}`); // Log or save the selected language
    welcomeScreen.classList.add('hidden');
    deviceScreen.classList.remove('hidden');
  } else {
    alert('Please fill in all fields');
  }
});

// Back button logic
document.querySelectorAll('.back-icon').forEach(backButton => {
  backButton.addEventListener('click', () => {
    if (deviceScreen.classList.contains('hidden') === false) {
      deviceScreen.classList.add('hidden');
      welcomeScreen.classList.remove('hidden');
    } else if (translationScreen.classList.contains('hidden') === false) {
      translationScreen.classList.add('hidden');
      budsScreen.classList.remove('hidden');
    } else if (settingsScreen.classList.contains('hidden') === false) {
      settingsScreen.classList.add('hidden');
      budsScreen.classList.remove('hidden');
    } else if (menuScreen.classList.contains('hidden') === false) {
      menuScreen.classList.add('hidden');
      budsScreen.classList.remove('hidden');
    } else if (profileScreen.classList.contains('hidden') === false) {
      profileScreen.classList.add('hidden');
      menuScreen.classList.remove('hidden');
    } else if (historyScreen.classList.contains('hidden') === false) {
      historyScreen.classList.add('hidden');
      menuScreen.classList.remove('hidden');
    } else if (helpScreen.classList.contains('hidden') === false) {
      helpScreen.classList.add('hidden');
      menuScreen.classList.remove('hidden');
    }
  });
});

// Device selection logic
const deviceCards = document.querySelectorAll('.device-card');
deviceCards.forEach(card => {
  card.addEventListener('click', () => {
    deviceScreen.classList.add('hidden');
    budsScreen.classList.remove('hidden');
  });
});

// Start button logic
const startButton = document.querySelector('.start-button');
startButton.addEventListener('click', () => {
  budsScreen.classList.add('hidden');
  translationScreen.classList.remove('hidden');

  // Simulate loading detected and translated text
  setTimeout(() => {
    document.getElementById('detected-text').innerHTML = `
      <p>Detected: Spanish</p>
      <p>Hola, ¿cómo estás?</p>
    `;
    document.getElementById('translated-text').innerHTML = `
      <p>Translated: English</p>
      <p>Hello, how are you?</p>
    `;
  }, 2000); // Simulate 2 seconds delay
});

// Settings icon functionality
document.querySelector('.settings-icon').addEventListener('click', () => {
  budsScreen.classList.add('hidden');
  settingsScreen.classList.remove('hidden');
});

// Menu icon functionality
document.querySelector('.menu-icon').addEventListener('click', () => {
  budsScreen.classList.add('hidden');
  menuScreen.classList.remove('hidden');
});

// Menu item functionality
document.querySelector('.menu-item:nth-child(1)').addEventListener('click', () => {
  menuScreen.classList.add('hidden');
  profileScreen.classList.remove('hidden');
});

document.querySelector('.menu-item:nth-child(2)').addEventListener('click', () => {
  menuScreen.classList.add('hidden');
  historyScreen.classList.remove('hidden');
});

document.querySelector('.menu-item:nth-child(3)').addEventListener('click', () => {
  menuScreen.classList.add('hidden');
  helpScreen.classList.remove('hidden');
});

// Expand icon functionality
document.querySelectorAll('.expand-icon').forEach(icon => {
  icon.addEventListener('click', (e) => {
    const textBox = e.target.closest('.text-box');
    textBox.classList.toggle('expanded');
  });
}); 