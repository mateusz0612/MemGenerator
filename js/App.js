import { ApiHandler } from "./ApiHandler.js";
import { MemeUI } from "./MemeUI.js";
import { DOMelements } from "./DOMelements.js";
import { Button } from "./Button.js";
import { Input } from "./Input.js";

const init = async () => {
  const getMemesApi = new ApiHandler(
    "https://secret-ocean-49799.herokuapp.com/https://api.imgflip.com/get_memes"
  );
  const data = await getMemesApi.getData();
  const memeUi = new MemeUI(DOMelements.memesContainer, data);
  memeUi.displayMemes();
  const generateButton = new Button("Generete Meme!", async () => {
    const params = [];
    Input.getInputsValue(".meme-text-input").forEach((e) => {
      params.push(e);
    });
    const formData = new FormData();
    formData.append("username", "dennni");
    formData.append("password", "kwasnejapko12");
    formData.append("template_id", DOMelements.memeField.dataset.id);
    params.forEach((e, index) => formData.append(`boxes[${index}][text]`, e));
    const generateMemeApi = new ApiHandler(
      "https://api.imgflip.com/caption_image"
    );
    const generatedMeme = await generateMemeApi.getData(formData);
    DOMelements.memeField.src = generatedMeme.data.url;
  });
  DOMelements.generateBtnContainer.appendChild(
    generateButton.createButton("meme-creator_generate_button")
  );
};

init();
