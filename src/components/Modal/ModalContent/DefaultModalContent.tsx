import React from 'react';
import styles from './defaultModalContent.module.scss';

interface Props {
  children: React.ReactElement | React.ReactElement[] | null
}

function DefaultModalContent({children}: Props) {
  return (
    <div className={styles.modal_content}>
      {children}
    </div>
  );
}

export default DefaultModalContent;