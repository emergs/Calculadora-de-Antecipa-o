import { useContext } from "react"
import { MainPageContext } from "../../contexts/MainPageProvider"
import { Description, DiscountValue, ListGroup, ListItem } from "./style"

const AnticipationResult = () => {
  const { listDays } = useContext(MainPageContext)
  const valuesAnticipation = []

  for (const chave in listDays) {
    if (listDays.hasOwnProperty(chave)) {
      chave == "1" ?
        valuesAnticipation.push([`Amanhã:  `, `R$ ${listDays[chave]},00`])
        :
        valuesAnticipation.push([`Em ${chave} dias:  `, `R$ ${listDays[chave]},00`])
    }
  }

  return (
    <ListGroup>
      {
        valuesAnticipation?.map((elem, index) => {
          return <ListItem key={index}>
            <Description>{elem[0]}</Description>
            <DiscountValue>{elem[1]}</DiscountValue>
          </ListItem>
        })
      }
    </ListGroup>
  )
}

export default AnticipationResult