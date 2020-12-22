import { ApiHandler } from "./ApiHandler.js";
import { MemeUI } from "./MemeUI.js";
import { DOMelements } from "./DOMelements.js";
import { Button } from "./Button.js";
import { generateBtnHandler } from "./GenerateBtnHandler.js";

const init = async () => {
  const getMemesApi = new ApiHandler(
    "https://secret-ocean-49799.herokuapp.com/https://api.imgflip.com/get_memes"
  );
  const data = await getMemesApi.getData();
  const memeUi = new MemeUI(DOMelements.memesContainer, data);
  memeUi.displayMemes();
  const generateButton = new Button("Generete Meme!", generateBtnHandler);
  DOMelements.generateBtnContainer.appendChild(
    generateButton.createButton("meme-creator_generate_button")
  );
};

init();
