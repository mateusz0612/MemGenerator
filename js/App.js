import { ApiHandler } from "./ApiHandler.js";
import { MemeUI } from "./MemeUI.js";
import { DOMelements } from "./DOMelements.js";

const init = async () => {
  const memeApiHandler = new ApiHandler("https://api.imgflip.com/get_memes");
  const data = await memeApiHandler.getData();
  const memeUi = new MemeUI(DOMelements.memesContainer, data);
  memeUi.displayMemes();
};

init();
