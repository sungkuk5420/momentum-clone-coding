const body = document.querySelector("body");

const IMG_NUMBER = 22;

const paintImage = (imgNumber) => {
  document.querySelector('.bg-div').classList.add(`bg-${imgNumber + 1}`);
};

const genRandom = () => {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
};

const bgInit = () => {
  const randomNumber = genRandom();
  paintImage(randomNumber);
};

bgInit();