import Component from '../component';
import { simpleTag, qs } from '../../helper';
import { Button, Modal } from '../../elements';
import './menu.scss';

class Menu extends Component {
  constructor(name) {
    super();
    this.name = name;
  }

  init() {
    this.events.addEventList('click-BUTTON', [this.action.bind(this)]);
    this.events.addEventList('pause-game', [this.showContin.bind(this)]);
  }

  render(appTag) {
    const menuTag = simpleTag({ classTag: 'menu-container' });
    this.contextMenu = new Modal('menu');
    const contextMenuTag = this.contextMenu.render();
    const menuButton = new Button('pause', this.contextMenu.switcher);
    this.contextMenu.switcher();
    const menuButtonTag = menuButton.render();
    const menuBar = simpleTag({ classTag: 'menu-bar' });

    const menuList = ['continue', 'new-game', 'settings', 'best', 'images', 'save', 'load'];

    menuList.forEach(name => {
      const button = new Button(name);
      menuBar.appendChild(button.tag);
    });
    contextMenuTag.appendChild(menuBar);
    menuTag.appendChild(menuButtonTag);
    menuTag.appendChild(contextMenuTag);
    appTag.appendChild(menuTag);
    if (!this.state.storage.gameInProgress.started) {
      this.continue = qs('.continue');
      this.continue.classList.toggle('hidden');
    }
  }

  showContin() {
    if (this.continue.className.match('hidden')) {
      this.continue.classList.toggle('hidden');
    }
  }

  action(button) {
    switch (button.className) {
      case 'btn pause':
        this.events.dispatchEvent('pause-game');
        this.contextMenu.switcher();
        break;
      case 'btn new-game':
        this.events.dispatchEvent('new-game');
        this.contextMenu.switcher();
        break;
      case 'btn continue':
        this.events.dispatchEvent('continue-game');
        this.contextMenu.switcher();
        break;
      case 'btn settings':
        this.contextMenu.switcher();
        break;
      case 'btn best':
        this.contextMenu.switcher();
        break;
      case 'btn images':
        this.contextMenu.switcher();
        break;
      case 'btn save':
        this.contextMenu.switcher();
        break;
      case 'btn load':
        this.contextMenu.switcher();
        break;
      default:
    }
  }

  start() {
    this.contextMenu.switcher();
  }

  pause() {
    this.contextMenu.switcher();
  }
}

export default Menu;
