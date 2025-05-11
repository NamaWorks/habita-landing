import { ButtonInterface } from "../../utils/interfaces-types"
import { buttonsCommonStyles } from "../../utils/styleClasses"

const Button = ( {data}: ButtonInterface) => {
  return (
    <button className={`${buttonsCommonStyles} ${data.color === 'light' ? 'bg-green-500' : 'bg-blue-500'}`}>
      {data.text}
    </button>
  )
}

export default Button