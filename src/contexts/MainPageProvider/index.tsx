import { createContext, ReactNode } from "react"

export interface IChildren {
  children: ReactNode
}

export const MainPageContext = createContext({})

const MainPageProvider = ({ children }: IChildren) => {
  return (
    <MainPageContext.Provider value={{}}>
      {children}
    </MainPageContext.Provider>
  )
}

export default MainPageProvider