import Link from "next/link";
import Layout from "../components/layout";

export default function Home() {
  return (
    <>
      <Layout title='GuitarLA - Front page'>
        <h1>Hello, World! (In NextJS)</h1>

        <Link href="/aboutus">About us</Link>
      </Layout>
    </>
  )
}
