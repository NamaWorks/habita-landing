import { fontParSizeStyles, fontTitlesFamilyStyles, paddingSStyles } from "../../utils/styleClasses"
import Button from "../ui/Button"

const Hero = () => {
  return (
    <>
      <section id="hero-section" className={`w-screen ${paddingSStyles} bg-[url(public/assets/raw/IMG/JPG/pexels-pnw-prod-9354539.jpg)] bg-cover bg-center`}>

        <nav className="flex flex-row justify-between items-start">
          <div className="flex flex-col">
            <Button data={{text:'what we do', color:'light'}} />
            <Button data={{text:'our process', color:'light'}} />
          </div>

          <div>
            <img src="../../../public/assets/opt/logo-favicon.png" alt="habita's logo"/>
          </div>

          <div className="flex flex-col">
            <Button data={{text:'our buils', color:'light'}} />
            <Button data={{text:'vanlife blog', color:'light'}} />
          </div>
        </nav>

        <div className="flex flex-col items-start w-[75%]">
          <div className="flex flex-row w-[100%]">
          <p className={`flex-1 ${fontParSizeStyles}`}>
            At Habita, we transform ordinary vans into custom-built homes on wheels — ready to take you anywhere.
            <br/>
            Whether you're dreaming of weekend getaways or full-time vanlife, our conversions blend comfort, style, and functionality.
          </p>
          <ul className="flex-1 hidden">
            <li>/ Tailored Designs</li>
            <li>/ handcrafted with care</li>
            <li>/ built for life on the road</li>
          </ul>
          
          </div>
          <Button data={{text: 'view the gallery', color:'light'}}/>
        </div>

        <h1 className={`${fontTitlesFamilyStyles} text-[86px]/[80px] text-justify uppercase`}>
          from idea —
          {/* <br/> */}
          to open road
        </h1>

        <Button data={{text: 'start your journey today', color: 'light'}}/>

      </section>
    </>
  )
}

export default Hero