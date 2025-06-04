import { useEffect, useRef } from "react"
import Button from "../ui/Button"
import { splitTextIntoLines } from "../../utils/functions/ui_fn/splitTextIntoLines"
import { entryAnimationText } from "../../utils/functions/animations/entryAnimationText";

const Hero = () => {

  const offsetForHeaderAnimation:number = 100;

  const heroH1Ref = useRef<HTMLHeadingElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(heroH1Ref.current){
      splitTextIntoLines(heroH1Ref.current);
      heroH1Ref.current.style.opacity='1';
      const lines = heroH1Ref.current.querySelectorAll('p');
      setTimeout(() => {
        lines?.forEach((element, i) => {
          setTimeout(() => {
            entryAnimationText(element)
            }, i * offsetForHeaderAnimation);
          });
      }, 500);
      };

      if(sectionRef.current){
        // const buttons = sectionRef.current.querySelectorAll('button');
        // const texts = sectionRef.current.querySelectorAll('p');

        if(gradientRef.current) {
          gradientRef.current.style.top = `-${window.innerHeight}px`;
          setTimeout(() => {
            const revealGradient = document.querySelector('#reveal-gradient');
            if(revealGradient){
              revealGradient.remove();
            }
          }, 1000);
        }
      };
      
  }, []);

  return (
    <>
      <div
        ref={gradientRef}
        id="reveal-gradient"
        className="h-[100svh] w-screen fixed bg-white top-[0px] duration-500 delay-500 ease-in z-99"
      ></div>

      <section
        ref={sectionRef}
        id="hero-section"
        className={`
          relative w-screen px-(--padding-xs) pt-(--padding-xs) bg-[url(public/assets/opt/pexels-pnw-prod-9354548.png)] bg-cover bg-center min-h-screen flex flex-col justify-between h-screen
          md:px-(--padding-s) md:pt-(--padding-s) 
        `}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          style={{ pointerEvents: "none" }}
        >
          <source
            src="/assets/opt/video/12335026-uhd_2560_1440_48fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-10 flex flex-col h-full justify-between">
          <nav className="flex flex-row justify-between items-start">
            <div className="flex flex-col items-start max-w-[45%]">
              <Button data={{ text: "what we do", color: "light" }} />
              <Button data={{ text: "our process", color: "light" }} />
            </div>

            <div>
              <img
                src="../../../public/assets/opt/logo-favicon.png"
                alt="habita's logo"
              />
            </div>

            <div className="flex flex-col items-end max-w-[45%]">
              <Button
                data={{ text: "our builds", color: "light", icon: false }}
              />
              <Button
                data={{ text: "vanlife blog", color: "light", icon: false }}
              />
            </div>
          </nav>

          <div
            className={`
              flex flex-col items-start w-[75%] mt-[5vh] gap-(--gap-s)
              md:w-[50%]
            `}
          >
            <div
              className="
              flex flex-row w-[100%]
              md:gap-(--gap-l) md:min-w-[728px]
            "
            >
              <div className={`flex flex-col gap-(--gap-s)`}>
                <p
                  className={`flex-1 text-(--font-parr-size) text-(color:--color-white) max-w-[300px]`}
                >
                  At Habita, we transform ordinary vans into custom-built homes on
                  wheels — ready to take you anywhere.
                </p>
                <p
                  className={`
                flex-1 text-(--font-parr-size) text-(color:--color-white) hidden max-w-[300px]
                md:flex 
                `}
                >
                  Whether you're dreaming of weekend getaways or full-time
                  vanlife, our conversions blend comfort, style, and
                  functionality.
                </p>
              </div>
              <ul
                className={`
            flex-1 hidden text-(--font-parr-size) text-(color:--color-white)
            md:flex md:flex-col md:w-full
          `}
              >
                <li>/ Tailored Designs</li>
                <li>/ handcrafted with care</li>
                <li>/ built for life on the road</li>
              </ul>
            </div>
            <Button data={{ text: "view the gallery", color: "light" }} />
          </div>

          <h1
            ref={heroH1Ref}
            className={`font-(family-name:--font-family-main) text-[86px]/[80px] text-justify uppercase text-(color:--color-white) mt-[10vh] mb-[6vh] opacity-0 md:text-[170px]/[160px] md:mt-[5vh]`}
          >
            from idea —
            <br />
            to open road
          </h1>

          <div>
            <Button data={{ text: "start your journey today", color: "light" }} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero