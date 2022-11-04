import Guitar from "./guitar";
import styles from "../styles/grid.module.css"

const GuitarList = ({guitars}) => {
    return (
        <div className={styles.grid}>
            {guitars?.map( guitar => (
                <Guitar guitar={guitar.attributes} key={guitar.id} />
            ))}
        </div>
    );
}

export default GuitarList;