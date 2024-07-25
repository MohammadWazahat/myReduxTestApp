import React from 'react'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AddDataJson from './CrudFeat/AddDataJson';
import GetJsonData from './CrudFeat/GetJsonData';
import UpdateData from './CrudFeat/UpdateData';
import ReadSingleData from './CrudFeat/ReadSingleData';
import TestRedux from './TestRedux/TestRedux';
import RtkHome from "./TestRtkQuery/RtkHome"


const MyApp = () => {

  const route = createBrowserRouter ([
    {
      path : "/form",
      element : <AddDataJson/> ,
    },
    {
      path : "/",
      element : <GetJsonData/>,
    },
    {
      path : "/updateForm/:id",
      element : <UpdateData/> ,
    },
    {
      path : "/read/:id",
      element : <ReadSingleData/> ,
    },
    {
      path : "/testRedux",
      element : <TestRedux/> ,
    },
    {
      path : "/testRtkQuery",
      element : <RtkHome/> ,
    },

  ])

  return (
    <div >
       <RouterProvider router={route}></RouterProvider>
    </div>
  )
}

export default MyApp
