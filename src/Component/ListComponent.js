import { Table } from "reactstrap";
import { connect } from "react-redux";
export default function PhoneList({ localitems }) {
  return (
    <Table>
      <thead>
        <tr>
          <th>Phone name</th>
          <th>Version</th>
          <th>Price</th>
          <th>Release Date</th>
        </tr>
      </thead>
      {localitems.map((item) => (
        <tbody>
          <tr>
            <td>{item.phonename}</td>
            <td>{item.version}</td>
            <td>{item.price}</td>
            <td>{item.date}</td>
          </tr>
        </tbody>
      ))}
    </Table>
  );
}
