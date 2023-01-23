import { useContext } from "react"
import { AiFillSetting } from "react-icons/ai"
import { MainPageContext } from "../../contexts/MainPageProvider"
import HeaderFormStyle from "./style"

const HeaderForm = () => {

  const { openGroupButtonTest } = useContext(MainPageContext)

  return (
    <HeaderFormStyle>
      <button type="button" onClick={() => openGroupButtonTest()}><AiFillSetting /></button>
      <h1>Simule sua Antecipação</h1>
    </HeaderFormStyle>
  )
}

export default HeaderForm