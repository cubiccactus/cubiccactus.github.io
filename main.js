const logoSizer = _ => {
  window.addEventListener("scroll", e => {
    const mainScreen = document.querySelector(".main").getBoundingClientRect();
    // console.log(mainScreen.top, mainScreen.height);
  });
};

const footerPlacer = _ => {
  window.addEventListener("scroll", e => {
    const mainScreen = document.querySelector(".main").getBoundingClientRect();
    const footer = document.querySelector("footer");
    const footerHeight = footer.getBoundingClientRect().height;
    const footerOnScreen = mainScreen.top + footerHeight < 0;
    footer.style.bottom = `${
      footerOnScreen ? 0 : 0 - mainScreen.top - footerHeight
    }px`;
  });
};

window.onload = () => {
  writerStart();
  logoSizer();
  footerPlacer();
};
