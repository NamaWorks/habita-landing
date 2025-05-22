const Images = () => {
  return (
    <>
      <section className="flex flex-col gap-(--gap-xs) p-(--padding-s) overflow-hidden">
        <div className="relative">
          <div className="rounded-t-[5px] overflow-hidden">
            <img src="/public/assets/raw/IMG/JPG/pexels-pnw-prod-9354539.jpg" alt="image of a man in the van"/>
          </div>
          <div className="absolute top-0">
            <img src="/public/assets/raw/IMG/SVG/Habita-favicon-mask-white.svg" alt="image mask"/>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <img src="/public/assets/raw/IMG/JPG/pexels-kampus-7476252.jpg" alt="image of a man in the van"/>
          </div>
          <div className="absolute top-[75%]">
            <img src="/public/assets/raw/IMG/SVG/Habita-favicon-mask-white.svg" alt="image mask"/>
          </div>
        </div>
      </section>
    </>
  )
}

export default Images