import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { LeftPane, RightPane, Main, Navbar, List, Container, AgeFilter } from './components';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: 1000 * 60 * 30, // 30 minutes
      staleTime:  1000 * 60 * 30, // 30 minutes
      refetchOnWindowFocus: false
    }
  }
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Navbar />
        <Main>
          <h2>Users</h2>
          <Container>
            <LeftPane>
              <AgeFilter />
            </LeftPane>
            <RightPane>
              <List />
            </RightPane>
          </Container>
        </Main>
      </div>
    </QueryClientProvider>
  );
}

export default App;
