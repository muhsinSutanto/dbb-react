import Home from "../pages/Home";
import Menu from "../pages/Menu";
import MenuDetail from "../pages/MenuDetail";
import Login from "../pages/Login";
import ProtectedRoute from "./ProtectedRoute";
import AddMenu from "../pages/AddMenu";

export const routeList = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/menu",
    element: (
      <ProtectedRoute>
        <Menu />
      </ProtectedRoute>
    ),
  },
  {
    path: "/menu/:id",
    element: (
      <ProtectedRoute>
        <MenuDetail />
      </ProtectedRoute>
    ),
  },
  {
    path: "/add-menu",
    element: (
      <ProtectedRoute>
        <AddMenu />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
];
