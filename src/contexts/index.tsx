import MainPageProvider, { IChildren } from "./MainPageProvider"

const Provider = ({ children }: IChildren) => {
  return (
    <MainPageProvider>
      {children}
    </MainPageProvider>
  )
}

export default Provider