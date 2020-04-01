import React, { Suspense } from "react";
import Header from "./components/Header";

import Wrapper from "./views/Wrapper";
function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Header />
        <Wrapper />
      </div>
    </Suspense>
  );
}

export default App;
