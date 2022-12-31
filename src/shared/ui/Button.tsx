import styled from '@emotion/styled';

import { Colors } from '@/shared/utils';

interface ButtonProps {
  isDisabled?: boolean;
}

export const Button = styled.button<ButtonProps>`
  border: 3px solid ${Colors.BLACK};
  background-color: ${Colors.PRIMARY};
  color: ${Colors.BLACK};
  font-size: 24px;
  padding: 4px 16px;
  text-transform: uppercase;
  font-weight: 500;
  min-width: 150px;

  ${({ isDisabled }) =>
    isDisabled &&
    `
    filter: grayscale(100%);
  `}
`;
