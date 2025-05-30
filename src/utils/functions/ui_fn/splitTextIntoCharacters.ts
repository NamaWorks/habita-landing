export const splitTextIntoCharacters = (element: HTMLElement) => {
  const text = element.innerText;
  const charArr = text.split('');
  
  const newText = charArr.map((char, i)=>{
    if(char === ' '){
      return `<span class='char-container'><span id='char-${i}' class='char'>&nbsp</span></span>`
    } else {
      return `<span class='char-container'><span id='char-${i}' class='char'>${char}</span></span>`
    }
  }).join('');

  element.innerHTML = newText;
};