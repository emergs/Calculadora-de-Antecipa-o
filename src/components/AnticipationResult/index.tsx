import { useContext } from "react"
import { MainPageContext } from "../../contexts/MainPageProvider"

const AnticipationResult = () => {
  const { listDays } = useContext(MainPageContext)

  // let valuesAnticipation = Object.keys(listDays);

  // console.log(valuesAnticipation); // [4,93,10]

  for (const chave in listDays) {
    if (listDays.hasOwnProperty(chave)) {
      console.log(`${chave}: ${listDays[chave]}`);
    }
  }

  return (
    <ul>
      {/* {
        valuesAnticipation?.map((elem) => {
          return <li>{elem}</li>
        })
      } */}
      <li>jjj</li>
    </ul>
  )
}

export default AnticipationResult