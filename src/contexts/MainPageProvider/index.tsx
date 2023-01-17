import { createContext, ReactNode, useState } from "react"
import axios from 'axios'

export interface IChildren {
  children: ReactNode
}

interface IMainPageContext {
  getData: () => void
  listDays: any
}

export const MainPageContext = createContext<IMainPageContext>({} as IMainPageContext)

const MainPageProvider = ({ children }: IChildren) => {
  const [listDays, setListDays] = useState<any>([])

  const getData = async () => {
    await axios.post('https://frontend-challenge-7bu3nxh76a-uc.a.run.app', {
      amount: 1500,
      installments: 3,
      mdr: 10
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