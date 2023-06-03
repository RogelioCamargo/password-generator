// Slider for character length
var slider = document.getElementById("characterLength");
var characterLengthContainer = document.querySelector(
  ".currentCharacterLength"
);

slider.addEventListener("input", function updateCharacterLength() {
  const percent =
    ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
  const progressColor = `linear-gradient(to right, var(--neon-green) 0%, var(--neon-green) ${percent}%, var(--black) ${percent}%, var(--black) 100%)`;
  characterLengthContainer.textContent = slider.value;
  slider.style.background = progressColor;
});



// Form submission
form.addEventListener("submit", function onSubmit(event) {
  event.preventDefault();

  var options = {
    characterLength: 0,
    includeLowercase: false,
    includeUppercase: false,
    includeNumbers: false,
    includeSymbols: false,
  };
  var formData = new FormData(form);
  for (const [name, value] of formData) {
    if (value == "on") {
      options[name] = true;
    } else if (name == "characterLength") {
      options[name] = parseInt(value);
    }
  }

  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  var characterPool = [];
  var password = "";

  if (options.includeLowercase) {
    characterPool.push(lowercaseLetters);
  }
  if (options.includeUppercase) {
    characterPool.push(uppercaseLetters);
  }
  if (options.includeNumbers) {
    characterPool.push(numbers);
  }
  if (options.includeSymbols) {
    characterPool.push(symbols);
  }

  if (!characterPool.length) {
    return;
  }

  for (let i = 0; i < options.characterLength; i++) {
    const randomIndex = Math.floor(Math.random() * characterPool.length);
    const characterSet = characterPool[randomIndex];

    password += getRandomCharacter(characterSet);
  }

  var passwordGenereatedInput = document.querySelector(".pw-generated__result");
  passwordGenereatedInput.value = password;
});

function getRandomCharacter(characterSet) {
  const randomIndex = Math.floor(Math.random() * characterSet.length);
  return characterSet[randomIndex];
}
