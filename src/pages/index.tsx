import { useContext, useEffect } from "react"
import Container from "../components/Container"
import { MainPageContext } from "../contexts/MainPageProvider"

const MainPage = () => {

  const { getData } = useContext(MainPageContext)

  useEffect(() => {
    getData()
  }, [])

  return (
    <Container />
  )
}

export default MainPage