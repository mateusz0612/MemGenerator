export class Meme {
  constructor(src, boxCount) {
    this.src = src;
    this.boxCount = boxCount;
  }

  createMemeImage() {
    const imgElement = document.createElement("img");
    imgElement.src = this.src;
    imgElement.dataset.boxCount = this.boxCount;
    return imgElement;
  }
}
