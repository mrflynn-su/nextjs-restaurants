import Header from './Header'
import Footer from './Footer'
import { Fragment } from 'react'
const Layout = ({children}) => {
    return <Fragment>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
    </Fragment>
}
export default Layout;