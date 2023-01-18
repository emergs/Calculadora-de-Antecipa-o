import { IChildren } from "../../contexts/MainPageProvider"
import BoxResultsStyle from "./style"

const BoxResults = ({children }: IChildren) => {
    return (
      <BoxResultsStyle>
        {children}
      </BoxResultsStyle>
    )
  }
  
  export default BoxResults