import Image from "next/image";
import Link from "next/link";
import logo from "../public/img/logo.svg";
import styles from "../styles/header.module.css"

const Header = () => {
    	return (
            <header className={styles.header}>
                <div className={`container ${styles.items}`}>
                    <Image src={logo.src} alt='Logo of guitarLA in white and gold' width={300} height={40} />

                    <nav className={styles.nav}>
                        <Link href="/">Front page</Link>      
                        <Link href="/aboutus">About us</Link>         
                        <Link href="/blog">Blog</Link>  
                        <Link href="/store">Store</Link>                 
                    </nav>
                </div>
            </header>
        )
}

export default Header;