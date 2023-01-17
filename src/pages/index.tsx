import { useContext, useEffect } from "react"
import Container from "../components/Container"
import { MainPageContext } from "../contexts/MainPageProvider"

const MainPage = () => {

  const { getData } = useContext(MainPageContext)

  return (
    <Container />
  )
}

export default MainPage