export class Input {
  static createInput() {
    const inputElement = document.createElement("input");
    return inputElement;
  }

  static createInputLabel() {
    const labelElement = document.createElement("h2");
    return labelElement;
  }

  static getInputsValue(selector) {
    const inputs = document.querySelectorAll(".meme-text-input");
    const values = [];
    inputs.forEach((e) => values.push(e.value));
    return values;
  }
}
