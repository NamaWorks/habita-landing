import { getPercentageOfWindowPos } from "../ui_fn/getPercentageOfWindowPos";

export const animateWeightOnScroll = (element: HTMLElement) => {
  window.addEventListener('scroll', ()=>{
    const percentage = getPercentageOfWindowPos(element);
    element.style.fontWeight = (100 * (10-percentage/10)).toString();
  });
};