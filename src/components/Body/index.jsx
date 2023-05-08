import { Outlet } from "react-router-dom"
import Footer from "../Footer"
import Header from "../Header"

export default function Body(props) {
    return (<>
        <header>
            <Header />

        </header>
        <main>
            <Outlet />
        </main>
        <footer>
            <Footer />
        </footer>
    </>
    )
}