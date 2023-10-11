import React from 'react';
import styles from './defaultInput.module.scss';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {

}

function DefaultInput(props: Props) {
  return (
    <input {...props} className={styles.input}/>
  );
}

export default DefaultInput;