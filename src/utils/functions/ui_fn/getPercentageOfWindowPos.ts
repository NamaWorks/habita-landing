export const getPercentageOfWindowPos = (element:Element):number => {
  const windowHeight = window.innerHeight;
  const elementTopPos = element.getBoundingClientRect().top;

  const percentage = Math.floor((elementTopPos/windowHeight)*100);

  return percentage;
};