import Image from "next/image";
import logo from "../public/img/logo.svg";

const Header = () => {
    	return (
            <header>
                <div className="container">
                    <Image src={logo.src} alt='Logo of guitarLA in white and gold' width={300} height={40} />
                </div>
            </header>
        )
}

export default Header;