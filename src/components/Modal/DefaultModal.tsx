import React, {useContext} from 'react';
import styles from './defaultModal.module.scss';
import {AppContext} from "../../utils/contexts/appContext";

interface Props {
  children: React.ReactElement | React.ReactElement[]
}

function DefaultModal({children}: Props) {
  const {showModal} = useContext(AppContext);
  return (
    <>
      <div className={`${styles.modal_backdrop} ${showModal ? styles.show : ""}`}/>
      <div className={`${styles.modal} ${showModal ? styles.show : ""}`}>
        {children}
      </div>
    </>

  );
}

export default DefaultModal;