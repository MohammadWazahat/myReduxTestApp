import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetSingleTasksQuery } from "../../redux/features/apiSlice/apiSliceTwo";

const ReadSingleData = () => {
  const { id } = useParams();
  // console.log(id);

  const { data, isError, isLoading } = useGetSingleTasksQuery(id);
  // console.log(data);

  return (
    <div>
      {isLoading ? (
        <p className="text-center">Loading...</p>
      ) : isError ? (
        <p className="text-center">{error.error || "Something went wrong"}</p>
      ) : (
        <div>
          <div className=" flex justify-end m-4 ">
            <Link className="border border-slate-200 p-3  " to="/">
              Shows List
            </Link>
          </div>
          <div>
            <div>
              <img src={data.image} alt="" />
            </div>
            <div>{data.title}</div>
            <div>{data.description}</div>
            <div>{data.genre}</div>
            <div>{data.origin}</div>
            <div>{data.starting_date}</div>
            <div>{data.ending_date}</div>
            <div>{data.isRunning}</div>
            <div>{data.no_of_seasons}</div>
            <div>{data.no_of_episodes}</div>
            <div>{data.runtime}</div>
            <div>{data.date_i_watched}</div>
            <div>{data.my_rating}</div>
            <div>{data.imdb_rating}</div>
            <div>{data.my_review}</div>
            <div className=" border border-slate-200 m-2 p-2">
              <Link
                className=" border border-slate-200 p-2 m-2"
                to={`/updateForm/` + data.id}
              >
                Edit Details
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReadSingleData;
