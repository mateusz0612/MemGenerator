import { Meme } from "./Meme.js";

export class MemeUI {
  constructor(container, data) {
    this.container = container;
    this.data = data;
  }

  displayMemes() {
    for (let i = 0; i < this.data.data.memes.length; i++) {
      const meme = new Meme(
        this.data.data.memes[i].url,
        this.data.data.memes[i].id,
        this.data.data.memes[i].box_count
      );
      this.container.appendChild(meme.createMemeImage());
    }
  }
}
