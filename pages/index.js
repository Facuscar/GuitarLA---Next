import Layout from "../components/layout";
import BlogList from "../components/blog-list";
import GuitarList from "../components/guitar-list";

export default function Home({guitars, posts}) {
  return (
    <>
      <Layout title="GuitarLA - Front page" description="Music blog, guitr store and more">
        <main className="container">
          <h1 className="heading">Our collection</h1>
          <GuitarList guitars={guitars}/>
          <section className="container">
            <h2 className="heading">Our blog</h2>
            <BlogList posts={posts}/>
          </section>
        </main>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const guitarUrl = `${process.env.API_URL}guitarras?populate=image`;
  const urlPosts = `${process.env.API_URL}blogs?populate=image`;

  const [ guitarRes, blogRes] = await Promise.all([
      fetch(guitarUrl),
      fetch(urlPosts),
  ]);


  const [{ data: guitars }, { data: posts }] = await Promise.all([
      guitarRes.json(),
      blogRes.json(),
  ]);

  return {
      props: {
          guitars,
          posts
      },
  }
}