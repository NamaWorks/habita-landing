import { useEffect, useRef } from "react"
import Button from "../ui/Button"
import { splitTextIntoLines } from "../../utils/functions/ui_fn/splitTextIntoLines";
import { entryAnimationText } from "../../utils/functions/animations/entryAnimationText";
import { getPercentageOfWindowPos } from "../../utils/functions/ui_fn/getPercentageOfWindowPos";

const Footer = () => {

  const offsetForHeaderAnimation:number = 100;

  const prefooterh2FirstRef = useRef<HTMLHeadingElement>(null);
  const prefooterh2SecondRef = useRef<HTMLHeadingElement>(null);

  useEffect(()=>{
    if(prefooterh2FirstRef.current && prefooterh2SecondRef.current){
        splitTextIntoLines(prefooterh2FirstRef.current, false);
        prefooterh2FirstRef.current.style.opacity='1';
        const linesA = prefooterh2FirstRef.current.querySelectorAll('p');
        setTimeout(() => {
          linesA?.forEach((element, i) => {
            setTimeout(() => {
              entryAnimationText(element)
              }, i * offsetForHeaderAnimation);
            });
        }, 500);

        splitTextIntoLines(prefooterh2SecondRef.current, false);
        prefooterh2SecondRef.current.style.opacity='1';
        const linesB = prefooterh2SecondRef.current.querySelectorAll('p');
        setTimeout(() => {
          linesB?.forEach((element, i) => {
            setTimeout(() => {
              entryAnimationText(element)
              }, i * offsetForHeaderAnimation);
            });
        }, 500);
    }
  },[])

  return (
    <>
      <footer className={`bg-[url(public/assets/raw/IMG/JPG/luke-porter-dVHLuOe1Nwk-unsplash.jpg)] w-screen h-[100svh] bg-cover bg-center min-h-screen flex flex-col justify-between px-(--padding-xs) pb-(--padding-xs)`}>
        <div className={`flex flex-col gap-(--gap-ml)`}>
          <div>
            <Button data={{text: 'get in touch', color: 'light', icon: false}}/>
          </div>
          <div>
            <h2 className={`font-(family-name:--font-family-main) text-[48px]/[40px] text-left uppercase text-(color:--color-white) font-[300] opacity-0`} ref={prefooterh2FirstRef}>
              More than a build
            </h2>
            <h2 className={`font-(family-name:--font-family-main) text-[48px]/[40px] text-right uppercase text-(color:--color-white) font-[300] opacity-0`} ref={prefooterh2SecondRef}>
              It's your way of life
            </h2>
          </div>

          <p className={`flex-1 text-(--font-parr-size) text-(color:--color-white)`}>
            Whether you're chasing weekend getaways or full-time freedom, we’re here to build the van that gets you there. Crafted with care, built for adventure — this is where the road becomes home.
          </p>
        </div>

        <div className={`flex`}>
          <div>
          <p className={`text-(--font-parr-size) text-(color:--color-white) uppercase`}>
            CA - 90026
          </p>
          <p className={`text-(--font-parr-size) text-(color:--color-white) uppercase`}>
            1420 sunset blvd, los angeles
          </p>
          <p className={`text-(--font-parr-size) text-(color:--color-white) uppercase`}>
            © 2025
          </p>
          <div>
            <Button data={{text: 'get in touch', color: 'light', icon: false}}/>
          </div>
          <div>
            <Button data={{text: 'get in touch', color: 'light', icon: false}}/>
          </div>
          <div>
            <Button data={{text: 'get in touch', color: 'light', icon: false}}/>
          </div>
        </div>
        <div className={`flex flex-col justify-end`}>
          <img src="./../../../public/assets/raw/IMG/SVG/Habita-logo-white.svg" alt="habita logo white" />
        </div>

        </div>
      </footer>
    </>
  )
}

export default Footer