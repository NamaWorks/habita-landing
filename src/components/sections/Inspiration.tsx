import { useEffect, useRef } from "react";
import Button from "../ui/Button";
import { splitTextIntoCharacters } from "../../utils/functions/ui_fn/splitTextIntoCharacters";

const Inspiration = () => {

  const hlTextRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if(hlTextRef.current){
      splitTextIntoCharacters(hlTextRef.current);
    }
  },[]);

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

      <p ref={hlTextRef} className="uppercase font-[400]">Tips, stories, and <span className="font-[800]">life on the road</span></p>

      <p className={`flex-1 text-(--font-parr-size) text-(color:--color-dark)`}>
        Looking for ideas, advice, or just some vanlife fuel? Our blog is packed with content from the road — gear reviews, build insights, travel tips, and more.
      </p>
    </section>
    </>
  );
}

export default Inspiration