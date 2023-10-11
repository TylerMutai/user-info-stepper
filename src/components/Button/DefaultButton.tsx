import React from 'react';
import styles from './defaultButton.module.scss';

interface AdditionalButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonvariant?: "primary" | "secondary" | "danger"
}

function DefaultButton(props: AdditionalButtonProps) {
  return (
    <button {...props} className={`${styles.button} ${styles[props.buttonvariant || "primary"]}`}/>
  );
}

export default DefaultButton;
