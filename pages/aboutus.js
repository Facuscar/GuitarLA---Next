import Layout from "../components/layout";
import Image from "next/image";
import styles from "../styles/aboutus.module.css";

const AboutUs = () => {
    return (
        <Layout title="GuitarLA - About us" description="GuitarLA - Information about our store and more">
            <main className="container">
                <h1 className="heading">About us</h1>
                <div className={styles.content}>
                    <Image src="/img/aboutus.jpg" width={1000} height={800} alt='Brow electric guitar on a wooden table'/>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pulvinar porttitor dictum. Curabitur consectetur blandit libero. Sed in odio eros. Nam dolor lectus, convallis at risus id, aliquam volutpat ex. Mauris leo tellus, aliquet a convallis ut, vehicula eget tortor. Maecenas luctus turpis eget purus efficitur luctus. In nec congue enim. Quisque eu purus tempus lacus finibus pharetra.
                        </p>
                        <p>
                            Phasellus dictum tellus dui. Etiam aliquam enim velit, vitae rhoncus nisl aliquam tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed a purus nec neque molestie facilisis in in nisl. Integer ut est et eros tincidunt vestibulum. Etiam tincidunt faucibus turpis non posuere. Nam tempus mi et purus tincidunt mollis.
                        </p>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default AboutUs;