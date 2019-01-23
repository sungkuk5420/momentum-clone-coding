const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

const init = () => {
    getTime();
    setInterval(getTime, 1000);
};

const getTime = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    clockTitle.innerHTML = `${hours < 10 ? `0${hours}` : hours}:
    ${minutes < 10 ? `0${minutes}` : minutes}`;
};

init();