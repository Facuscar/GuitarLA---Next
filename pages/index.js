import Layout from "../components/layout";
import BlogList from "../components/blog-list";
import GuitarList from "../components/guitar-list";
import Course from "../components/course";

export const getStaticProps = async () => {
  const guitarUrl = `${process.env.API_URL}guitarras?populate=image`;
  const postsUrl = `${process.env.API_URL}blogs?populate=image`;
  const courseUrl = `${process.env.API_URL}course?populate=image`

  const [ guitarRes, blogRes, courseRes] = await Promise.all([
      fetch(guitarUrl),
      fetch(postsUrl),
      fetch(courseUrl),
  ]);


  const [{ data: guitars }, { data: posts }, { data: course }] = await Promise.all([
      guitarRes.json(),
      blogRes.json(),
      courseRes.json(),
  ]);

  return {
      props: {
          guitars,
          posts,
          course,
      },
  }
}

export default function Home({ guitars, posts, course }) {
  console.log(course.attributes.image.data.attributes.url);
  return (
    <>
      <Layout title="GuitarLA - Front page" description="Music blog, guitr store and more">

        <main className="container">
          <h1 className="heading">Our collection</h1>
          <GuitarList guitars={guitars}/>
        </main>

        <Course course={course.attributes} />

        <section className="container">
          <h2 className="heading">Our blog</h2>
          <BlogList posts={posts}/>
        </section>
        
      </Layout>
    </>
  )
}
