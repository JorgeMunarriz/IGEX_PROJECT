import { Outlet } from "react-router-dom";
import { Header, Footer } from "../components";
import { LayoutPage } from "./layoutPage.styles";

export const Layout = () => {
  

  // PDCookieConsent.config({
  //   defaultLang: "en",
  //   brand: { dev: false, name: "IGEX cookies", url: "https://igexglobal.com/", websiteOwner: "https://igexglobal.com/" },
  //   cookiePolicyLink: "https://igexglobal.com/cookies",
  //   hideModalIn: ["https://igexglobal.com/cookies"],
  //   styles: { primaryButton: { bgColor: "#A1FFA1", txtColor: "#036900" }, secondaryButton: { bgColor: "#EEEEEE", txtColor: "#333333" } },
  // });
  return (
    <LayoutPage>
      <Header />
      <main className="regularPages__grid">
        <Outlet />
      </main>
      <Footer />
    </LayoutPage>
  );
};
