import '@/app/index.css';
import 'normalize.css';
import styled from '@emotion/styled';

import { Router } from '@/pages';
import { Colors } from '@/shared/utils';
import { Header } from '@/widgets/Header';
import { withProviders } from '@/app/providers';

const App = () => {
  return (
    <AppLayout>
      <Header />

      <Router />
    </AppLayout>
  );
};

export default withProviders(App);

const AppLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: ${Colors.SECONDARY};
`;
