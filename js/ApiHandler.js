import { MemeFactory } from "./MemeFactory.js";
import { InputUI } from "./InputUI.js";

const memeContainer = document.querySelector(".memes-container");
const memeField = document.querySelector(".meme-field");
const memeCreatorInputs = document.querySelector(".meme-creator_inputs");

export function setMemesThumbnail() {
  fetch("https://api.imgflip.com/get_memes")
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i <= 11; i++) {
        //setting data
        const imgSrc = data.data.memes[i].url;
        const boxCount = data.data.memes[i].box_count;
        //memegenerator object
        const memeGenerator = new MemeFactory(imgSrc, boxCount);
        const meme = memeGenerator.createMeme();
        //click handler
        meme.addEventListener("click", () => {
          memeField.src = meme.src;
          const inputHandler = new InputUI(boxCount, memeCreatorInputs);
          inputHandler.adjustInputs();
        });
        memeContainer.appendChild(meme);
      }
    });
}
