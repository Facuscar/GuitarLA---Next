import Image from "next/image";
import Link from "next/link";
import styles from "../styles/blog.module.css";
import { formatDate } from "../utils/helpers";

const Post = ({post}) => {
    const { content, image, title, url, publishedAt } = post

    return (
        <article>
            <Image src={image.data.attributes.formats.medium.url} alt="Here i should have an alt field for each image" width={600} height={400} ></Image>

            <div className={styles.content}>
                <h3>{title}</h3>
                <p className={styles.date}>{formatDate(publishedAt)}</p>
                <p className={styles.resume}>{content}</p>
                <Link href={`/blog/${url}`} className={styles.link} >Read post</Link>
            </div>
        </article>
    );
}

export default Post;