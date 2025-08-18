import "./LoginPage.scss";
import { allRoutes } from "@/routes/routes";
import { Navigate } from "react-router-dom";
import LOGO from "@/assets/img/logo.png"; // Adjust the path as necessary
import KAKAO_LOGIN_BTN from "@/assets/img/kakao_login_medium_wide.png"; // Adjust the path as necessary

const LoginPage = () => {
  const isAuthenticated = false; // Simulating authentication state

  if (isAuthenticated) {
    return <Navigate to={allRoutes.MAIN_PAGE.path} replace />;
  }

  return (
    <div className="login_page">
      <img src={LOGO} className="logo" />

      <div className="login_desc">
        <p>간편하게 로그인하고</p>
        <p>다양한 서비스를 이용해보세요.</p>
      </div>

      <button className="login_btn">
        <img src={KAKAO_LOGIN_BTN} />
      </button>
    </div>
  );
};

export default LoginPage;
