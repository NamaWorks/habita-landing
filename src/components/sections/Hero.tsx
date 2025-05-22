import { useEffect, useRef } from "react"
import Button from "../ui/Button"
import { splitTextIntoLines } from "../../utils/functions/ui_fn/splitTextIntoLines"
import { entryAnimationText } from "../../utils/functions/animations/entryAnimationText";

const Hero = () => {

  const offsetForHeaderAnimation:number = 150;
  const heroH1Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {

    if(heroH1Ref.current){
      splitTextIntoLines(heroH1Ref.current);
      heroH1Ref.current.style.opacity='1';
      
      const lines = heroH1Ref.current?.querySelectorAll('p');
      lines?.forEach((element, i) => {
        setTimeout(() => {
          entryAnimationText(element)
          }, i * offsetForHeaderAnimation);
        });
      
      };
      
  }, []);

  return (
    <>
      <section id="hero-section" className={`w-screen px-(--padding-xs) pt-(--padding-xs) bg-[url(public/assets/opt/pexels-pnw-prod-9354548.png)] bg-cover bg-center min-h-screen flex flex-col justify-between h-screen`}>

        <nav className="flex flex-row justify-between items-start">
          <div className="flex flex-col items-start">
            <Button data={{text:'what we do', color:'light'}} />
            <Button data={{text:'our process', color:'light'}} />
          </div>

          <div>
            <img src="../../../public/assets/opt/logo-favicon.png" alt="habita's logo"/>
          </div>

          <div className="flex flex-col items-end" style={{}}>
            <Button data={{text:'our builds', color:'light', icon: false}} />
            <Button data={{text:'vanlife blog', color:'light', icon: false}} />
          </div>
        </nav>

        <div className={`flex flex-col items-start w-[75%] mt-[5vh] gap-(--gap-xs)`}>
          <div className="flex flex-row w-[100%]">
            <div className={`flex flex-col gap-(--gap-s)`}>
              <p className={`flex-1 text-(--font-parr-size) text-(color:--color-white)`}>
                At Habita, we transform ordinary vans into custom-built homes on wheels — ready to take you anywhere.
              </p>
              <p className={`flex-1 text-(--font-parr-size) text-(color:--color-white) hidden`}>
                Whether you're dreaming of weekend getaways or full-time vanlife, our conversions blend comfort, style, and functionality.
              </p>
            </div>
          <ul className={`flex-1 hidden text-(--font-parr-size) text-(color:--color-white)`}>
            <li>/ Tailored Designs</li>
            <li>/ handcrafted with care</li>
            <li>/ built for life on the road</li>
          </ul>
          
          </div>
          <Button data={{text: 'view the gallery', color:'light'}}/>
        </div>

        <h1 
          ref={heroH1Ref}
          className={`font-(family-name:--font-family-main) text-[86px]/[80px] text-justify uppercase text-(color:--color-white) mt-[10vh] mb-[6vh] opacity-0`}
          >
            from idea — to  open  road
        </h1>

        <div>
          <Button data={{text: 'start your journey today', color: 'light'}}/>
        </div>

      </section>
    </>
  )
}

export default Hero