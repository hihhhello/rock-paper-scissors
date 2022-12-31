/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import styled from '@emotion/styled';
import PersonIcon from '@mui/icons-material/Person';

import { RPSElement } from '@/shared/types/element';
import { Column } from '@/shared/ui/Column';
import { Colors } from '@/shared/utils';

interface OpponentPreviewProps {
  username: string;
  element: RPSElement | null;
  hasChose?: boolean;
}

export const OpponentPreview = ({
  element,
  username,
  hasChose,
}: OpponentPreviewProps) => {
  return (
    <Column>
      <Column css={{ marginBottom: 32 }}>
        <PersonIcon
          fontSize="large"
          sx={{ fontSize: 120, color: Colors.PRIMARY }}
        />

        <OpponentUsername>{username}</OpponentUsername>
      </Column>

      <OpponentElement>
        {element && hasChose
          ? `has chose ${element}`
          : !element && hasChose
          ? 'waiting for your choice'
          : `has not chose element yet`}
      </OpponentElement>
    </Column>
  );
};

const OpponentUsername = styled.span`
  font-weight: 500;
  font-size: 18px;
`;

const OpponentElement = styled.span``;
