

import React from 'react'
import {Link,Outlet} from "react-router-dom"
const Student = () => {
  return (
    <div>
      <h1>Student portal</h1>
      <nav>
        <Link to="profile">Profile</Link> {" | "}
        <Link to="courses">Courses</Link>
      </nav>
      <hr />
      <Outlet/>
    </div>
  )
}

export default Student
