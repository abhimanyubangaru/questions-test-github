import React from 'react'

const Donate = (props) => {
  return (
    <div className="donate">
      <h3> If you liked seeing this Cate related media, here is the link:</h3>
      <a href={props.media}>{props.title}</a>

    </div>
  )
}

export default Donate
