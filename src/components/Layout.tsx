import React from 'react';

interface Props {
  children: JSX.Element;
}

export const Layout = ({ children }: Props) => (
  <div className="md:container md:mx-auto">{children}</div>
);
