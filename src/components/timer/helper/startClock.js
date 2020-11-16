import { TIMETAG } from './variables';
import checkTime from './chekTime';

const startClock = (here, date) => {
  const clockElement = document.querySelector(`.${TIMETAG.classTag}`);
  const step = () => {
    let today = new Date();
    today = new Date(today.getTime() - date);
    const hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    const { state } = here;
    if (state.storage.haur !== hours) {
      state.storage.haur = hours;
      state.toLocalStorage();
    }

    clockElement.innerHTML = `${minutes}:${seconds}`;
  };

  const timeOut = setInterval(step, 1000);
  return timeOut;
};

export default startClock;
