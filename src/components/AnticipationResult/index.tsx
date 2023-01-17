import { useContext } from "react"
import { MainPageContext } from "../../contexts/MainPageProvider"

const AnticipationResult = () => {
  const { listDays } = useContext(MainPageContext)
  console.log(listDays);


  return (
    <ul>
      {
        listDays?.map((num: string) => {
          return <li>{num}</li>
        })
      }
    </ul>
  )
}

export default AnticipationResult