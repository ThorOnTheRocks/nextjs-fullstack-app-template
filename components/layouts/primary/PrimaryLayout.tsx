import Head from 'next/head';
import styles from './PrimaryLayout.module.css';

export interface IPrimaryLayout {
  children: JSX.Element | JSX.Element[];
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }): JSX.Element => {
  return (
    <>
      <Head>
        <title>Primary Layout Example</title>
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default PrimaryLayout;
