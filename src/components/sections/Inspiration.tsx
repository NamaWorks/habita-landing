import { useEffect, useRef, useState } from "react";
import Button from "../ui/Button";
import { entryAniamationCharacters } from "../../utils/functions/animations/entryAnimationCharacters";

const Inspiration = () => {

  const hlTextRef = useRef<HTMLHeadingElement>(null);
  const [ windowWidth, setWindowWidth ] = useState<number>(window.innerWidth);

  window.addEventListener('resize', ()=>{
    setWindowWidth(window.innerWidth);
  });

  useEffect(() => {
    if(hlTextRef.current){
      entryAniamationCharacters(hlTextRef.current);
    }
  },[]);

  if(windowWidth<768){
    return (
      <>
    <section className="flex flex-col gap-(--gap-m) p-(--padding-s)">
      <p className={`flex-1 text-(--font-parr-size) text-(color:--color-dark)`}>
        Take a look at some of our past conversions — each one built to tell a different story.
        <br/>
         From cozy two-seaters to off-grid family setups, our builds show the range of what’s possible.
      </p>

      <div>
        <Button data={{text: 'get inspired for your own', color: 'dark', icon: false}}/>
      </div>

      <p ref={hlTextRef} className="uppercase font-[400] duration-250 ease-in-out opacity-0">Tips, stories, and <span className="font-[800]">life on the road</span></p>

      <p className={`flex-1 text-(--font-parr-size) text-(color:--color-dark)`}>
        Looking for ideas, advice, or just some vanlife fuel? Our blog is packed with content from the road — gear reviews, build insights, travel tips, and more.
      </p>
    </section>
    </>
  );
  } else {
    return(

      <>
      <section className="flex flex-row gap-(--gap-m) p-(--padding-s) justify-between px-(--padding-ml) h">
        <div className="flex flex-col gap-(--gap-m) w-[300px]">
          <p
            className={`text-(--font-parr-size) text-(color:--color-dark)`}
            >
            Take a look at some of our past conversions — each one built to tell
            a different story.
            <br />
            From cozy two-seaters to off-grid family setups, our builds show the
            range of what’s possible.
          </p>

          <div>
            <Button
              data={{
                text: "get inspired for your own",
                color: "dark",
                icon: false,
              }}
              />
          </div>
        </div>

        <div className="flex flex-col gap-(--gap-m) w-[350px] self-end relative top-[150px]">
          <p ref={hlTextRef} className="uppercase font-[400] duration-250 ease-in-out opacity-0">Tips, stories, and <span className="font-[800]">life on the road</span></p>
          <p className={`text-(--font-parr-size) text-(color:--color-dark)`}>Looking for ideas, advice, or just some vanlife fuel? Our blog is packed with content from the road — gear reviews, build insights, travel tips, and more.</p>
        </div>

        <div className="hidden lg:flex flex-col gap-(--gap-m) w-[250px]">
          <p className={`text-(--font-parr-size) text-(color:--color-dark)`}>Ready to start your van conversion? Got questions about our process, availability, or pricing? We’d love to hear from you.</p>
          <div>
            <Button
              data={{
                text: "Book a consultation",
                color: "dark",
                icon: false,
              }}
              />
          </div>
        </div>
      </section>
    </>
    )
  }
}

export default Inspiration