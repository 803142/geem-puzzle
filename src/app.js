import Component from './components/component';
import Components from './components';
import baseData from './baseData';

class App extends Component {
  constructor(appTag) {
    super();
    this.app = appTag;
    this.components = new Components();
  }

  init() {
    this.state.setAppName(this.app.className);
    if (!this.state.getLocalStorage()) this.state.storage = { ...baseData };

    Object.keys(this.components).forEach(component => this.components[component].init(this.app));
  }

  render() {
    Object.keys(this.components).forEach(component => this.components[component].render(this.app));
  }

  start() {
    this.app.addEventListener('click', cliked => {
      if (this.events.events[`click-${cliked.target.tagName}`]) {
        this.events.events[`click-${cliked.target.tagName}`][0](cliked.target);
      }
    });
  }
}

export default App;
