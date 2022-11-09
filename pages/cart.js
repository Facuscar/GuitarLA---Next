import Layout from "../components/layout";
import styles from "../styles/cart.module.css";

export const Cart = () => {
    return (
        <Layout title="GuitarLA - Shopping Cart">
            <main className="container">
                <h1 className="heading">Caart</h1>

                <div className={styles.content}>
                    <div className={styles.cart}>
                        <h2>Articles</h2>
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