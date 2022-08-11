import React from 'react';
import styles from './csszip/spinner.module.css';

const Loading = () => {
  return (
<div className={styles.bg}>
  <p className={styles.Loading}>Loading</p>
  <img className={styles.spinner} src={process.env.PUBLIC_URL +"/spinner.gif"} alt="로딩중" />
</div>)
};

export {Loading};