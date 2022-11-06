import Image from "next/image";

import styles from "../../styles/guitars.module.css";
import Layout from "../../components/layout";

export const getServerSideProps = async ({ query: { guitar } }) => {
    console.log(guitar);
    const res = await fetch(`${process.env.API_URL}guitarras?filters[url]=${guitar}&populate=image`);
    const data = await res.json();

    return {
        props: {
           guitar: data.data
        }
    };
}

const Guitar = ({ guitar }) => {

    const { name, description, image, price } = guitar[0].attributes;

    return (
        <Layout title={`GuitarLA - Guitar ${guitar}`} description={description} >
            <div className={styles.guitar}>
                <Image src={image.data.attributes.formats.medium.url} alt={`Guitar ${name} on a white background`} width={600} height={400} />
                <div className={styles.content}>
                    <h3>{name}</h3>
                    <p className={styles.description}>{description}</p>
                    <p className={styles.price}>${price}</p>
                </div>
            </div>
        </Layout>
    );
}

export default Guitar;