import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const ReadSingleData = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/users/` + id)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

console.log(data)
const navigate = useNavigate();

const handleDelete = (id) => {
  // window.confirm ask for confirmation of deletion
  const confirm = window.confirm("would you like to delete the user");
  if (confirm) {
    axios
      .delete(`http://localhost:3030/users/` + id)
      .then((res) => {
        // location.reload();
        navigate("/") // reload us to the same page
      })
      .catch((err) => console.log(err));
  }
  console.log(id);
};
  return (
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

      <div className=" border border-slate-200 m-2 p-2">
                <button  className="p-2 m-2" onClick={(e) => handleDelete(data.id)}>
                  Delete Series
                </button>
              </div>
     </div>
    </div>
  );
};

export default ReadSingleData;
