function checkPasswordStrength(password) {
  let strength = 0;

  if (password.length >= 12) {
    strength++;
  }

  if (/[A-Z]/.test(password)) {
    strength++;
  }

  if (/[a-z]/.test(password)) {
    strength++;
  }

  if (/[0-9]/.test(password)) {
    strength++;
  }

  if (/[^\w\s]/.test(password)) {
    strength++;
  }

  if (!/\s/.test(password)) {
    strength++;
  }

  return strength;
}

document.addEventListener("keyup", function (e) {
  let password = document.querySelector("#YourPassword").value;
  let strength = checkPasswordStrength(password);

  let container = document.querySelector(".container");
  if (strength <= 2) {
    container.classList.add("weak");
    container.classList.remove("moderate");
    container.classList.remove("strong");
  } else if (strength >= 2 && strength <= 4) {
    container.classList.remove("weak");
    container.classList.add("moderate");
    container.classList.remove("strong");
  } else {
    container.classList.remove("weak");
    container.classList.remove("moderate");
    container.classList.add("strong");
  }
});

let passwordInput = document.querySelector("#YourPassword");
let show = document.querySelector(".show");
show.onclick = function () {
  if (passwordInput.type === "password") {
    passwordInput.setAttribute("type", "text");
    show.classList.add("hide");
  } else {
    passwordInput.setAttribute("type", "password");
    show.classList.remove("hide");
  }
};

const button = document.querySelector('.generate-password-button');

function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function updateButtonColor() {
  const color1 = getRandomColor();
  const color2 = getRandomColor();
  button.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
}

setInterval(updateButtonColor, 2000); // update color every 2 seconds