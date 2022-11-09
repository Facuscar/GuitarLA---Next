import Image from "next/image";

import styles from "../../styles/guitars.module.css";
import Layout from "../../components/layout";

export const getServerSideProps = async ({ query: { guitar } }) => {
    const res = await fetch(`${process.env.API_URL}guitarras?filters[url]=${guitar}&populate=image`);
    const data = await res.json();

    if(!data.data.length) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
           guitar: data.data,
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

                    <form action="" className={styles.form} >
                        <label htmlFor="amount">Amount:</label>
                        <select name="" id="amount">
                            <option value="0">-- SELECT --</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>

                        <input type="submit" value="Add to cart" />
                    </form>
                </div>
            </div>
        </Layout>
    );
}

export default Guitar;