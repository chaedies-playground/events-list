import Link from 'next/link';
import React, { ReactNode } from 'react';
import classes from './button.module.css';

interface Props {
  children: ReactNode;
  link: string;
}

export default function Button({ children, link }: Props) {
  return (
    <Link href={link} className={classes.btn}>
      {children}
    </Link>
  );
}
