import Head from "next/head";

const Layout = ({children, title = 'GuitarLA', description = 'GuitarLA - Guitar Store, blog and courses'}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <description>{description}</description>
            </Head>
            {children}
        </>
    )
}

export default Layout;