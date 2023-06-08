import React, { useEffect, useState } from "react";

const FetchAPI = () => {
  const url = "https://jsonplaceholder.typicode.com/comments"

  const [list , setList] = useState([])

  const fetchApiComents = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    fetchApiComents()
  }, [list])

  return (
    <div>
      FetchAPI
     {list.map( info => {
       ` <ul> ${info.name}
        <li> ${info.email}</li>
      </ul>`
     })
     } 
      
    </div>
  )
}

export default FetchAPI
