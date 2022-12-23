import { Component, ReactComponentElement, ReactNode } from 'react';
import classes from './logistics-item.module.css';

interface Props {
  children: ReactNode;
  icon: any;
}
function LogisticsItem({ children, icon }: Props) {
  const Icon = icon;

  return (
    <li className={classes.item}>
      <span className={classes.icon}>
        <Icon />
      </span>
      <span className={classes.content}>{children}</span>
    </li>
  );
}

export default LogisticsItem;
