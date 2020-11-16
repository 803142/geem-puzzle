import { simpleTag } from '../../../helper';

class ImageCutter {
  constructor() {
    this.canvas = simpleTag({ tagName: 'canvas' });
    this.tempCanvas = simpleTag({ tagName: 'canvas' });
  }

  init(image, sizeDesk) {
    const difference = image.naturalWidth - image.naturalHeight;
    const compotableSize =
      difference < 0
        ? image.naturalWidth - (image.naturalWidth % sizeDesk)
        : image.naturalHeight + (image.naturalHeight % sizeDesk);

    const moovePointx = Math.floor((image.naturalWidth - compotableSize) / 2);
    const moovePointy = Math.floor((image.naturalHeight - compotableSize) / 2);

    this.tileSize = compotableSize / sizeDesk;

    this.canvas.width = compotableSize;
    this.canvas.height = compotableSize;

    this.tempCanvas.width = this.tileSize;
    this.tempCanvas.height = this.tileSize;

    const ctx = this.canvas.getContext('2d');
    ctx.drawImage(
      image,
      moovePointx,
      moovePointy,
      compotableSize,
      compotableSize,
      0,
      0,
      compotableSize,
      compotableSize
    );

    this.gameDesk = [];

    this.desk = Array(sizeDesk).fill(Array(sizeDesk).fill(0));
    this.imageCut();
  }

  imageCut() {
    const ctx = this.canvas.getContext('2d');
    const ctxTemp = this.tempCanvas.getContext('2d');
    const tempPuzle = [];
    this.desk = this.desk.reduce((fullArray, row, indexY) => {
      const rowImg = row.map((image, indexX) => {
        const tempImage = new Image();
        const x = indexX * this.tileSize;
        const y = indexY * this.tileSize;

        const tileClass = `place-${indexX}${indexY}`;
        this.gameDesk = [...this.gameDesk, tileClass];

        tempImage.className = `image-${indexY}${indexX}`;

        const imageData = ctx.getImageData(x, y, this.tileSize, this.tileSize);
        ctxTemp.putImageData(imageData, 0, 0);
        this.tempCanvas.toBlob(
          blob => {
            const url = URL.createObjectURL(blob);
            tempImage.onload = () => {
              URL.revokeObjectURL(url);
              tempPuzle.push(tempImage);
            };
            tempImage.src = url;
          },
          'image/jpeg',
          0.95
        );
        return tempImage;
      });
      return [...fullArray, ...rowImg];
    }, []);
  }
}

export default ImageCutter;
