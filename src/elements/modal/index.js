import './modal.scss';
import { simpleTag } from '../../helper';

class Modal {
  constructor(name) {
    this.name = name;
    this.switcher = this.pushSwitcher.bind(this);
  }

  render() {
    const modalTag = simpleTag({
      tagName: 'div',
      classTag: `modal ${this.name} modal-hidden`,
    });
    this.modalTag = modalTag;
    return this.modalTag;
  }

  pushSwitcher() {
    this.modalTag.classList.toggle('modal-hidden');
  }
}

export default Modal;
