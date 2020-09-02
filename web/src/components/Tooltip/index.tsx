import React from 'react';

import { Container } from './styles';

interface TooltipsProps {
  title: string;
}

const Tooltip: React.FC<TooltipsProps> = ({ title, children}) => {
  return (
  <Container>
    {children}
    <span>{title}</span>
  </Container>
  );
}

export default Tooltip;
