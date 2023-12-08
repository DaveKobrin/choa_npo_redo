import NavBar from "./NavBar";
import Footer from "./footer";
import LowerNavBar from './LowerNavBar';

export default function Layout({children}) {
    return (
        <>
            <NavBar />
            <LowerNavBar />
            <main>{children}</main>
            <Footer />
        </>
    )
}