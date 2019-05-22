const logoPlacer = _ => {
  const aboutPosition = document
    .querySelector(".about")
    .getBoundingClientRect();
  const logo = document.querySelector(".logo");
  if (aboutPosition.y < 0) {
    if (!logo.classList.contains("logoLeft")) {
      logo.classList.add("logoLeft");
    }
  } else {
    if (logo.classList.contains("logoLeft")) {
      logo.classList.remove("logoLeft");
    }
  }
};

const footerPlacer = _ => {
  const mainScreen = document.querySelector(".main").getBoundingClientRect();
  const footer = document.querySelector("footer");
  const footerHeight = footer.getBoundingClientRect().height;
  const footerOnScreen = mainScreen.top + footerHeight < 0;
  footer.style.bottom = `${
    footerOnScreen ? 0 : 0 - mainScreen.top - footerHeight
  }px`;
};

const scrollEvents = _ => {
  window.addEventListener("scroll", _ => {
    logoPlacer();
    footerPlacer();
  });
};

window.onload = () => {
  writerStart();
  scrollEvents();
};
