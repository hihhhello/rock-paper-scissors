/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { ChangeEvent, FormEvent, useCallback } from 'react';
import styled from '@emotion/styled';
import { useEvent, useStore } from 'effector-react';

import { Button } from '@/shared/ui';
import { Column } from '@/shared/ui/Column';
import { RPSInterpolation } from '@/shared/utils';
import { userModel } from '@/entities/user';

interface SetUserUsernameFormProps {
  css?: RPSInterpolation;
}

export const SetUserUsernameForm = ({
  css: wrapperCss,
}: SetUserUsernameFormProps) => {
  const usernameInput = useStore(userModel.$usernameInput);
  const handleUsernameInputChanged = useEvent(userModel.usernameInputChanged);

  const handleSubmitUserUsername = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      userModel.userUsernameSet(usernameInput);
      handleUsernameInputChanged('');
    },
    [handleUsernameInputChanged, usernameInput],
  );

  const handleUsernameInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) =>
      handleUsernameInputChanged(event.target.value),
    [handleUsernameInputChanged],
  );

  return (
    <SetUserUsernameFormStyled
      css={wrapperCss}
      onSubmit={handleSubmitUserUsername}
    >
      <Column
        css={{
          marginBottom: 32,
        }}
      >
        <UsernameInputLabel htmlFor="username">
          Add username to start a game:
        </UsernameInputLabel>

        <UsernameInput
          id="username"
          onChange={handleUsernameInputChange}
          value={usernameInput}
        />
      </Column>

      <div>
        <Button type="submit">Let&apos;s Go!</Button>
      </div>
    </SetUserUsernameFormStyled>
  );
};

const UsernameInputLabel = styled.label`
  font-size: 24px;
  margin-bottom: 8px;
`;

const UsernameInput = styled.input`
  width: 100%;
  font-size: 20px;
  outline: none;
  padding: 8px;
  border: 0;
`;

const SetUserUsernameFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
