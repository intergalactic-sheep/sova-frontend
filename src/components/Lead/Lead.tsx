import type { ReactNode } from 'react';
import styles from './Lead.module.css';

type LeadProps = {
  title: ReactNode;
  tag?: 'h1' | 'p';
  variant?: 'default' | 'light';
};
export const Lead = ({
  title,
  tag = 'p',
  variant = 'default',
}: LeadProps) => {
  const Tag = tag;

  return (
    <section
      className={`${styles.lead} ${
        variant === 'light' ? styles.leadLight : ''
      }`}
    >
      <Tag className={styles.title}>{title}</Tag>

      <a
        href="https://dzen.ru/id/67102d4fc6ec2e283cd4d477?donate=true"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.button}
      >
        Поддержать издание
      </a>
    </section>
  );
};
