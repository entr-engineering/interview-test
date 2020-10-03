import React from "react";
import Layout from "./components/Layout";
import Users from "./pages/Users";

function App() {
  return (
    <div className="App">
      <Layout>
        <Users />
      </Layout>
    </div>
  );
}

export default App;
