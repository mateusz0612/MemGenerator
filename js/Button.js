export class Button {
  constructor(textContent, handler) {
    this.textContent = textContent;
    this.handler = handler;
  }

  createButton(cssClass) {
    const buttonElement = document.createElement("button");
    buttonElement.textContent = this.textContent;
    buttonElement.classList.add(cssClass);
    buttonElement.addEventListener("click", this.handler);
    return buttonElement;
  }
}
