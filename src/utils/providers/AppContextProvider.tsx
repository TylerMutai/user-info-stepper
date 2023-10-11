import React, {useEffect, useMemo, useState} from "react";
import {AppContext} from "../contexts/appContext.js";
import User, {defaultUser} from "../types/user";
import UserNames from "../../components/UserSteps/UserNames";
import UserAge from "../../components/UserSteps/UserAge";
import UserDataView from "../../components/UserSteps/UserDataView";

interface Props {
  children: React.ReactElement | React.ReactElement[]
}

function AppContextProvider({children}: Props) {
  const [showModal, setShowModal] = useState(false);
  const [nextButtonEnabled, setNextButtonEnabled] = useState(false);
  const [previousButtonEnabled, setPreviousButtonEnabled] = useState(false);
  const [user, setUser] = useState<User>(defaultUser);
  const [currentStep, setCurrentStep] = useState(0);
  const steps: React.ReactElement[] = useMemo(() => [
    <UserNames/>,
    <UserAge/>,
    <UserDataView/>
  ], [])

  useEffect(() => {
    if (currentStep <= 0) {
      setPreviousButtonEnabled(false);
    }
  }, [currentStep])

  return (
    <AppContext.Provider value={{
      showModal,
      setShowModal,
      nextButtonEnabled,
      setNextButtonEnabled,
      previousButtonEnabled,
      setPreviousButtonEnabled,
      user,
      setUser,
      currentStep,
      steps,
      setCurrentStep
    }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;