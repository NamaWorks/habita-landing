import { useEffect, useRef } from "react";
import Button from "../ui/Button";
import { animateWeightOnScroll } from "../../utils/functions/animations/animateWeightOnScroll";

const Prefooter = () => {

  const h3PrefooterRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if(h3PrefooterRef.current){
      const textToModify = h3PrefooterRef.current.querySelector('span');
      animateWeightOnScroll(textToModify as HTMLElement)
    };
  });

  return (
    <section className="flex flex-col gap-(--gap-m) p-(--padding-s)">
      <h3 className={`font-(family-name:--font-family-main) text-[36px]/[32px] text-left text-(color:--color-dark) font-[200]`} ref={h3PrefooterRef}>
        Your van is more than a vehicle.<br/> <span className="font-[400]">It’s freedom, adventure, and home</span> — all in one. We don’t just build campers.We build the start of something unforgettable.
      </h3>

      <p className={`flex-1 text-(--font-parr-size) text-(color:--color-dark)`}>
        We specialize in converting vans into fully equipped campers, designed to match your lifestyle, needs, and adventures. Every project is unique, and we work closely with you to bring your vision to life.
      </p>

      <div>
        <Button data={{text: 'Hear from our vanlifers', color: 'dark', icon: false}}/>
      </div>

    </section>
  );
}

export default Prefooter