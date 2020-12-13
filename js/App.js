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
  const generateButton = new Button("Generete Meme!", () => {
    const params = {};
    Input.getInputsValue(".meme-text-input").forEach((e, index) => {
      params[`text${index}`] = e;
    });
    let generatedMemeUrl = `https://api.imgflip.com/caption_image&templete_id=${DOMelements.memeField.dataset.id}&username=dennni&pasword=kwasnejapko12`;
    for (const [key, value] of Object.entries(params))
      generatedMemeUrl += `&${key}=${value}`;
  });
  DOMelements.generateBtnContainer.appendChild(
    generateButton.createButton("meme-creator_generate_button")
  );
};

init();
