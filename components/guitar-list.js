import Guitar from "./guitar";

const GuitarList = ({guitars}) => {
    return (
        <>
            {guitars?.map( guitar => (
                <Guitar guitar={guitar.attributes} key={guitar.id} />
            ))}
        </>
    );
}

export default GuitarList;