import { Outlet } from "react-router-dom"
import {  Header, Footer } from "../components";
import { LayoutPage } from './layoutPage.styles';


export const Layout = () => {
  
  


    return (
        <LayoutPage>
            <Header />            
            <main className="regularPages__grid" >
                <Outlet/>                
            </main>
            <Footer />
        </LayoutPage>

    )
}
