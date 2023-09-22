export const Content = ({id, company, division}) => {
    return (
        <div key={id}>
            <h1>{company}</h1>
            <p>{division}</p>
        </div>
    );
}