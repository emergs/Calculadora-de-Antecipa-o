import Box from "../Box"
import Label from "../Label"
import * as yup from 'yup'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from "../Input/style";
import { IForm, MainPageContext } from "../../contexts/MainPageProvider";
import { useContext, useState } from "react";
import FormStyle from "./style";
import HeaderForm from "../HeaderForm";
import TestButtonGroup from "../TestButtonGroup";

yup.setLocale({
  number: {
    min: 'O numero deve ser maior ou igual a ${min}',
    max: 'O numero deve ser menor ou igual a ${max}'
  }
})

const schema = yup.object().shape({
  amount: yup.number().typeError("Digite um numero válido").required().min(1000),
  installments: yup.number().typeError("Digite um numero válido").required("Preenchimento Obrigatorio").max(12).min(1),
  mdr: yup.number().typeError("Digite um numero válido").required("Preenchimento Obrigatorio").max(99),
  days: yup.string()
});

const Form = () => {

  const {
    getData,
    testDelay,
    chooseNameTheButton,
    nameButton,
    buttonTestIsActive
  } = useContext(MainPageContext)

  const { register, handleSubmit, formState: { errors } } = useForm<IForm>({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: IForm) => nameButton == 'Simular' ? getData(data) : testDelay(data);


  return (
    <FormStyle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <HeaderForm />
        <Box>
          <Label>Informe o valor da venda</Label>
          <Input type="number" {...register("amount")} placeholder="Ex: 1000" />
          <p>{errors.amount?.message}</p>
        </Box>
        <Box>
          <Label>Em quantas parcelas</Label>
          <Input type="number" {...register("installments")} placeholder="Ex: 10" />
          <span>Máximo 12 parcelas</span>
          <p>{errors.installments?.message}</p>
        </Box>
        <Box>
          <Label>Informe o percentual de MDR</Label>
          <Input type="number" {...register("mdr")} placeholder="Ex: 10" />
          <p>{errors.mdr?.message}</p>
        </Box>
        <Box>
          <Label>Informe o período (em dias separado por vírgula)</Label>
          <Input {...register("days")} placeholder="Ex: 10,20,30" />
          <p>{errors.days?.message}</p>
        </Box>
        {
          buttonTestIsActive ?
            <TestButtonGroup />
            :
            <button onClick={(e) => chooseNameTheButton(e.target)} >Simular</button>
        }
      </form>
    </FormStyle>
  )
}

export default Form