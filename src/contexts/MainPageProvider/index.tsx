import { createContext, ReactNode, useState } from "react"
import axios from 'axios'

export interface IForm {
  amount: number
  installments: number
  mdr: number
  days?: string
}

export interface IChildren {
  children: ReactNode
}

interface IMainPageContext {
  getData: (data: IForm) => void
  listDays: any
}

export const MainPageContext = createContext<IMainPageContext>({} as IMainPageContext)

const MainPageProvider = ({ children }: IChildren) => {
  const [listDays, setListDays] = useState<any>([])

  const getData = async (data: IForm) => {

    const valuesForm = data.days ? { ...data, days: data.days?.split(',') } : {
      amount: data.amount,
      installments: data.installments,
      mdr: data.mdr
    }

    await axios.post('https://frontend-challenge-7bu3nxh76a-uc.a.run.app', valuesForm)
      .then((response) => setListDays(response.data))
      .catch((error) => console.log(error))
  }

  return (
    <MainPageContext.Provider value={{ getData, listDays }}>
      {children}
    </MainPageContext.Provider>
  )
}

export default MainPageProvider