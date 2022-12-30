import { PropsWithChildren } from 'react';
import classes from './ErrorAlert.module.css';

function ErrorAlert({ children }: PropsWithChildren) {
  return <div className={classes.alert}>{children}</div>;
}

export default ErrorAlert;
