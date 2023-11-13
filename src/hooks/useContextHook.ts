import { useContext } from "react";
import { CookiesConsent, CookiesConsentContext } from "../context/CookiesConsentContext";


export const useConsentContext = (): CookiesConsent => {
    const context = useContext(CookiesConsentContext);
    if (context === undefined) {
      throw new Error('useMovieContext debe ser utilizado dentro de un MovieProvider');
    }
    return context;
  };