import React, {forwardRef} from 'react';
import styles from './defaultInput.module.scss';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
}

const DefaultInput = forwardRef<HTMLInputElement, Props>(
  (props, ref) => {
    return (
      <input {...props} className={styles.input} ref={ref}/>
    );
  })

export default DefaultInput;