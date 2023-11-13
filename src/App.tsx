import { CookiesConsentProvider } from "./context/CookiesConsentContext";
import RouterPaths from "./router/RouterPaths.routes";

function App() {
  return (
    <>
      <CookiesConsentProvider>
        <RouterPaths />
      </CookiesConsentProvider>
    </>
  );
}

export default App;
