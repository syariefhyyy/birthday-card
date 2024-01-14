function showBirthdayWishes() {
  const container = document.querySelector(".container");
  const h1 = document.querySelector("h1");
  const button = document.querySelector("button");
  const card = document.querySelector(".card");

  // Menghilangkan elemen h1 dan button
  h1.style.opacity = 0;
  button.style.opacity = 0;

  // Menampilkan elemen card dengan efek fade-in
  fadeIn(card);
}

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
