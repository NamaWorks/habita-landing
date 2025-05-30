import { getPercentageOfWindowPos } from "../ui_fn/getPercentageOfWindowPos";
import { splitTextIntoCharacters } from "../ui_fn/splitTextIntoCharacters";

export const entryAniamationCharacters = (element:HTMLElement):void => {

  window.addEventListener('scroll', () => {
  if(!element.classList.contains('visible')){
      splitTextIntoCharacters(element);
      const charContainers:NodeListOf<HTMLSpanElement> = element.querySelectorAll('.char-container');
      const charElements:NodeListOf<HTMLSpanElement> = element.querySelectorAll('.char');
    
      charContainers.forEach((container:HTMLSpanElement) => {
        container.style.position='relative';
        container.style.display="flex";
        container.style.flexWrap = 'wrap';
        // container.style.backgroundColor='red';
        container.style.overflow='hidden';
        element.style.display='flex';
      })
      const scrollPosition = getPercentageOfWindowPos(element);
  
      if(scrollPosition>20 && scrollPosition<70){
        charElements.forEach((item:HTMLSpanElement, i:number)=>{
          item.style.position='relative';
          item.style.transition='0.5s ease-in-out';
          item.style.left=`20px`;
          element.style.opacity = '1';
  
          element.classList.add('visible');
          
          setTimeout(() => {
            item.style.left = '0px';
          }, 25*i);
        });
      }
    };
  });
  

}; 