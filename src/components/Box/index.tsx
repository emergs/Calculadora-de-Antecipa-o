import { ReactNode } from "react"
import { IChildren } from "../../contexts/MainPageProvider"
import { BoxStyle } from "./style"

const Box = ({ children }: IChildren) => {
  return (
    <BoxStyle>
      {children}
    </BoxStyle>
  )
}

export default Box