const memeImageContainer = document.querySelector('.memes-container');
const memeImageField = document.querySelector('.meme-field');
const memeCreatorInputs = document.querySelector('.meme-creator_inputs');

const adjustTextInputs = (boxCount) => {
    elements = [...memeCreatorInputs.children];
    elements.forEach(e => memeCreatorInputs.removeChild(e));
    for(let i=1; i<=boxCount; i++){
        const inputElement = document.createElement('input');
        const inputLabel = document.createElement('h2');
        inputElement.classList.add('meme-text-input');
        inputLabel.textContent = `Text ${i}`;
        memeCreatorInputs.appendChild(inputLabel);
        memeCreatorInputs.appendChild(inputElement);
    }
}


const appendMemeImage = (src, boxCount)=>{
    const imageElement = document.createElement('img');
    imageElement.src = src;
    imageElement.boxCount = boxCount;
    imageElement.addEventListener('click', ()=>{
        memeImageField.src = imageElement.src;
        adjustTextInputs(boxCount);
    })
    memeImageContainer.appendChild(imageElement);
}

fetch('https://api.imgflip.com/get_memes').then(res => res.json()).then(data => {
    for(let i=0; i<12; i++)
        appendMemeImage(data.data.memes[i].url, data.data.memes[i].box_count);
});