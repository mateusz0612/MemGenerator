import { DOMelements } from "./DOMelements.js";
import { InputUI } from "./InputUI.js";

export class Meme {
  constructor(src, id, boxCount) {
    this.src = src;
    this.id = id;
    this.boxCount = boxCount;
  }

  createMemeImage() {
    const imgElement = document.createElement("img");
    imgElement.src = this.src;
    imgElement.dataset.boxCount = this.boxCount;
    imgElement.dataset.id = this.id;
    imgElement.addEventListener("click", () => {
      DOMelements.memeField.src = this.src;
      const inputUI = new InputUI(this.boxCount, DOMelements.inputContainer);
      inputUI.adjustInputs();
    });
    return imgElement;
  }
}
