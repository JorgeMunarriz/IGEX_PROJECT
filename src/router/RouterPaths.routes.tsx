import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout, HomePage, LandingPage, ContactPage, TeamPage, AboutPage } from "../pages";
import { ErrorRoute, PublicRoute } from "../routes";
import { ABOUT, CONTACT, HOME, LANDING, TEAM } from "../config/paths";

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
          </Route>          
          <Route path="*" element={<ErrorRoute />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default RouterPaths;
