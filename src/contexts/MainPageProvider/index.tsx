import { createContext, ReactNode, useState } from "react"
import axios from 'axios'

export interface IForm {
  saleValue: number
  installments: number
  mdrPercentage: number
  period?: string
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
    await axios.post('https://frontend-challenge-7bu3nxh76a-uc.a.run.app', {
      amount: data.saleValue,
      installments: data.installments,
      mdr: data.mdrPercentage,
      days: data.period == undefined ? undefined : data.period.split(',')
    })
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