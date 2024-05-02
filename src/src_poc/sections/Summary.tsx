import React from "react"

export const SummaryList = ({users}) => {
    return (
      <div>
          {users.sort((a, b) => b.score - a.score).map((item, index) => (
            <div key={index}>
              <h1>{item.name} {item.score}pts.</h1>
            </div>
          ))}
      </div>
    )
  }
