import Link from "next/link";

import Layout from "../components/layout";

const NotFoundPage = () => {
    return (
        <Layout title="Page not found" description="The request content was not found. Sorry!">
            <p className="error">Page not found</p>
            <Link href="/" className="error-link">
                Take me to the homepage
            </Link>
        </Layout>
    )
}

export default NotFoundPage;