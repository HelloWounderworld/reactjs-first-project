export const ContentList = ({id, company, division, title, createdData, updatedData}) => {
    return (
        <tr>
            <th>{id}</th>
            <th>{company}</th>
            <th>{division}</th>
            <th>{title}</th>
            <th>{createdData}</th>
            <th>{updatedData}</th>
        </tr>
    );
}