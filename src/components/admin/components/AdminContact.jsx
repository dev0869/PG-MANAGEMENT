import { useDispatch, useSelector } from "react-redux";
import { fetchContact, delContact } from "../../../features/bookingSlice";
import { useEffect, useState } from "react";
import Datatable from "usereactable";
import { unwrapResult } from "@reduxjs/toolkit";

const AdminContact = () => {
  const dispatch = useDispatch();
  // const [deep,setDeep]=useState([])
  const Data = useSelector((st) => st.booking.contact);

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  const cols = [
    {
      headerName: "Date",
      field: "createdAt",
      renderCell: (ele) => {
        return <p>{ele.createdAt.split("T")[0]}</p>;
      },
    },
    {
      headerName: "Name",
      field: "name",
    },
    {
      headerName: "Email",
      field: "email",
    },
    {
      headerName: "Number",
      field: "number",
    },
    {
      headerName: "Remark",
      field: "message",
    },
  ];


  return (
    <>
      <div className="m-8">
        {Data?.length > 0 && (
          <Datatable
            cols={cols}
            data={[...Data]}
            pagination
            title={"Customer list"}
            keysToExcludeFromView={[
              "_id",
              "createdAt",
              "updatedAt",
              "__v",
              "id",
            ]}
            actionButtons={{
              onDeleteBtnCLick: (ele) => {
                const { _id } = ele;
                dispatch(delContact(_id))
                  .then(unwrapResult)
                  .then(() => {
                    dispatch(fetchContact());
                  });
              },
            }}
          />
        )}
      </div>
    </>
  );
};

export default AdminContact;
