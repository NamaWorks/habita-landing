export const entryAnimationText = (htmlElement: HTMLElement) => {
    let moveAmount = 180;
  // let opacityAnimated = 1;
  let timeoutA: number | null;

  const move = () => {
    if(htmlElement){
      htmlElement.style.transform = `translateY(${moveAmount * 0.9}px)`;
      // htmlElement.style.opacity = (1 - opacityAnimated).toString();
      // htmlElement.style.opacity = '1;'
    }

    // opacityAnimated *= 0.95;
    moveAmount *= 0.95;

    if (Math.abs(moveAmount) > 0.5) {
      timeoutA = requestAnimationFrame(move);
    } else {
      timeoutA = null;
      cancelAnimationFrame(Number(timeoutA));
    }
  };

  move();
};
