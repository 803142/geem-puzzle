import './desk.scss';
import Component from '../component';
import Tile from './tile';
import ImageCutter from './imageCutter';
import { ifCanMoove, isResolveble } from './helper/helper';
import { simpleTag, addStyle, findTargetNode, shuffle /* , importAll */ } from '../../helper';

class Desk extends Component {
  constructor() {
    super();
    this.desk = [];
    this.gameDesk = [];
    this.imageCutter = new ImageCutter();
  }

  init(sizeDesk) {
    const imageEmpty = new Image();
    this.desk = Array(sizeDesk).fill(Array(sizeDesk).fill(imageEmpty));

    this.tileDesk = Array(sizeDesk * sizeDesk).fill(0);

    for (let i = 0; i < this.tileDesk.length; i += 1) {
      this.tileDesk[i] = new Tile(`${i + 1}`);
    }

    addStyle(
      `.desk {
        grid-template-columns: repeat(${sizeDesk}, 1fr);
      }`
    );
  }

  render(imagePuzle, sizeDesk) {
    const image = new Image();

    image.src = imagePuzle;

    const desk = simpleTag({ classTag: 'desk' });
    document.body.appendChild(desk);

    image.onload = () => {
      this.imageCutter.init(image, sizeDesk);
      let puzleArray = [...this.imageCutter.gameDesk];
      puzleArray = shuffle(puzleArray);
      let row =
        Math.floor((puzleArray.indexOf(`place-${sizeDesk - 1}${sizeDesk - 1}`) + 1) / sizeDesk) + 1;
      while (isResolveble(puzleArray, row, sizeDesk)) {
        puzleArray = shuffle(puzleArray);
        row = Math.floor(
          (puzleArray.indexOf(`place-${sizeDesk - 1}${sizeDesk - 1}`) + 1) / sizeDesk
        );
      }

      this.tileDesk[this.tileDesk.length - 1].tag.classList.toggle('hidden');
      this.tileDesk.forEach((tile, index) => tile.tag.appendChild(this.imageCutter.desk[index]));
      this.tileDesk.map(tile => desk.appendChild(tile.tag));

      this.tileDesk.forEach((tileImage, index) => {
        tileImage.tag.classList.toggle(puzleArray[index]);
      });
    };
    desk.addEventListener('click', e => {
      if (findTargetNode(e.target, 'DIV', 'DIV')) {
        const findTile = findTargetNode(e.target, 'DIV', 'DIV');
        console.log(findTargetNode(e.target, 'DIV', 'DIV'));
        const [imageClass, tileClass] = findTargetNode(e.target, 'DIV', 'DIV').classList;
        const possibleMoove = ifCanMoove(imageClass, tileClass, sizeDesk);

        if (possibleMoove) {
          console.log(this.events);
          this.events.dispatchEvent('newMoove');
          findTile.classList.toggle(tileClass);
          findTile.classList.toggle(possibleMoove);
          document.querySelector(`.tile-${sizeDesk * sizeDesk}`).classList.toggle(possibleMoove);

          document.querySelector(`.tile-${sizeDesk * sizeDesk}`).classList.toggle(tileClass);
        }
      }
    });
  }
}

export default Desk;
