import React from 'react';
import styles from "./inputLabel.module.scss";

interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {
}

function DefaultInputLabel(props: Props) {
  return (
    <label {...props} className={styles.label}/>
  );
}

export default DefaultInputLabel;