import React from "react";
import Wrapper from "./views/Wrapper";
import Header from "./components/Header";
function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <Wrapper />
    </div>
  );
}

export default App;
