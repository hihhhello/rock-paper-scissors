import styled from '@emotion/styled';

import { SetUserUsernameForm } from '@/features/SetUserUsernameForm';

export const LoginPage = () => {
  return (
    <LoginPageWrapper>
      <SetUserUsernameForm />
    </LoginPageWrapper>
  );
};

const LoginPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
