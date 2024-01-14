function fadeIn(element) {
  element.style.opacity = 0;
  element.style.display = "block";

  const fadeInEffect = setInterval(function () {
    if (element.style.opacity < 1) {
      element.style.opacity = parseFloat(element.style.opacity) + 0.1;
    } else {
      clearInterval(fadeInEffect);
    }
  }, 100);
}

function fadeOut(element) {
  element.style.opacity = 1;

  const fadeOutEffect = setInterval(function () {
    if (element.style.opacity > 0) {
      element.style.opacity = parseFloat(element.style.opacity) - 0.1;
    } else {
      clearInterval(fadeOutEffect);
      element.style.display = "none";
    }
  }, 100);
}

const cardElement = document.querySelector(".card");

// Memanggil fungsi fade-in
fadeIn(cardElement);

// Memanggil fungsi fade-out
fadeOut(cardElement);
