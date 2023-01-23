import AnticipationResult from "../AnticipationResult"
import BoxResults from "../BoxResults"
import Form from "../Form"
import { Content } from "./style"

const Container = () => {
  return (
    <>
      <Content>
        <Form />
        <BoxResults >
          <h1>Voce recebera</h1>
          <AnticipationResult />
        </BoxResults>
      </Content>
    </>
  )
}

export default Container