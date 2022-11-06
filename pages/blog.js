import Layout from "../components/layout";
import Post from "../components/post";
import styles from "../styles/grid.module.css";

export const getStaticProps = async () => {
    const response = await fetch(`${process.env.API_URL}blogs?populate=image`);
    const data = await response.json();

    return {
        props: {
            posts: data.data,
        },
    };
}

const Blog = ({posts}) => {
    console.log(posts);
    return (
        <Layout title="GuitarLA -Blog" description="GuitarLA - Blog about guitars, music and courses">
            <main className="container">
                <h1 className="heading">Blog</h1>
                <div className={styles.grid}>
                    {posts?.map(post => (
                        <Post key={post.id} post={post.attributes} />
                    ))}
                </div>
            </main>
        </Layout>
    )
}

export default Blog;