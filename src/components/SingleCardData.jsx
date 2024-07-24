import React from "react";

const SingleCardData = (user) => {
  console.log(user);
  return (
    <div className="flex justify-between items-center ">
      <div className=" m-2 p-2 mr-8">
        <img src={user.image} alt="" />
      </div>
      <div className=" ml-4 p-2">
        <div className="text-2xl">{user.title}</div>
        <div>( {user.starting_date} )</div>
        <div> Rating : {user.my_rating}</div>
      </div>

      {/* <div>{user.description}</div> */}
      {/* <div>{user.genre}</div>
      <div>{user.origin}</div> */}

      {/* <div>{user.ending_date}</div>
      <div>{user.isRunning}</div>
      <div>{user.no_of_seasons}</div>
      <div>{user.no_of_episodes}</div>
      <div>{user.runtime}</div>
      <div>{user.date_i_watched}</div> */}

      {/* <div>{user.imdb_rating}</div>
      <div>{user.my_review}</div> */}
    </div>
  );
};

export default SingleCardData;
