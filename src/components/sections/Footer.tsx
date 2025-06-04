import { useEffect, useRef } from "react"
import Button from "../ui/Button"
import { splitTextIntoLines } from "../../utils/functions/ui_fn/splitTextIntoLines";
import { entryAnimationText } from "../../utils/functions/animations/entryAnimationText";

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
              entryAnimationText(element, false)
              }, i * offsetForHeaderAnimation);
            });
        }, 500);

        splitTextIntoLines(prefooterh2SecondRef.current, false);
        prefooterh2SecondRef.current.style.opacity='1';
        const linesB = prefooterh2SecondRef.current.querySelectorAll('p');
        setTimeout(() => {
          linesB?.forEach((element, i) => {
            setTimeout(() => {
              entryAnimationText(element, false)
              }, i * offsetForHeaderAnimation);
            });
        }, 500);
    }
  },[])

  return (
    <>
      <footer
        className={`relative w-screen h-[100svh] bg-cover bg-center min-h-screen flex flex-col justify-between px-(--padding-xs) pb-(--padding-xs)`}
      >
        <div className="absolute top-0 left-0 h-full w-full z-1 bg-black opacity-45"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          style={{ pointerEvents: "none" }}
        >
          <source
            src="https://moona.dev/wp-content/uploads/2025/06/9354291-hd_1920_1080_30fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-10 flex flex-col h-full justify-between">
          <div className={`flex flex-col gap-(--gap-ml)`}>
            <div>
              <Button
                data={{ text: "get in touch", color: "light", icon: false }}
              />
            </div>
            <div>
              <h2
                className={`font-(family-name:--font-family-main) text-[48px]/[40px] text-left uppercase text-(color:--color-white) font-[300] opacity-0 md:w-[65%] md:text-[96px]/[90px] md:w-full`}
                ref={prefooterh2FirstRef}
              >
                More than a build
              </h2>
              <h2
                className={`font-(family-name:--font-family-main) text-[48px]/[40px] text-right uppercase text-(color:--color-white) font-[300] opacity-0 md:w-[65%] md:text-[96px]/[90px] md:w-full`}
                ref={prefooterh2SecondRef}
              >
                It's your way of life
              </h2>
            </div>

            <p
              className={`flex-1 text-(--font-parr-size) text-(color:--color-white) md:w-[35%] md:self-center`}
            >
              Whether you're chasing weekend getaways or full-time freedom, we’re
              here to build the van that gets you there. Crafted with care, built
              for adventure — this is where the road becomes home.
            </p>
          </div>

          <div className={`flex justify-between`}>
            <div className="lg:flex lg:items-end lg:justify-between lg:w-full lg:pr-(--padding-l)">
              <div className="flex lg:flex-col">
                <p
                  className={`text-(--font-parr-size) text-(color:--color-white) uppercase`}
                >
                  CA - 90026
                </p>
                <p
                  className={`text-(--font-parr-size) text-(color:--color-white) uppercase`}
                >
                  1420 sunset blvd, los angeles
                </p>
              </div>
              <div className="flex lg:flex-col">
                <p
                  className={`text-(--font-parr-size) text-(color:--color-white) uppercase`}
                >
                  © 2025
                </p>
                <div>
                  <Button
                    data={{ text: "privacy policy", color: "light", icon: false }}
                  />
                </div>
              </div>
              <div className="flex lg:flex-col">
                <div>
                  <Button
                    data={{ text: "what we do", color: "light", icon: false }}
                  />
                </div>
                <div>
                  <Button
                    data={{ text: "get in touch", color: "light", icon: false }}
                  />
                </div>
              </div>
            </div>
            <div className={`flex flex-col  justify-end`}>
              <img
                src="./../../../public/assets/raw/IMG/SVG/Habita-logo-white.svg"
                alt="habita logo white"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer