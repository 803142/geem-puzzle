import { simpleTag } from '../../helper';

class Button {
  constructor(name, action) {
    this.name = name;
    this.action = action;
  }

  render() {
    this.buttonTag = simpleTag(
      {
        tagName: 'button',
        className: `btn ${this.name}`,
      },
      this.name
    );
    this.setAction();
    return this.buttonTag;
  }

  setAction() {
    this.buttonTag.onclick = this.action;
  }

  setIcon(icon) {
    this.buttonTag.innerHtml = icon;
  }
}

export default Button;
