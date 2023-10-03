

import { Col, Row, Container, Table } from "react-bootstrap";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const UserBooking = () => {
  return (
    <>
      <div className="m-8">
        <Table hover className="text-nowrap">
          <thead>
            <tr>
              <th scope="col">Sr.No</th>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">City</th>
              <th scope="col">Medical Issue</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>false</td>
              <td>
                <div className="  flex gap-2 items-center ">
                 <RemoveRedEyeIcon/>
                <EditIcon color="primary"/>
                <DeleteIcon color="error"/>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default UserBooking;
