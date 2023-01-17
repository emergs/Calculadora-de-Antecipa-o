import AnticipationResult from "../AnticipationResult"
import Box from "../Box"
import Input from "../Input"
import Label from "../Label"
import { Content } from "./style"

const Container = () => {
  return (
    <Content>
      <h1>Simule sua Antecipação</h1>
      <Box>
        <Label>Informe o valor da venda</Label>
        <Input />
      </Box>
      <Box>
        <Label>Em quantas parcelas</Label>
        <Input />
        <span>Máximo 12 parcelas</span>
      </Box>
      <Box>
        <Label>Informe o percentual de MDR</Label>
        <Input />
      </Box>
      <Box color="red" property="40%">
        <h1>Voce recebera</h1>
        <AnticipationResult />
      </Box>
    </Content>
  )
}

export default Container