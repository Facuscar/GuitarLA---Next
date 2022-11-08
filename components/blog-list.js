import Post from "./post";
import styles from "../styles/grid.module.css"

const BlogList = ({posts}) => {
    return (
        <div className={styles.grid}>
            {posts?.map(post => (
                <Post key={post.id} post={post.attributes} />
            ))}
        </div>
    );
}

export default BlogList;