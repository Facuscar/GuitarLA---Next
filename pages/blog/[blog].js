import Image from "next/image";

import Layout from "../../components/layout";
import styles from "../../styles/blog.module.css";
import { formatDate } from "../../utils/helpers";

export const getServerSideProps = async ({ query: { blog } }) => {
    const response = await fetch(`${process.env.API_URL}blogs?filters[url]=${blog}&populate=image`)
    const data = await response.json();

    return {
        props: {
            post: data.data,
        },
    };
}

const Post = ({ post }) => {
    const { title, content, image, publishedAt } = post[0].attributes;
    return (
        <Layout title={`GuitarLA - ${title}`} description={`Blog about ${title}`} >
            <article className={`${styles.post} ${styles["mt-3"]}`}>
                <Image src={image.data.attributes.url} alt="Here i should have an alt field for each image" width={1000} height={400} ></Image>

                <div className={styles.content}>
                    <h3>{title}</h3>
                    <p className={styles.date}>{formatDate(publishedAt)}</p>
                    <p className={styles.text}>{content}</p>
                </div>
            </article>
        </Layout>
    );
}

export default Post;