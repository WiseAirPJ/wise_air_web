import { Navigate, Route, Routes } from "react-router-dom";
import { ADMIN_PATH, allRoutes } from "./routes/routes";
import ProtectedRoute from "./routes/ProtectedRoute";
import AdminRoute from "./routes/AdminRoute";

function App() {
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return (
      <Routes>
        <Route path={allRoutes.LOGIN_PAGE.path} element={allRoutes.LOGIN_PAGE.element} />
        <Route path="*" element={<Navigate to={allRoutes.LOGIN_PAGE.path} replace />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Navigate to={allRoutes.MAIN_PAGE.path} replace />} />
      {Object.values(allRoutes).map(route => {
        const isAdminPage = route.path.startsWith(ADMIN_PATH);

        const element = isAdminPage ? (
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
