import './assets/fonts/neucher.scss';
import './style.scss';
import Clock from './components/timer';
import Desk from './components/desk';
import Menu from './components/menu';

import { simpleTag, importAll } from './helper';
import Counter from './components/counter';

const images = importAll(require.context('./assets/images/full/', false, /\.(png|jpe?g|svg)$/));
// require.context('./assets/audio/', false, /\.(mp3)$/);

const appTag = simpleTag({
  tagName: 'div',
  classTag: 'gem-puzzle',
});
document.body.appendChild(appTag);

const timer = new Clock();

timer.render(appTag);

timer.start();

const desk = new Desk();

desk.init(4);

desk.render(images[23], 4);

const menu = new Menu();

menu.render();

const counter = new Counter();

counter.init();

counter.render();
