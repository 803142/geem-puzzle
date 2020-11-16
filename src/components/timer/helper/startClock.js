import { TIMETAG } from './variables';
import checkTime from './chekTime';

const startClock = (here, date) => {
  const clockElement = document.querySelector(`.${TIMETAG.classTag}`);
  const step = () => {
    let today = new Date();
    const { state } = here;
    today = new Date(today.getTime() - date);
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);

    const timeString = `${minutes}:${seconds}`;
    state.storage.gameInProgress.time = timeString;
    state.storage.gameInProgress.timeD = today;

    clockElement.innerHTML = timeString;
  };

  const timeOut = setInterval(step, 1000);
  return timeOut;
};

export default startClock;
