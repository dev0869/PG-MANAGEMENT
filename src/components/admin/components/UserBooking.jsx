import { Col, Row, Container, Table } from "react-bootstrap";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDetails,
  delDetails,
  updateDetails,
} from "../../../features/bookingSlice";
import { useEffect } from "react";
import { Datatable } from "react-ele2";

const UserBooking = () => {
  const dispatch = useDispatch();
  const data = useSelector((st) => st.booking.user);

// const RoomFilter=data.filter((ele)=>ele.room==='')

  console.log(data);

  useEffect(() => {
    dispatch(fetchDetails());
  }, []);

  const cols = [
    {
      headerName: "Date",
      field: "createdAt",
      renderCell: (ele) => {
        return <p>{ele.createdAt.split('T')[0]}</p>;
      }
    },
    {
      headerName: "Name",
      field: "name",
    },
    {
      headerName: "Address",
      field: "address",
    },
    {
      headerName: "City",
      field: "city",
    },
    {
      headerName: "Medical Issue",
      field: "medical",
    },
  ];

  return (
    <>
      <div className="m-8">
        {data?.length > 0 && (
          <Datatable
            cols={cols}
            data={[...data]}
            pagination
            title={"Customer list"}
            keysToExcludeFromView={["_id", "createdAt", "updatedAt","__v","id"]}
            actionButtons={{
              onDeleteBtnCLick: (ele) => {
                const { _id } = ele;
                dispatch(delDetails(_id));
              },
            }}
      
          />
        )}
      </div>
    </>
  );
};

export default UserBooking;
