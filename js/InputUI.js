import { InputFactory } from "./InputFactory.js";

export class InputUI {
  constructor(boxCount, inputContainer) {
    this.boxCount = boxCount;
    this.inputContainer = inputContainer;
  }

  clearInputs() {
    const containerElements = [...this.inputContainer.children];
    containerElements.forEach((e) => {
      this.inputContainer.removeChild(e);
    });
  }

  adjustInputs() {
    this.clearInputs();
    for (let i = 1; i <= this.boxCount; i++) {
      const inputElement = InputFactory.createInput();
      const labelElement = InputFactory.createInputLabel(i);
      inputElement.classList.add("meme-text-input");
      this.inputContainer.appendChild(labelElement);
      this.inputContainer.appendChild(inputElement);
    }
  }
}
