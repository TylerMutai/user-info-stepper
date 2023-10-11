import React from 'react';
import styles from './defaultModalFooter.module.scss';

interface Props {
  children: React.ReactElement | React.ReactElement[]
}

function DefaultModalFooter({children}: Props) {
  return (
    <div className={styles.modal_footer}>
      {children}
    </div>
  );
}

export default DefaultModalFooter;