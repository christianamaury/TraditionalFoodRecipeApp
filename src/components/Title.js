import React from "react"
import './title.css';

export const Title = ({title, substitle}) => {
  return (
      <div>
          <div id='heading'>
            <h1> {title} </h1>
          </div>
          <div id="heading2">
            <h3> {substitle} </h3> 
          </div>
      </div>

  )
}
