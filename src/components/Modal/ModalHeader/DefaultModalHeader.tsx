import React from 'react';
import styles from './defaultModalHeader.module.scss';

interface Props {
  children: React.ReactElement | React.ReactElement[]
}

function DefaultModalHeader({children}: Props) {
  return (
    <div className={styles.modal_header}>
      {children}
    </div>
  );
}

export default DefaultModalHeader;