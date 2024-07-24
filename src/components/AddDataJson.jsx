import axios from "axios";
import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

const AddDataJson = () => {
  const [values, setValues] = useState({
    image: "",
    title: "",
    description: "",
    genre: "",
    origin: "",
    starting_date: "",
    isRunning: "",
    ending_date: "",
    no_of_seasons: "",
    no_of_episodes: "",
    runtime: "",
    date_i_watched: "",
    my_rating: "",
    imdb_rating: "",
    my_review: "",
  });

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    console.log(values);
    axios
      .post("http://localhost:3030/users", values)
      .then((res) => {
        console.log(res);
        // hook to navigate back to the page
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div>
        <div className="h-20 text-3xl flex justify-center items-center">
          Add New Show Details
        </div>
        <div className=" flex justify-end m-4 ">
          <Link className="border border-slate-200 p-3  " to="/">
            Shows List
          </Link>
        </div>
      </div>

      <div>
        <div className="border border-gray-200 m-4 p-4 ">
          <form onSubmit={submitForm}>
            <div className="flex m-2 p-2">
              <div className=" m-2 p-2 basis-1/4">
                <label htmlFor="image">Add Cover Image URL </label>
              </div>
              <input
                className="border border-gray-200 m-2 p-2 basis-3/4"
                  type="text"
                  placeholder="image"
                  name="image"
                  onChange={(e) =>
                    setValues({ ...values, image: e.target.value })
                  }
                />
             
            </div>
            <div className="flex   m-2 p-2">
              <div className=" m-2 p-2 basis-1/4">
                <label htmlFor="title">Show Title</label>
              </div>
              <input
                className="border border-gray-200 m-2 p-2 basis-3/4"
                  type="text"
                  placeholder="title"
                  name="title"
                  onChange={(e) =>
                    setValues({ ...values, title: e.target.value })
                  }
                />
            </div>
            <div className="flex   m-2 p-2">
              <div className=" m-2 p-2 basis-1/4">
                <label htmlFor="description">Add Show Description</label>
              </div>
              <input
                className="border border-gray-200 m-2 p-2 basis-3/4"
                  type="text"
                  placeholder="description"
                  name="description"
                  onChange={(e) =>
                    setValues({ ...values, description: e.target.value })
                  }
                />
            </div>
            <div className="flex   m-2 p-2">
              <div className=" m-2 p-2 basis-1/4">
                <label htmlFor="genre">Genre</label>
              </div>
              <input
                className="border border-gray-200 m-2 p-2 basis-3/4"
                  type="text"
                  placeholder="genre"
                  name="genre"
                  onChange={(e) =>
                    setValues({ ...values, genre: e.target.value })
                  }
                />
            </div>
            <div className="flex   m-2 p-2">
              <div className=" m-2 p-2 basis-1/4">
                <label htmlFor="origin">Origin</label>
              </div>
              <input
                className="border border-gray-200 m-2 p-2 basis-3/4"
                  type="text"
                  placeholder="origin"
                  name="origin"
                  onChange={(e) =>
                    setValues({ ...values, origin: e.target.value })
                  }
                />
            </div>
            <div className="flex   m-2 p-2">
              <div className=" m-2 p-2 basis-1/4">
                <label htmlFor="starting_date">Starting Date</label>
              </div>
              <input
                className="border border-gray-200 m-2 p-2 basis-3/4"
                  type="text"
                  placeholder="starting_date"
                  name="starting_date"
                  onChange={(e) =>
                    setValues({ ...values, starting_date: e.target.value })
                  }
                />
            </div>
            <div className="flex   m-2 p-2">
              <div className=" m-2 p-2 basis-1/4">
                <label htmlFor="isRunning">IsRunning</label>
              </div>
              <input
                className="border border-gray-200 m-2 p-2 basis-3/4"
                  type="text"
                  placeholder="isRunning"
                  name="isRunning"
                  onChange={(e) =>
                    setValues({ ...values, isRunning: e.target.value })
                  }
                />
            </div>
            <div className="flex  m-2 p-2">
              <div className=" m-2 p-2 basis-1/4">
                <label htmlFor="ending_date">Ending Date </label>
              </div>
              <input
                className="border border-gray-200 m-2 p-2 basis-3/4"
                  type="text"
                  placeholder="ending_date"
                  name="ending_date"
                  onChange={(e) =>
                    setValues({ ...values, ending_date: e.target.value })
                  }
                />
            </div>
            <div className="flex   m-2 p-2">
              <div className=" m-2 p-2 basis-1/4">
                <label htmlFor="no_of_seasons">Total No of Seasons</label>
              </div>
              <input
                className="border border-gray-200 m-2 p-2 basis-3/4"
                  type="text"
                  placeholder="no_of_seasons"
                  name="no_of_seasons"
                  onChange={(e) =>
                    setValues({ ...values, no_of_seasons: e.target.value })
                  }
                />
            </div>
            <div className="flex   m-2 p-2">
              <div className=" m-2 p-2 basis-1/4">
                <label htmlFor="no_of_episodes">Total No Of Episodes</label>
              </div>
              <input
                className="border border-gray-200 m-2 p-2 basis-3/4"
                  type="text"
                  placeholder="no_of_episodes"
                  name="no_of_episodes"
                  onChange={(e) =>
                    setValues({ ...values, no_of_episodes: e.target.value })
                  }
                />
            </div>
            <div className="flex   m-2 p-2">
              <div className=" m-2 p-2 basis-1/4">
                <label htmlFor="runtime">Runtime</label>
              </div>
              <input
                className="border border-gray-200 m-2 p-2 basis-3/4"
                  type="text"
                  placeholder="runtime"
                  name="runtime"
                  onChange={(e) =>
                    setValues({ ...values, runtime: e.target.value })
                  }
                />
            </div>
            <div className="flex   m-2 p-2">
              <div className=" m-2 p-2 basis-1/4">
                <label htmlFor="date_i_watched">Watched Date</label>
              </div>
              <input
                className="border border-gray-200 m-2 p-2 basis-3/4"
                  type="text"
                  placeholder="date_i_watched"
                  name="date_i_watched"
                  onChange={(e) =>
                    setValues({ ...values, date_i_watched: e.target.value })
                  }
                />
            </div>
            <div className="flex  m-2 p-2">
              <div className=" m-2 p-2 basis-1/4">
                <label htmlFor="my_rating">My Rating</label>
              </div>
              <input
                className="border border-gray-200 m-2 p-2 basis-3/4"
                  type="text"
                  placeholder="my_rating"
                  name="my_rating"
                  onChange={(e) =>
                    setValues({ ...values, my_rating: e.target.value })
                  }
                />
            </div>
            <div className="flex   m-2 p-2">
              <div className=" m-2 p-2 basis-1/4">
                <label htmlFor="imdb_rating">Imdb Rating</label>
              </div>
              <input
                className="border border-gray-200 m-2 p-2 basis-3/4"
                  type="text"
                  placeholder="imdb_rating"
                  name="imdb_rating"
                  onChange={(e) =>
                    setValues({ ...values, imdb_rating: e.target.value })
                  }
                />
            </div>
            <div className="flex m-2 p-2">
              <div className=" m-2 p-2 basis-1/4">
                <label htmlFor="my_review">My Review</label>
              </div>
              <input
                className="border border-gray-200 m-2 p-2 basis-3/4"
                  type="text"
                  placeholder="my_review"
                  name="my_review"
                  onChange={(e) =>
                    setValues({ ...values, my_review: e.target.value })
                  }
                />
            </div>
            <div className=" m-2 p-2 flex justify-center items-center">
              <button
                className="flex justify-between items-center p-2 m-2 px-6"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDataJson;
