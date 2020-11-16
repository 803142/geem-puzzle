import './clock.scss';
import renderClock from './helper/renderClock';
import initClock from './helper/initClock';
import startClock from './helper/startClock';
import Component from '../component';

class Clock extends Component {
  constructor() {
    super();
    this.timeOut = null;
    this.init = () => initClock();
    this.render = appTag => renderClock(appTag);
    this.start = this.onStart.bind(this);
    this.stop = () => clearInterval(this.timeOut);
  }

  async onStart() {
    let date = new Date();
    date = new Date(date.getTime());
    this.timeOut = startClock(this, date);
  }
}
export default Clock;
