import { IChildren } from "../../contexts/MainPageProvider"

const Label = ({ children }: IChildren) => {
  return (
    <label>{children}</label>
  )
}

export default Label