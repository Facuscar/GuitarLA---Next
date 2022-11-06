export const getServerSideProps = async ({ query: { guitar } }) => {
    console.log(guitar);
    const res = await fetch(`${process.env.API_URL}guitarras?filters[url]=${guitar}&populate=image`);
    const data = await res.json();

    return {
        props: {
           guitar: data.data
        }
    };
}

const Guitar = () => {

    return (
        <h1>Hi!</h1>
    );
}

export default Guitar;