import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./GetJsonData.css";
import SingleCardData from "./SingleCardData";

const GetJsonData = () => {
  const [myUser, setMyUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:3030/users");
      setMyUser(res.data);
    };
    fetchData();
  }, []);

  // console.log(myUser);

  const [order, setOrder] = useState("ASC");
  const [stockOrder, setStockOrder] = useState("ASC");

  const SortAsc = () => {
    if (order == "ASC") {
      const sorted = [...myUser].sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
      setMyUser(sorted);
      setOrder("DSC");
    }
  };

  const SortDesc = () => {
    if (order == "DSC") {
      const sorted = [...myUser].sort((a, b) => {
        return b.title.localeCompare(a.title);
      });
      setMyUser(sorted);
      setOrder("ASC");
    }
  };

  const SortLowest = () => {
    if (stockOrder == "ASC") {
      const sorted = [...myUser].sort((a, b) => {
        return a.my_rating - b.my_rating;
      });
      setMyUser(sorted);
      setStockOrder("DSC");
    }
  };
  const SortHighest = () => {
    console.log("button clicked");
    if (stockOrder == "DSC") {
      const sorted = [...myUser].sort((a, b) => {
        return b.my_rating - a.my_rating;
      });
      console.log(sorted);
      setMyUser(sorted);
      setStockOrder("ASC");
    }
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
      <div className="flex gap-4">
      <button className="p-2 m-2" onClick={() => SortAsc()}>Sort By Name A to Z</button>
      <button className="p-2 m-2" onClick={() => SortDesc()}>Sort By Name Z to A</button>
      <button className="p-2 m-2" onClick={() => SortLowest()}>Low to High Rating</button>
      <button className="p-2 m-2" onClick={() => SortHighest()}>High to Low Rating</button>
      </div>
      <div>
        {myUser.map((user, index) => {
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
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GetJsonData;
