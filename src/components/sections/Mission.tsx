import { missionImagesStyles } from "../../utils/styleClasses"

const Mission = () => {
  return (
    <section className={`flex flex-col items-center`}>
      <div className={`${missionImagesStyles}`}>
        <img src="./../../../public/assets/raw/IMG/GIF/Habita-Gif-Text-01.gif" alt="GIF with several images of camper vans" />
      </div>

      <div>
        <h2 className={`font-(family-name:--font-family-main) text-[48px]/[40px] text-center uppercase text-(color:--color-dark) font-[300]`}>
          we transform ordinary vans into custom-built homes on wheels ready to take you anywhere
        </h2>
      </div>

      <div className={`${missionImagesStyles}`}>
        <img src="./../../../public/assets/raw/IMG/GIF/Habita-Gif-Text-02.gif" alt="GIF with several images of camper vans" />
      </div>
    </section>
  )
}

export default Mission