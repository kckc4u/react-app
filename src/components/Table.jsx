const Table = (props) =>  {
    return (
        <table>
            <TableHeader />
            <TableBody
                data={props.characterData}
                removeData={props.removeData}
            />
        </table>
    )
}

const TableHeader = () => <thead>
    <tr>
        <th>Name</th>
        <th>Job</th>
    </tr>
</thead>

const TableBody = ({data, removeData}) => {
    const rows = data.map(({name, job}, i) => (
        <tr key={i}>
            <td>{name}</td>
            <td>{job}</td>
            <td><button onClick={() => removeData(i)}>Delete</button></td>
        </tr>
    ));

    return <tbody>{rows}</tbody>
}

export default Table
