import { useContext } from "react"
import { MainPageContext } from "../../contexts/MainPageProvider"

const AnticipationResult = () => {
  const { listDays } = useContext(MainPageContext)
  const valuesAnticipation = []

  for (const chave in listDays) {
    if (listDays.hasOwnProperty(chave)) {
      valuesAnticipation.push(<li>${chave}: ${listDays[chave]}</li>);
    }
  }

  return (
    <ul>
      {
        valuesAnticipation?.map((elem) => {
          return <li key={elem.key}>{elem}</li>
        })
      }
    </ul>
  )
}

export default AnticipationResult