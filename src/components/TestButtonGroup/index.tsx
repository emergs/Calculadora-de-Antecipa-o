import { useContext } from "react"
import { MainPageContext } from "../../contexts/MainPageProvider"
import TestButtonGroupStyle from "./style"

const TestButtonGroup = () => {

  const { chooseNameTheButton, testInternalServerError, testTimeout } = useContext(MainPageContext)

  return (
    <TestButtonGroupStyle>
      <button type="button" onClick={() => testTimeout()}>Timeout</button>
      <button type="button" onClick={() => testInternalServerError()}>Internal Server Error</button>
      <button onClick={(e) => chooseNameTheButton(e.target)}>Delay</button>
    </TestButtonGroupStyle>
  )
}

export default TestButtonGroup