import Image from "next/image";
import Link from "next/link";

const Post = ({post}) => {
    const { content, image, title, url, publishedAt } = post

    return (
        <article>
            <Image src={image.data.attributes.formats.medium.url} alt="Here i should have an alt field for each image" width={600} height={400} ></Image>

            <div>
                <h3>{title}</h3>
                <p>{publishedAt}</p>
                <p>{content}</p>
                <Link href={`/blog/${url}`} >Read post</Link>
            </div>
        </article>
    );
}

export default Post;