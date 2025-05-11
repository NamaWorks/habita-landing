import { ButtonInterface } from "../../utils/interfaces-types"

const Button = ( {data}: ButtonInterface) => {
  return (
    <button>
      {data.text}
    </button>
  )
}

export default Button