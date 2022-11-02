import Link from "next/link";
import styles from '../styles/footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.content}`}>
                <nav className={styles.nav}>
                    <Link href="/" >Front page</Link>      
                    <Link href="/aboutus" >About us</Link>         
                    <Link href="/blog" >Blog</Link>  
                    <Link href="/store" >Store</Link>                 
                </nav>
                <p className={styles.copyright}>All rights reserved {new Date().getFullYear()}</p>
            </div>
        </footer>
    )
}

export default Footer;