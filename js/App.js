import { ApiHandler } from "./ApiHandler.js";
import { MemeUI } from "./MemeUI.js";
import { DOMelements } from "./DOMelements.js";
import { Button } from "./Button.js";
import { Input } from "./Input.js";

const init = async () => {
  const getMemesApi = new ApiHandler("https://api.imgflip.com/get_memes");
  const data = await getMemesApi.getData();
  const memeUi = new MemeUI(DOMelements.memesContainer, data);
  memeUi.displayMemes();
  const generateButton = new Button("Generete Meme!", async () => {
    const boxes = [];
    Input.getInputsValue(".meme-text-input").forEach((e) => {
      boxes.push({ text: e });
    });
  });
  DOMelements.generateBtnContainer.appendChild(
    generateButton.createButton("meme-creator_generate_button")
  );
};

init();
