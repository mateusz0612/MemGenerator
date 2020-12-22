import { Input } from "./Input.js";
import { DOMelements } from "./DOMelements.js";
import { ApiHandler } from "./ApiHandler.js";

export const generateBtnHandler = async () => {
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
};
