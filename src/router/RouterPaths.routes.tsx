import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout, HomePage, LandingPage, ContactPage, MediaPage, AboutPage,  } from "../pages";
import { ErrorRoute,  PublicRoute } from "../routes";
import { ABOUT, CONTACT, HOME, LANDING, MEDIA } from "../config/paths";

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
            <Route path={MEDIA} element={<MediaPage />} />
            <Route path={ABOUT} element={<AboutPage />} />
            <Route path={CONTACT} element={<ContactPage />} />
          </Route>
          {/* <Route path="/" element={<PrivateRoute />}>
            <Route path="profile" element={<ProfilePage />} />
            <Route path="movie/:id" element={<MoviesPageDetail />} />
          </Route> */}
          <Route path="*" element={<ErrorRoute/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default RouterPaths;
