import { simpleTag } from '../../helper';
import Component from '../component';
import counterNormalaize from './helper';
import './counter.scss';

class Counter extends Component {
  constructor() {
    super();
    this.tag = simpleTag({ classTag: 'counter' });
    this.score = simpleTag({ tagName: 'span', classTag: 'score' }, '000');
    this.newMoove = this.addScore.bind(this);
  }

  init() {
    this.events.addEventList('newMoove', [this.newMoove]);
    this.events.addEventList('new-game', [this.new.bind(this)]);
  }

  render(appTag) {
    appTag.appendChild(this.tag);
    this.tag.appendChild(this.score);
  }

  new(score = '000') {
    this.score.innerHTML = score;
    this.state.storage.gameInProgress.score = score;
  }

  addScore() {
    const current = this.score.innerHTML;
    this.state.storage.gameInProgress.score = counterNormalaize(current);
    this.score.innerHTML = counterNormalaize(current);
  }
}

export default Counter;
