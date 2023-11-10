import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout, HomePage, LandingPage, ContactPage, TeamPage, AboutPage, CookiesPage, PressPage } from "../pages";
import { ErrorRoute, PublicRoute } from "../routes";
import { ABOUT, CONTACT, COOKIES, HOME, LANDING, PRESS, TEAM } from "../config/paths";

const RouterPaths = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={LANDING} element={<PublicRoute />}>
          <Route index element={<LandingPage />} />
        </Route>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<PublicRoute />}>
            <Route path={HOME} element={<HomePage />} />
            <Route path={ABOUT} element={<AboutPage />} />
            <Route path={TEAM} element={<TeamPage />} />
            <Route path={CONTACT} element={<ContactPage />} />
            <Route path={COOKIES} element={<CookiesPage />} />
            <Route path={PRESS} element={<PressPage />} />
          </Route>
          <Route path="*" element={<ErrorRoute />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default RouterPaths;
