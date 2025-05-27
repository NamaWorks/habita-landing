import { useEffect, useRef } from "react"
import { missionImagesStyles } from "../../utils/styleClasses"
import { animateWeightOnScroll } from "../../utils/functions/animations/animateWeightOnScroll";

const Mission = () => {

  const h2MissionRef = useRef<HTMLHeadingElement>(null);
  const firstImageRef = useRef<HTMLDivElement>(null);

  useEffect(()=>{
    if(h2MissionRef.current){
      const textsToModify = h2MissionRef.current.querySelectorAll('.var-weight');
      textsToModify.forEach((item) => {
        animateWeightOnScroll(item as HTMLElement);
      });
    };

    if(firstImageRef.current){
      const img = firstImageRef.current.querySelectorAll('img');
      console.log(img);
    };
  },[])

  return (
    <section className={`flex flex-col items-center p-(--padding-m)`}>
      <div className={`${missionImagesStyles}`} ref={firstImageRef}>
        <img src="./../../../public/assets/raw/IMG/GIF/Habita-Gif-Text-01.gif" alt="GIF with several images of camper vans" />
      </div>

      <div>
        <h2 className={`font-(family-name:--font-family-main) text-[48px]/[40px] text-center uppercase text-(color:--color-dark) font-[300]`} ref={h2MissionRef}>
          we <span className="var-weight">transform</span> ordinary vans into <span className="var-weight">custom-built homes on wheels</span> ready to take you anywhere
        </h2>
      </div>

      <div className={`${missionImagesStyles}`}>
        <img src="./../../../public/assets/raw/IMG/GIF/Habita-Gif-Text-02.gif" alt="GIF with several images of camper vans" />
      </div>
    </section>
  )
}

export default Mission