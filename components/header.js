import Image from "next/image";
import Link from "next/link";
import logo from "../public/img/logo.svg";
import { useRouter } from "next/router";
import styles from "../styles/header.module.css"

const Header = () => {

    const router = useRouter();

    	return (
            <header className={styles.header}>
                <div className={`container ${styles.items}`}>
                    <Link href="/">
                        <Image src={logo.src} alt='Logo of guitarLA in white and gold' width={300} height={40} />
                    </Link>
                    
                    <nav className={styles.nav}>
                        <Link href="/" className={router.pathname === '/' ? styles.active : ''} >Front page</Link>      
                        <Link href="/aboutus" className={router.pathname === '/aboutus' ? styles.active : ''} >About us</Link>         
                        <Link href="/blog" className={router.pathname === '/blog' ? styles.active : ''} >Blog</Link>  
                        <Link href="/store" className={router.pathname === '/store' ? styles.active : ''} >Store</Link>        
                        <Link href="/cart">
                            <Image width={30} height={25} src="/img/cart.png" alt="White shopping cart icon" />
                        </Link>         
                    </nav>
                </div>
            </header>
        )
}

export default Header;