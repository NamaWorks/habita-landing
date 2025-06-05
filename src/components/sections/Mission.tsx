import { useEffect, useRef, useState } from "react"
import { missionImagesStyles } from "../../utils/styleClasses"
import { animateWeightOnScroll } from "../../utils/functions/animations/animateWeightOnScroll";

const Mission = () => {

  const h2MissionRef = useRef<HTMLHeadingElement>(null);
  const firstImageRef = useRef<HTMLDivElement>(null);

  const [ windowWidth, setWindowWidth ] = useState<number>(window.innerWidth);

  window.addEventListener('resize', ()=>{
    setWindowWidth(window.innerWidth);
  });

  useEffect(()=>{
    if(h2MissionRef.current){
      const textsToModify = h2MissionRef.current.querySelectorAll('.var-weight');
      textsToModify.forEach((item) => {
        animateWeightOnScroll(item as HTMLElement);
      });
    };
  },[])

  if(windowWidth<768){
    return (
      <section className={`flex flex-col items-center p-(--padding-m)`}>
        <div className={`${missionImagesStyles}`} ref={firstImageRef}>
          <img src="https://moona.dev/wp-content/uploads/2025/06/Habita-Gif-Text-01.gif" alt="GIF with several images of camper vans" />
        </div>
  
        <div>
          <h2 className={`font-(family-name:--font-family-main) text-[48px]/[40px] text-center uppercase text-(color:--color-dark) font-[300]`} ref={h2MissionRef}>
            we <span className="var-weight">transform</span> ordinary vans into <span className="var-weight">custom-built homes on wheels</span> ready to take you anywhere
          </h2>
        </div>
  
        <div className={`${missionImagesStyles}`}>
          <img src="https://moona.dev/wp-content/uploads/2025/06/Habita-Gif-Text-02.gif" alt="GIF with several images of camper vans" />
        </div>
      </section>
    );
  } else {
    return (
      <section className={`flex flex-col items-center py-(--padding-ml) px-(--padding-m)`}>  
        <div>
          <h2 className={`font-(family-name:--font-family-main) text-[96px]/[80px] text-center uppercase text-(color:--color-dark) font-[300]`} ref={h2MissionRef}>
            we &nbsp;
            <span className="var-weight">transform &nbsp;</span>
            ordinary vans into &nbsp;
            <span className="var-weight">
              <span className="flex flex-nowrap justify-center">
                custom-built &nbsp;
                <span className="flex w-[15%]">
                  <div className={`${missionImagesStyles}`} ref={firstImageRef}>
                    <img src="https://moona.dev/wp-content/uploads/2025/06/Habita-Gif-Text-01.gif" alt="GIF with several images of camper vans" className="md:w-full md:h-full md:object-cover"/>
                  </div>
                </span> 
              </span>
            homes on wheels &nbsp;
            </span>
            ready 
            <span className="flex flex-nowrap justify-center">
              <span className="flex w-[15%]">
                <div className={`${missionImagesStyles}`}>
                  <img src="https://moona.dev/wp-content/uploads/2025/06/Habita-Gif-Text-02.gif" alt="GIF with several images of camper vans" className="md:w-full md:h-full md:object-cover"/>
                </div>
              </span>
            &nbsp;to take you anywhere
            </span>
          </h2>
        </div>
      </section>
    );

  }
}

export default Mission