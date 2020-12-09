export class InputFactory {
  static createInput() {
    const inputElement = document.createElement("input");
    return inputElement;
  }

  static createInputLabel(index) {
    const labelElement = document.createElement("h2");
    labelElement.textContent = `Text ${index}`;
    return labelElement;
  }
}
