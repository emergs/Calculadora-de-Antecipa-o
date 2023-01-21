import Box from "../Box"
import Label from "../Label"
import * as yup from 'yup'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from "../Input/style";
import { IForm, MainPageContext } from "../../contexts/MainPageProvider";
import { useContext } from "react";
import FormStyle from "./style";

const schema = yup.object({
  amount: yup.string().required("Preenchimento Obrigatorio"),
  installments: yup.string().required("Preenchimento Obrigatorio"),
  mdr: yup.string().required("Preenchimento Obrigatorio"),
  days: yup.string()
});


const Form = () => {
  const { getData } = useContext(MainPageContext)
  const { register, handleSubmit, formState: { errors } } = useForm<IForm>({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: IForm) => getData(data);


  return (
    <FormStyle>
      <form onChange={handleSubmit(onSubmit)}>
        <h1>Simule sua Antecipação</h1>
        <Box>
          <Label>Informe o valor da venda</Label>
          <Input {...register("amount")} placeholder="Ex: 1000" />
          <p>{errors.amount?.message}</p>
        </Box>
        <Box>
          <Label>Em quantas parcelas</Label>
          <Input {...register("installments")} placeholder="Ex: 10" />
          <span>Máximo 12 parcelas</span>
          <p>{errors.installments?.message}</p>
        </Box>
        <Box>
          <Label>Informe o percentual de MDR</Label>
          <Input {...register("mdr")} placeholder="Ex: 10" />
          <p>{errors.mdr?.message}</p>
        </Box>
        <Box>
          <Label>Informe o período (em dias separado por vírgula)</Label>
          <Input {...register("days")} placeholder="Ex: 10,20,30" />
          <p>{errors.days?.message}</p>
        </Box>
      </form>
    </FormStyle>
  )
}

export default Form