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
  saleValue: yup.string().required("Preenchimento Obrigatorio"),
  installments: yup.string().required("Preenchimento Obrigatorio"),
  mdrPercentage: yup.string().required("Preenchimento Obrigatorio"),
  period: yup.string()
}).required();


const Form = () => {
  const { getData } = useContext(MainPageContext)
  const { register, handleSubmit, formState: { errors } } = useForm<IForm>({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: IForm) => getData(data);


  return (
    <FormStyle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Simule sua Antecipação</h1>
        <Box>
          <Label>Informe o valor da venda</Label>
          <Input {...register("saleValue")} placeholder="Ex: 1000" />
          <p>{errors.saleValue?.message}</p>
        </Box>
        <Box>
          <Label>Em quantas parcelas</Label>
          <Input {...register("installments")} placeholder="Ex: 10" />
          <span>Máximo 12 parcelas</span>
          <p>{errors.installments?.message}</p>
        </Box>
        <Box>
          <Label>Informe o percentual de MDR</Label>
          <Input {...register("mdrPercentage")} placeholder="Ex: 10" />
          <p>{errors.mdrPercentage?.message}</p>
        </Box>
        <Box>
          <Label>Informe o período</Label>
          <Input {...register("period")} placeholder="Ex: 10" />
          <p>{errors.period?.message}</p>
        </Box>
        <button>Simular</button>
      </form>
    </FormStyle>
  )
}

export default Form