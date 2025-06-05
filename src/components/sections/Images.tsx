import { useState } from "react";

const Images = () => {
    const [ windowWidth, setWindowWidth ] = useState<number>(window.innerWidth);
  
    window.addEventListener('resize', ()=>{
      setWindowWidth(window.innerWidth);
    });

  if(windowWidth<768){
    return (
      <>
        <section className="flex flex-col gap-(--gap-xs) p-(--padding-s) overflow-hidden md:flex-row">
          <div className="relative">
            <div className="rounded-[5px] overflow-hidden">
              <img src="https://moona.dev/wp-content/uploads/2025/06/pexels-pnw-prod-9354539.jpg" alt="image of a man in the van"/>
            </div>
            <div className="absolute top-0 w-full">
              <img src="https://moona.dev/wp-content/uploads/2025/06/Habita-favicon-mask-white@2x.png" alt="image mask" className="w-full scale-101"/>
            </div>
          </div>
  
          <div className="relative w-full">
            <div className="overflow-hidden rounded-[5px]">
              <img src="https://moona.dev/wp-content/uploads/2025/06/pexels-kampus-7476252.jpg" alt="image of a man in the van"/>
            </div>
            <div className="absolute top-[75%] w-full">
              <img src="https://moona.dev/wp-content/uploads/2025/06/Habita-favicon-mask-white@2x.png" alt="image mask" className="w-full scale-101"/>
            </div>
          </div>
        </section>
      </>
    )
  
  } else {
    return (
      <>
        <section className="flex flex-col gap-(--gap-xs) p-(--padding-s) md:flex-row md:py-(--padding-l)">
          <div className="relative w-full top-[-50px]">
            <div className="overflow-hidden rounded-[5px] flex object-cover">
              <img
                src="https://moona.dev/wp-content/uploads/2025/06/pexels-kampus-7476252.jpg"
                alt="image of a woman in the van"
                className="w-full h-full"
              />
            </div>
            <div className="absolute top-[75%] w-full">
              <img
                src="https://moona.dev/wp-content/uploads/2025/06/Habita-favicon-mask-white@2x.png"
                alt="image mask"
                className="w-full scale-101"
              />
            </div>
          </div>

          <div className="relative w-full top-[50px]">
            <div className="relative top-[45px] z-10">
              <img src="https://moona.dev/wp-content/uploads/2025/06/logo-black.png" alt="logo black" />
            </div>
            <div className=" flex overflow-hidden rounded-[5px] flex object-cover h-full">
              {/* <img src="/public/assets/raw/IMG/JPG/pexels-pnw-prod-9354908.jpg" alt="" /> */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="h-full object-cover z-0"
                style={{ pointerEvents: "none" }}
              >
                <source
                  src="https://moona.dev/wp-content/uploads/2025/06/5080872-uhd_4096_2160_25fps.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <div className="relative w-full">
            <div className="rounded-[5px] overflow-hidden">
              <img
                src="https://moona.dev/wp-content/uploads/2025/06/pexels-pnw-prod-9354539.jpg"
                alt="image of a man in the van"
              />
            </div>
            <div className="absolute top-0 w-full">
              <img
                src="https://moona.dev/wp-content/uploads/2025/06/Habita-favicon-mask-white@2x.png"
                alt="image mask"
                className="w-full scale-101"
              />
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Images