import React from "react"

export const UsersList = ({users}) => {
    return (
      <ul>
          {users.map((item, index) => (
          <li key={index}>{item.name}</li>
          ))}
      </ul>
    )
  }