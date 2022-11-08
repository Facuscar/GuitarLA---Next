import Layout from "../components/layout";
import BlogList from "../components/blog-list";
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
                    <BlogList posts={posts} />
                </div>
            </main>
        </Layout>
    )
}

export default Blog;