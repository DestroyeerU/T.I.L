import styled from 'styled-components';
import { Link } from 'react-router-dom';

import colors from '../../../styles/colors'

export const Container = styled(Link)`
  display: flex;
  align-items: center;

  width: 100%;
  padding: 12px 0px;

  cursor: pointer;
  transition: margin .4s;

  &:first-child {
    margin-top: 50px;
  }

  @media (min-width: 768px) {
    &:hover{
      background: ${colors.terteary}
    }
  }

  > svg {
    margin-left: 9px;
    margin-right: 20px;

    font-size: 28px;
    font-size: 1.75rem;
    color: #fff;

    @media (max-width: 768px) {
      &:hover {
        color: #7159c1;
      }
    }
  }
`;

export const Name = styled.span`
  font-size: 24px;
  font-size: 1.5rem;
  color: #fff;
`;