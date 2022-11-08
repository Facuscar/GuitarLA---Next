import Post from "./post";

const BlogList = ({posts}) => {
    return (
        <>
            {posts?.map(post => (
                <Post key={post.id} post={post.attributes} />
            ))}
        </>
    );
}

export default BlogList;