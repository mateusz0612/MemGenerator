import { DOMelements } from "./DOMelements.js";

export class Meme {
  constructor(src, boxCount) {
    this.src = src;
    this.boxCount = boxCount;
  }

  createMemeImage() {
    const imgElement = document.createElement("img");
    imgElement.src = this.src;
    imgElement.dataset.boxCount = this.boxCount;
    imgElement.addEventListener("click", () => {
      DOMelements.memeField.src = this.src;
    });
    return imgElement;
  }
}
