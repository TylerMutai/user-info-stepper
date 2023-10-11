import React from 'react';
import styles from "./inputGroup.module.scss";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
}

function DefaultInputGroup(props: Props) {
  return (
    <div {...props} className={styles.group}/>
  );
}

export default DefaultInputGroup;