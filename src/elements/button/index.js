import { simpleTag } from '../../helper';

class Button {
  constructor(name) {
    this.name = name;
    this.tag = this.render();
  }

  render() {
    this.buttonTag = simpleTag(
      {
        tagName: 'button',
        classTag: `btn ${this.name}`,
      },
      this.name
    );
    return this.buttonTag;
  }

  setIcon(icon) {
    this.buttonTag.innerHtml = icon;
  }
}

export default Button;
