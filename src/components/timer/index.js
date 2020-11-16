import './clock.scss';
import renderClock from './helper/renderClock';
import startClock from './helper/startClock';
import Component from '../component';

class Clock extends Component {
  constructor() {
    super();
    this.timeOut = null;
    this.init = this.initClock;
    this.render = appTag => renderClock(appTag);
    this.start = this.onStart.bind(this);
    this.stop = () => clearInterval(this.timeOut);
    this.clear = this.clearClock.bind(this);
  }

  initClock() {
    this.events.addEventList('new-game', [this.clear, this.start]);
    this.events.addEventList('pause-game', [this.stop]);
    this.events.addEventList('continue-game', [this.start]);
  }

  clearClock() {
    this.state.storage.gameInProgress.timeD = 0;
  }

  async onStart() {
    const ms = this.state.storage.gameInProgress.timeD || 0;
    const diff = new Date(ms);
    let date = new Date();
    date = new Date(date.getTime() - diff.getTime());
    this.timeOut = startClock(this, date);
  }
}
export default Clock;
