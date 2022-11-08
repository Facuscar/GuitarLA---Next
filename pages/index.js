import Link from "next/link";
import Layout from "../components/layout";
import styles from "../styles/grid.modules.css";

export default function Home({guitars, posts}) {
  return (
    <>
      <Layout title="GuitarLA - Front page" description="Music blog, guitr store and more">
        <main className="container">
          <h1 className="heading">Our collection</h1>
          <div className={styles.grid}>
            
          </div>
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