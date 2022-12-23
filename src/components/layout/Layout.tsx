import React, { PropsWithChildren } from 'react';
import MainHeader from './MainHeader';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
    </>
  );
}
