import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

const Layout = ({children, title = 'GuitarLA', description = 'GuitarLA - Guitar Store, blog and courses'}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <description>{description}</description>
            </Head>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout;