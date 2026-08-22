import type { PropsWithChildren } from 'react';
import styles from './Main.module.css'

export const Main = ({ children }: PropsWithChildren) => {
  return (
    <main className={styles.main}>
      {children}
    </main>
  )}