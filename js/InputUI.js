import { Input } from "./Input.js";

export class InputUI {
  constructor(boxCount, container) {
    this.boxCount = boxCount;
    this.container = container;
  }

  clearContainer() {
    const childrenElements = [...this.container.children];
    childrenElements.forEach((e) => this.container.removeChild(e));
  }

  adjustInputs() {
    this.clearContainer();
    for (let i = 0; i < this.boxCount; i++) {
      const labelElement = Input.createInputLabel();
      const inputElement = Input.createInput();
      inputElement.classList.add("meme-text-input");
      labelElement.textContent = `Text ${i + 1}`;
      this.container.appendChild(labelElement);
      this.container.appendChild(inputElement);
    }
  }
}
