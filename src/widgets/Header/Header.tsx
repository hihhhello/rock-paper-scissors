import styled from '@emotion/styled';

import { Colors } from '@/shared/utils';

export const Header = () => (
  <HeaderWrapper>
    <HeaderContent>
      <HeaderTitle>ROCK-PAPER-SCISSORS</HeaderTitle>

      <HeaderAccountLink href="https://github.com/hihhhello" target="_blank">
        by @hihhhello
      </HeaderAccountLink>
    </HeaderContent>
  </HeaderWrapper>
);

const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 8px;
`;

const HeaderTitle = styled.h1`
  margin: 0;
`;

const HeaderAccountLink = styled.a`
  color: ${Colors.BLACK};
`;
