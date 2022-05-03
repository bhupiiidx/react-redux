import React from 'react'
import { useSelector } from "react-redux";

function Viewuser() {

  const allUser = useSelector((state) => state.modify);
  console.log("all users are", allUser)


  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {allUser.user.map(mapData => (
            <tr key={mapData.id}>
              <td>{mapData.username}</td>
              <td>{mapData.emailAddress}</td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  )
}

export default Viewuser