// import React from "react";
import { Routes, Route } from "react-router-dom";
import { AdminRoute, IPramsRoute, PublicRoute } from "./routes";

function App(): JSX.Element {
  return (
    <Routes>
      {PublicRoute.map((r: IPramsRoute, index: number) => (
        <Route key={index} path={r.path} element={r.element} />
      ))}
      {AdminRoute.map((r: IPramsRoute, index: number) => (
        <Route key={index} path={r.path} element={r.element} />
      ))}
    </Routes>
  );
}

export default App;
