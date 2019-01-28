const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";


const grettingInit = () => {
    loadName();
};

const saveName = (text) => {
    localStorage.setItem(USER_LS, text);
};

const paintGreeting = (text) => {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `${text}`;
};

const handleSubmit = (event) => {
    event.preventDefault();
    const userName = input.value;
    paintGreeting(userName);
    saveName(userName);
};

const askForName = () => {
    form.classList.add(SHOWING_CN);
    greeting.classList.remove(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
};
const loadName = (name) => {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
};
grettingInit();