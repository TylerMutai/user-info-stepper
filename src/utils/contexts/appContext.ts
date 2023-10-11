import React, {createContext} from "react";
import User, {defaultUser} from "../types/user";

interface AppContextProps {
  showModal: boolean,
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  nextButtonEnabled: boolean,
  setNextButtonEnabled: React.Dispatch<React.SetStateAction<boolean>>
  previousButtonEnabled: boolean,
  setPreviousButtonEnabled: React.Dispatch<React.SetStateAction<boolean>>
  user: User
  setUser: React.Dispatch<React.SetStateAction<User>>
  currentStep: number
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>
  steps: React.ReactElement[]
}

const appContextDefaults: AppContextProps = {
  showModal: false,
  setShowModal: () => {
  },
  nextButtonEnabled: false,
  setNextButtonEnabled: () => {
  },
  previousButtonEnabled: false,
  setPreviousButtonEnabled: () => {
  },
  user: defaultUser,
  setUser: () => {
  },
  currentStep: 0,
  setCurrentStep: () => {
  },
  steps: []
}

const AppContext = createContext(appContextDefaults)

export {AppContext, appContextDefaults}