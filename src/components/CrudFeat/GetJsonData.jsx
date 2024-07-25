import React from "react";
import { Link } from "react-router-dom";
import "./GetJsonData.css";
import SingleCardData from "./SingleCardData";
import {
  useGetTasksQuery,
  useDeleteTaskMutation,
} from "../../redux/features/apiSlice/apiSliceTwo";

const GetJsonData = () => {
  const { data: myUser, isError, isLoading, error } = useGetTasksQuery();
  // console.log(myUser)
  const [deleteTask] = useDeleteTaskMutation();

  const handleDelete = (id) => {
    // window.confirm ask for confirmation of deletion
    const confirm = window.confirm("would you like to delete the user");
    if (confirm) {
      deleteTask(id);
      location.reload();
    }
    console.log(id);
  };

  return (
    <div>
      <div>
        <div className="h-20 text-3xl flex justify-center items-center">
          Shows & Dramas
        </div>
        <div className=" flex justify-end m-4 ">
          <Link className="border border-slate-200 p-3 " to="/form">
            Add New Show
          </Link>
        </div>
      </div>

      <div>
        {isLoading ? (
          <p className="text-center">Loading...</p>
        ) : isError ? (
          <p className="text-center">{error.error || "Something went wrong"}</p>
        ) : (
          myUser.map((user, index) => {
            return (
              <div
                className="flex justify-between items-center m-2 p-2 "
                key={index}
              >
                <div className="flex items-center ">
                  <div className="mx-4">{index + 1}.</div>
                  <div className=" m-2 p-2 ml-8">
                    <SingleCardData {...user} />
                  </div>
                </div>

                <div className="  m-2 p-2">
                  <Link
                    className=" border border-slate-200 p-2 m-2"
                    to={`/read/` + user.id}
                  >
                    Web Series Details
                  </Link>
                  <div className=" border border-slate-200 m-2 p-2">
                    <button
                      className="p-2 m-2"
                      onClick={(e) => handleDelete(user.id)}
                    >
                      Delete Series
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default GetJsonData;
