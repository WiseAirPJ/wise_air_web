import { Navigate, Route, Routes } from "react-router-dom";
import { ADMIN_PATH, allRoutes } from "./routes/routes";
import ProtectedRoute from "./routes/ProtectedRoute";
import AdminRoute from "./routes/AdminRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={allRoutes.MAIN_PAGE.path} replace />} />
      {Object.values(allRoutes).map(route => {
        const isLogin = route.path === "/login";
        const isAdmin = route.path.startsWith(ADMIN_PATH);

        const element = isLogin ? (
          route.element
        ) : isAdmin ? (
          <AdminRoute>{route.element}</AdminRoute>
        ) : (
          <ProtectedRoute>{route.element}</ProtectedRoute>
        );

        return <Route key={route.path} path={route.path} element={element} />;
      })}
    </Routes>
  );
}

export default App;
