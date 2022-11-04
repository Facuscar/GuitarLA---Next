import Image from "next/image";
import Link from "next/link";

import styles from "../styles/guitars.module.css"

const Guitar = ({guitar}) => {
    const { description, image, name, price, url} = guitar;
    return (
        <div className={styles.guitar}>
            <Image src={image.data.attributes.formats.medium.url} alt={`Guitar ${name} on a white background`} width={600} height={400} />
            <div className={styles.content}>
                <h3>{name}</h3>
                <p className={styles.description}>{description}</p>
                <p className={styles.price}>${price}</p>
                <Link href={`/guitar/${url}`} className={styles.link} >See guitar</Link>
            </div>
        </div>
    );
}

export default Guitar;