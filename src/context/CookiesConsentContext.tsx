import { ReactNode, createContext, useState} from "react";


export interface CookiesConsent {
    cookiesConsent : boolean;
    acceptCookiesConsent: () => void;
    rejectCookiesConsent: () => void;
    toogleCookiesConsent: () => void;

}

type TypeProps = {
    children: ReactNode;
  };
export const CookiesConsentContext = createContext<CookiesConsent | undefined>(undefined);


export const CookiesConsentProvider = (props: TypeProps) => {
    const [cookiesConsent, setCookiesConsent] = useState<boolean>(false)

    const acceptCookiesConsent = () => {
        setCookiesConsent(true)

    }
    const rejectCookiesConsent = () => {
        setCookiesConsent(false)

    }
    const toogleCookiesConsent = () => {
        setCookiesConsent(!cookiesConsent)

    }
    
    const contextValue: CookiesConsent = {
        cookiesConsent,
        acceptCookiesConsent,
        rejectCookiesConsent,
        toogleCookiesConsent
    }

    return <CookiesConsentContext.Provider value={contextValue}>{props.children}</CookiesConsentContext.Provider>;

}