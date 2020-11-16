import Clock from './timer';
import Desk from './desk';
import Menu from './menu';
import Counter from './counter';

class Components {
  constructor() {
    this.clock = new Clock();
    this.desk = new Desk();
    this.menu = new Menu();
    this.counter = new Counter();
  }
}

export default Components;
