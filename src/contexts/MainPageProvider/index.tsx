import { createContext, ReactNode, useState } from "react"
import axios from 'axios'
import { dataTest } from "../../utils"
import { toast, Zoom } from "react-toastify"

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
  testTimeout: () => void
  testInternalServerError: () => void
  testDelay: (data: IForm) => void
  chooseNameTheButton: (event: any) => void
  openGroupButtonTest: () => void
  listDays: any
  nameButton: string
  buttonTestIsActive: boolean
}

export const MainPageContext = createContext<IMainPageContext>({} as IMainPageContext)

const MainPageProvider = ({ children }: IChildren) => {
  const [listDays, setListDays] = useState<any>([])
  const [nameButton, setNameButton] = useState<string>("")
  const [buttonTestIsActive, setButtonTestIsActive] = useState<boolean>(false)

  const getData = async (data: IForm) => {
    const values = data.days ? { ...data, days: data.days?.split(',') } : {
      amount: data.amount,
      installments: data.installments,
      mdr: data.mdr
    }

    await axios.post('https://frontend-challenge-7bu3nxh76a-uc.a.run.app', values)
      .then((response) => setListDays(response.data))
      .catch((error) => console.log(error))
  }

  const testTimeout = async () => {
    await axios.post('https://frontend-challenge-7bu3nxh76a-uc.a.run.app?timeout', dataTest)
      .then((response) => setListDays(response.data))
      .catch((error) => toast.warn('Tempo esgotado!!!  Tente novamente mais tarde', {
        position: "top-center",
        autoClose: 5000,
        transition: Zoom,
      }))
  }

  const testInternalServerError = async () => {
    await axios.post('https://frontend-challenge-7bu3nxh76a-uc.a.run.app?internalError', dataTest)
      .then((response) => setListDays(response.data))
      .catch((error) => toast.error('Erro no servidor !! Tente novamente mais tarde', {
        position: "top-center",
        autoClose: 5000,
        transition: Zoom,
      }))
  }

  const testDelay = async (data: IForm) => {
    const values = data.days ? { ...data, days: data.days?.split(',') } : {
      amount: data.amount,
      installments: data.installments,
      mdr: data.mdr
    }

    const response = await toast.promise(
      axios.post('https://frontend-challenge-7bu3nxh76a-uc.a.run.app?delay=5000', values),
      {
        pending: {
          render() {
            return "Carregando..."
          },
          transition: Zoom,
          position: "top-center",
          autoClose: 5000,
        },
      }
    )

    setListDays(response.data)
  }

  const chooseNameTheButton = (event: any) => {
    if (event.textContent == 'Simular') {
      setNameButton(event.textContent)
    }
    setNameButton(event.textContent)
  }

  const openGroupButtonTest = () => {
    buttonTestIsActive == false ? setButtonTestIsActive(true) : setButtonTestIsActive(false);
  }

  return (
    <MainPageContext.Provider value={{ getData, testDelay, testInternalServerError, testTimeout, chooseNameTheButton, openGroupButtonTest, buttonTestIsActive, listDays, nameButton }}>
      {children}
    </MainPageContext.Provider>
  )
}

export default MainPageProvider