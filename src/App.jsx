import { useState } from "react";
import Layout from "./layout/Layout";

import { Routes,Route } from "react-router-dom";
import Front from "./components/Front/Front";
import Example from "./components/modal/Example";
function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Front />} />

          <Route path="/example" element={<Example />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
