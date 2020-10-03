import React from "react";
import Layout from "./components/Layout";
import Users from "./pages/Users";
import {AppStateProvider} from "./context/AppContext";

function App() {
  return (
    <div className="App">
      <AppStateProvider>
        <Layout>
          <Users />
        </Layout>
      </AppStateProvider>
    </div>
  );
}

export default App;
