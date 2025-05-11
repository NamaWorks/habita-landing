import Button from "../ui/Button"

const Hero = () => {
  return (
    <>
      <section id="hero-section">
        <nav className="flex flex-row w-full">
          <div>
            <Button data={{text:'test', color:'light'}} />
            <Button data={{text:'test', color:'light'}} />
          </div>
          <div>
            <img src="../../../public/assets/opt/logo-favicon.png" alt="habita's logo"/>
          </div>
          <div>
            <Button data={{text:'test', color:'light'}} />
            <Button data={{text:'test', color:'light'}} />
          </div>
        </nav>
      </section>
    </>    
  )
}

export default Hero