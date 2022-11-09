import Image from "next/image";

import Layout from "../components/layout";
import styles from "../styles/cart.module.css";

export const Cart = ({ cart }) => {
    return (
        <Layout title="GuitarLA - Shopping Cart">
            <main className="container">
                <h1 className="heading">Cart</h1>

                <div className={styles.content}>
                    <div className={styles.cart}>
                        <h2>Articles</h2>

                        {cart.length === 0 ? 'Empty cart' : (
                            cart.map( guitar => (
                                <div key={guitar.id} className={styles.guitar}>
                                    <div>
                                        <Image src={guitar.image} width={250} height={480} alt={`Guitar ${guitar.name} in a white background`} />
                                    </div>
                                    <div>
                                        <p className={styles.name}>{guitar.name}</p>
                                        <p className={styles.price}>$<span>{guitar.price}</span></p>
                                        <p className={styles.subtotal}>Subtotal: $<span>{guitar.price * guitar.amount}</span></p>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                    <aside className={styles.resume}>
                        <h3>Purchase resume</h3>
                        <p>Total: </p>
                    </aside>
                </div>
            </main>
        </Layout>
    );
}

export default Cart;