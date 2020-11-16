import Component from '../component';
import { simpleTag } from '../../helper';
import { Button, Modal } from '../../elements';

class Menu extends Component {
  constructor(name) {
    super();
    this.name = name;
  }

  // init() {}

  render() {
    const menuTag = simpleTag({ tagClass: 'menu-container' });
    this.contextMenu = new Modal('menu');
    const contextMenuTag = this.contextMenu.render();
    const menuButton = new Button('pause', this.contextMenu.switcher);
    const menuButtonTag = menuButton.render();
    menuTag.appendChild(menuButtonTag);
    menuTag.appendChild(contextMenuTag);
    document.body.appendChild(menuTag);
  }

  // start() {}
}

export default Menu;
