// Slider for character length
var slider = document.getElementById("characterLengthInput");
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
var form = document.querySelector(".pw-form");
form.addEventListener("submit", function onSubmit(event) {
  event.preventDefault();

  var formData = new FormData(form);
  for (const [key, value] of formData) {
    console.log(key, value);
  }
});
