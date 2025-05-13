import { ButtonInterface } from "../../utils/interfaces-types"
import { buttonsCommonStyles } from "../../utils/styleClasses"

const Button = ( {data}: ButtonInterface) => {
  return (
    <button className={`${buttonsCommonStyles} ${data.color === 'light' ? 'bg-[#FFF]' : 'bg-[#0D1C10]'} ${data.icon === true ? 'px-[4px] py-[0]' : 'px-[4px] py-[0]'} rounded-[5px] uppercase font-[500]`}>
      {
        data.icon &&
        <>
          <div>
            <img src="./../../../public/assets/opt/logo-favicon.png" alt="icon" />
          </div>
        </>
      }
      <p>{data.text}</p>
    </button>
  )
}

export default Button