import Layout from "../components/layout";
import GuitarList from "../components/guitar-list";

export const getStaticProps = async () => {
    const response = await fetch(`${process.env.API_URL}guitarras?populate=image`);
    const result = await response.json();

    return {
        props: {
            guitars: result
        }
    }
}

const Store = ({guitars}) => {
    
    return (
        <Layout title="GuitarLA - Store" description="GuitarLA - Information about our store and more">
            <main className="container">
                <h1 className="heading">Our collection</h1>
                <GuitarList guitars={guitars}/>
            </main>
        </Layout>
    )
}

export default Store;