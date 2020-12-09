export class MemeFactory {
  constructor(imgSrc, boxCount) {
    this.imgSrc = imgSrc;
    this.boxCount = boxCount;
  }

  createMeme() {
    const memeElement = document.createElement("img");
    memeElement.src = this.imgSrc;
    memeElement.dataset.boxCount = this.boxCount;
    return memeElement;
  }
}
