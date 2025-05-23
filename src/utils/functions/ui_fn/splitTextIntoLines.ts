export const splitTextIntoLines = (element: HTMLElement) => {
  const containerWidth = element.parentElement?.offsetWidth ? element?.parentElement?.offsetWidth - 20 : console.log('error');
  const text = element.innerText;
  const words = text.split(' ');
  const  lines = [];
  let currentLine = '';

  const tempSpan = document.createElement('span');
  element.classList.forEach((item)=>{tempSpan.classList.add(item)})

  document.body.appendChild(tempSpan)

  for (let i = 0; i < words.length; i++) {
    tempSpan.textContent = currentLine + (currentLine ? " " : "") + words[i];

    if(tempSpan.offsetWidth > Number(containerWidth)){
      lines.push(currentLine);
      currentLine = words[i];
    } else{
      currentLine += (currentLine ? '  ' : '') + words[i]
    }
  }
  
  if(currentLine) {
    lines.push(currentLine);
  }
  
  document.body.removeChild(tempSpan)

  element.innerHTML = lines.map((line,i)=>{return `<div style="overflow:hidden"><p style=${i % 2 === 0 ? 'text-align:right':'text-align:left'}>${line}</p></div>`}).join('');

  const items = element.querySelectorAll('p');
  items.forEach(items => items.style.transform = `translateY(-180px)`)
};