const slider = document.getElementById("characterLength");
const currentCharacterLength = document.querySelector(".currentCharacterLength");

slider.addEventListener("input", function() {
	console.log(slider.value - slider.min, slider.max - slider.min);
  const percent = (slider.value - slider.min) / (slider.max - slider.min) * 100;
  const progressColor = `linear-gradient(to right, var(--neon-green) 0%, var(--neon-green) ${percent}%, var(--black) ${percent}%, var(--black) 100%)`;
	currentCharacterLength.textContent = slider.value;
  slider.style.background = progressColor;
});