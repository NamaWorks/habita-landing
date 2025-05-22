import Button from "../ui/Button"

const Footer = () => {
  return (
    <>
      <footer className={`bg-[url(public/assets/raw/IMG/JPG/luke-porter-dVHLuOe1Nwk-unsplash.jpg)] w-screen h-[100svh] bg-cover bg-center min-h-screen flex flex-col justify-between px-(--padding-xs) pb-(--padding-xs)`}>
        <div className={`flex flex-col gap-(--gap-ml)`}>
          <div>
            <Button data={{text: 'get in touch', color: 'light', icon: false}}/>
          </div>

          <h2 className={`font-(family-name:--font-family-main) text-[48px]/[40px] text-left uppercase text-(color:--color-white) font-[300]`}>
            More than a build
          </h2>
          <h2 className={`font-(family-name:--font-family-main) text-[48px]/[40px] text-right uppercase text-(color:--color-white) font-[300]`}>
            It's your way of life
          </h2>

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