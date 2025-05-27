export const splitTextIntoCharacters = (element: HTMLElement) => {
  const text = element.innerText;
  const charArr = text.split('');
  
  const newText = charArr.map((char, i)=>{return `<span id='char-${i}' class='char'>${char}</span>`}).join('');

  element.innerHTML = newText;
  console.log(element.innerText)

};