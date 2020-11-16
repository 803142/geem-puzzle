import { simpleTag } from '../../../helper';

class Tile {
  constructor(n) {
    this.n = n;
    this.drawTile();
  }

  drawTile() {
    this.tag = simpleTag({ classTag: `tile-${this.n}` });
    this.tag.appendChild(simpleTag({ tagName: 'span', classTag: 'helper' }, this.n));
  }

  setImage(image) {
    this.tag.appendChild(image);
  }
}

export default Tile;
