import { useEffect, useRef, useState } from "react"
import { ButtonInterface } from "../../utils/interfaces-types"
import Lottie, { AnimationItem } from "lottie-web";

const Button = ( {data}: ButtonInterface) => {

  const [ jsonData, setJsonData ] = useState<object | null>(null); // Use object for Lottie JSON
  const [ buttonHovered, setButtonHovered ] = useState<boolean>(false);

  const lottieContainerRef = useRef<HTMLDivElement>(null);
  const lottieInstanceRef = useRef<AnimationItem | null>(null); // Use AnimationItem from lottie-web

  useEffect(() => {
    if (!jsonData || !lottieContainerRef.current) return;

    if (buttonHovered) {
      // Destroy previous animation if exists
      if (lottieInstanceRef.current) {
        lottieInstanceRef.current.destroy();
      }

      lottieContainerRef.current.style.width = '60px';
      lottieInstanceRef.current = Lottie.loadAnimation({
        container: lottieContainerRef.current,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        animationData: jsonData,
      });

    } else {
      // Optionally, destroy animation on mouse leave
      if (lottieInstanceRef.current) {
        lottieContainerRef.current.style.width = '0px';
        lottieInstanceRef.current.destroy();
        lottieInstanceRef.current = null
      }
    }
  }, [buttonHovered, jsonData]);

  useEffect(() => {
    fetch('assets/opt/lotties/01_Habita_Arrow-btn.json')
      .then(res => res.json())
      .then((data) => setJsonData(data));
  }, []);

  return (
    <button className={`
      ${data.color === 'light' ? 'bg-(--color-white)' : 'bg-(--color-dark)'} 
      ${data.icon === true ? 'px-[4px] py-[0]' : 'px-[4px] py-[0]'} 
      rounded-[5px] uppercase font-(--font-weight-btn) flex flex-row
      ${data.color === 'light' ? 'text-(--color-dark)' : 'text-(--color-white)'}`
      } onMouseOver={()=>{handleButtonHover(true)}} onMouseLeave={()=>{handleButtonHover(false)}}>
        <div className="flex relative overflow-hidden max-w-[30px]">
          (
            <div ref={lottieContainerRef} className={`
              lottie-container overflow-hidden duration-250 flex items-center content-center relative scale-300
              ${data.color === 'light' ? 'invert' : 'dark'} 
              `}>
            </div>
          )
        </div>
      <p className={`font-[400] text-s font-(family-name:--font-family-secondary)`}>&nbsp;{data.text}</p>
    </button>
  )

  function handleButtonHover (enter:boolean){
    setButtonHovered(enter);
  };
}

export default Button
