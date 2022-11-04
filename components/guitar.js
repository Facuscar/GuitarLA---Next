import Image from "next/image";
import Link from "next/link";

const Guitar = ({guitar}) => {
    const { description, image, name, price, url} = guitar;
    return (
        <div>
            <Image src={image.data.attributes.formats.medium.url} alt={`Guitar ${name} on a white background`} width={600} height={400} />
            <div>
                <h3>{name}</h3>
                <p>{description}</p>
                <p>${price}</p>
                <Link href={`/guitar/${url}`}>See guitar</Link>
            </div>
        </div>
    );
}

export default Guitar;