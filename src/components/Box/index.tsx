import { ReactNode } from "react"
import { BoxStyle } from "./style"

interface IChildrenBox {
  children: ReactNode
  color?: string | undefined
  property?: string | undefined
}

const Box = ({ property, color, children }: IChildrenBox) => {
  return (
    <BoxStyle color={color} property={property}>
      {children}
    </BoxStyle>
  )
}

export default Box