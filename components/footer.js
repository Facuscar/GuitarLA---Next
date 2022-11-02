import Link from "next/link";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <nav className="nav">
                    <Link href="/" >Front page</Link>      
                    <Link href="/aboutus" >About us</Link>         
                    <Link href="/blog" >Blog</Link>  
                    <Link href="/store" >Store</Link>                 
                </nav>
                <p>All rights reserved {new Date().getFullYear()}</p>
            </div>
        </footer>
    )
}

export default Footer;