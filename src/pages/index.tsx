import React, {useCallback, useContext} from 'react';
import styles from "./index.module.scss";
import UserSteps from "../components/UserSteps/UserSteps";
import DefaultButton from "../components/Button/DefaultButton";
import {AppContext} from "../utils/contexts/appContext";

function Index() {
  const {setShowModal} = useContext(AppContext);
  const handleShowModal = useCallback(() => {
    setShowModal(true);
  }, [setShowModal])
  return (
    <div className={styles.main}>
      <UserSteps/>
      <DefaultButton onClick={handleShowModal}>
        Show user stepper modal
      </DefaultButton>
    </div>
  );
}

export default Index;