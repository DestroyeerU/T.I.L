import React from 'react';

import { Container, Name } from './styles';

interface OwnProps {
  name: string;
  to: string;
  icon: any;
}

type ItemProps = OwnProps

const Item: React.FC<ItemProps> = ({ name, icon: Icon, to }) => {
  return (
    <Container to={to}>
      <Name>{name}</Name>
      <Icon></Icon>
    </Container>
  )
}

export default Item;
