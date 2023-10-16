import { useDispatch, useSelector } from "react-redux";
import {
  fetchDetails,
  delDetails,
  updateDetails,
} from "../../../features/bookingSlice";
import { useEffect, useState } from "react";
import Datatable from "usereactable";
import { unwrapResult } from "@reduxjs/toolkit";

const UserBooking = () => {
  const dispatch = useDispatch();
  // const [deep,setDeep]=useState([])
  const data = useSelector((st) => st.booking.user);
  const filters = useSelector((st) => st.filter.filter);

  const filteredData = filters
    ? data.filter((ele) => ele.room === filters)
    : data;

  console.log(filteredData);
  useEffect(() => {
    dispatch(fetchDetails());
  }, [dispatch]);

  const cols = [
    {
      headerName: "Date",
      field: "createdAt",
      renderCell: (ele) => {
        return <p>{ele?.createdAt?.split("T")[0]}</p>;
      },
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
        <Datatable
          cols={cols}
          data={filteredData}
          pagination
          title={"Customer list"}
          keysToExcludeFromView={["_id", "createdAt", "updatedAt", "__v", "id"]}
          actionButtons={{
            onDeleteBtnCLick: (ele) => {
              const { _id } = ele;
              swal({
                title: "Are you sure?",
                text: "Are you sure that you want delete this product?",
                icon: "warning",
                dangerMode: true,
              }).then((willDelete) => {
                if (willDelete) {
                  dispatch(delDetails(_id))
                    .then(unwrapResult)
                    .then(
                      swal(
                        "Deleted!",
                        "Your product has been deleted!",
                        "success"
                      ),
                      dispatch(fetchDetails())
                    );
                }
              });
            },
          }}
        />
      </div>
    </>
  );
};

export default UserBooking;
