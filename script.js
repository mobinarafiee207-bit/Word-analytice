const textareaEl = document.querySelector('.textarea');
const numberOfCharactersEl = document.querySelector('.stat__number--characters');
const twitterNumberEl = document.querySelector('.stat__number--twitter');
const facebookNumberEl = document.querySelector('.stat__number--facebook');
const wordsNumberEl = document.querySelector('.stat__number--words');
const linesEl = document.querySelector('.stat__number--lines');
const inputHandler = () => {
    let text = textareaEl.value;
    if (textareaEl.value.includes('<script>')) {
        alert('wrong input');
        textareaEl.value = textareaEl.value.replace('<script>', '');
    }
    let numberOfWords = textareaEl.value.split(' ').length;
    console.log(textareaEl.value.length);
    if (textareaEl.value.length === 0) {
        numberOfWords = 0;
    }

    const numberOfCharacters = textareaEl.value.length;
    // Line count
    const lines = text.split('\n').filter(line => line.trim() !== '').length;
    if (linesEl) {
        linesEl.textContent = lines;
    }
    const twitterCharactersLeft = 280 - numberOfCharacters;
    const facebookCharactersLeft = 2200 - numberOfCharacters;

    if (twitterCharactersLeft < 0) {
        twitterNumberEl.classList.add('stat__number--limit');
    } else {
        twitterNumberEl.classList.remove('stat__number--limit');
    }
    if (facebookCharactersLeft < 0) {
        facebookNumberEl.classList.add('stat__number--limit');
    } else {
        facebookNumberEl.classList.remove('stat__number--limit');
    }
    numberOfCharactersEl.textContent = numberOfCharacters;
    twitterNumberEl.textContent = twitterCharactersLeft;
    facebookNumberEl.textContent = facebookCharactersLeft;
    wordsNumberEl.textContent = numberOfWords;
}

textareaEl.addEventListener('input', inputHandler);