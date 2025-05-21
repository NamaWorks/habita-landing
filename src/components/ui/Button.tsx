import { ButtonInterface } from "../../utils/interfaces-types"

const Button = ( {data}: ButtonInterface) => {
  return (
    <button className={`${data.color === 'light' ? 'bg-(--color-white)' : 'bg-(--color-dark)'} ${data.icon === true ? 'px-[4px] py-[0]' : 'px-[4px] py-[0]'} rounded-[5px] uppercase font-(--font-weight-btn) ${data.color === 'light' ? 'text-(--color-dark)' : 'text-(--color-white)'}`}>
      {
        data.icon &&
        <>
          <div>
            <img src="./../../../public/assets/opt/logo-favicon.png" alt="icon" />
          </div>
        </>
      }
      <p className={`font-[300] text-s`}>{data.text}</p>
    </button>
  )
}

export default Button