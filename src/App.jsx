import { BrowserRouter, Route, Routes, useRoutes } from "react-router-dom";

import { routeList } from "./Route/routes";

const App = () => {
  const element = useRoutes(routeList);

  return element;
};

export default App;
